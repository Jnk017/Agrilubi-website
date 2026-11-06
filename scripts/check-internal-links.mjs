/**
 * Read-only, dependency-free check of literal internal links in Next.js App Router pages.
 * Dynamic href expressions are intentionally excluded and must be reviewed separately.
 * Run: npm run check:links
 */
import {existsSync,readdirSync,readFileSync} from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const app=path.join(root,"src","app");
function walk(dir){
 if(!existsSync(dir))throw new Error("Missing directory: "+dir);
 return readdirSync(dir,{withFileTypes:true}).flatMap(entry=>{
  const full=path.join(dir,entry.name);
  return entry.isDirectory()?walk(full):entry.isFile()?[full]:[];
 });
}
const pages=walk(app).filter(p=>p.endsWith(path.sep+"page.tsx"));
const routeOf=file=>{
 const relative=path.relative(app,path.dirname(file)).split(path.sep).filter(segment=>!/^\(.*\)$/.test(segment));
 return "/"+relative.join("/");
};
const routes=new Set(pages.map(routeOf));
const matchesRoute=target=>{
 if(routes.has(target))return true;
 return [...routes].some(route=>{
  const bits=route.split("/").filter(Boolean);
  const actual=target.split("/").filter(Boolean);
  if(bits.length!==actual.length)return false;
  return bits.every((part,index)=>part.startsWith("[")&&part.endsWith("]")||part===actual[index]);
 });
};
const failures=[];
let tested=0;
for(const file of walk(path.join(root,"src")).filter(p=>p.endsWith(".tsx"))){
 const src=readFileSync(file,"utf8");
 // Literal routes in JSX: href="/route" or href={'/route'} or href={"/route"}
 const rx=/\bhref\s*=\s*(?:["'](\/[^"'#?]*)["']|\{\s*["'](\/[^"'#?]*)["']\s*\})/g;
 for(const match of src.matchAll(rx)){
  const raw=match[1]??match[2];
  if(!raw||raw.startsWith("//"))continue;
  const target=raw.length>1?raw.replace(/\/+$/,""):"/";
  tested++;
  if(!matchesRoute(target))failures.push(path.relative(root,file)+": "+target);
 }
}
if(failures.length){
 console.error("Unresolved literal internal routes:\n"+failures.join("\n"));
 process.exitCode=1;
}else console.log("Internal links OK: "+tested+" literal routes checked against "+routes.size+" pages.");
console.log("Dynamic route expressions, external links and runtime behavior require separate review.");
