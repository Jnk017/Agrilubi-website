import {approvedSites} from "@/data/territory";
import {approvedBoundary,sankuruBoundary} from "@/data/territory-geojson";
import {TerritoryAtlasClient} from "@/components/territory-atlas-client";
export function TerritoryAtlas(){
 const sites=approvedSites();
 const boundary=approvedBoundary(sankuruBoundary)?sankuruBoundary:null;
 return <section className="band" aria-labelledby="atlas-title"><p className="eyebrow">Données géographiques vérifiées</p><h2 id="atlas-title">Atlas du territoire</h2>{sites.length||boundary?<TerritoryAtlasClient sites={sites} boundary={boundary}/>:<div className="card"><h3>Cartographie détaillée en préparation</h3><p>Aucune géométrie ni aucun site approuvé n'est actuellement disponible. L'atlas sera alimenté uniquement après validation des coordonnées, de la provenance et des autorisations de publication.</p></div>}<p className="quiet-note">Les informations cartographiques ne doivent pas être considérées comme une preuve foncière ou administrative.</p></section>;
}
