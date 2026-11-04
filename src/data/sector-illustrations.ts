/**
 * Wikimedia Commons photos used exclusively as illustrations.
 * These images do not document SALU's activities or locations in Sankuru.
 * Attribution and licensing are visible alongside every photograph.
 */
export type SectorIllustration={
 slug:string;filename:string;alt:string;author:string;license:"CC BY 4.0"|"CC BY-SA 4.0"|"CC0 1.0";licenseUrl:string;sourceUrl:string;
};
export const sectorIllustrations:Record<string,SectorIllustration>={
 vivrieres:{slug:"vivrieres",filename:"Cassava_and_maize_farm.jpg",alt:"Parcelle illustrant la culture associée du manioc et du maïs",author:"Nubelbariloe",license:"CC BY 4.0",licenseUrl:"https://creativecommons.org/licenses/by/4.0/",sourceUrl:"https://commons.wikimedia.org/wiki/File:Cassava_and_maize_farm.jpg"},
 maraicheres:{slug:"maraicheres",filename:"Chilli_pepper_plant.jpg",alt:"Plant de piment en culture maraîchère",author:"Pascal Kings",license:"CC BY 4.0",licenseUrl:"https://creativecommons.org/licenses/by/4.0/",sourceUrl:"https://commons.wikimedia.org/wiki/File:Chilli_pepper_plant.jpg"},
 perennes:{slug:"perennes",filename:"Cocoa_tree_with_pods.jpg",alt:"Cacaoyer portant des cabosses",author:"Otuo-Akyampong Boakye",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",sourceUrl:"https://commons.wikimedia.org/wiki/File:Cocoa_tree_with_pods.jpg"},
 pisciculture:{slug:"pisciculture",filename:"Fish_Farming_Pond.jpg",alt:"Bassin d'élevage piscicole utilisé à titre d'illustration",author:"Alabama Extension / Justin Miller",license:"CC0 1.0",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",sourceUrl:"https://commons.wikimedia.org/wiki/File:Fish_Farming_Pond.jpg"},
 elevage:{slug:"elevage",filename:"Chicken_in_a_farm.jpg",alt:"Volaille dans un élevage agricole",author:"Abza1",license:"CC0 1.0",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",sourceUrl:"https://commons.wikimedia.org/wiki/File:Chicken_in_a_farm.jpg"},
 producteurs:{slug:"producteurs",filename:"Harvesting_paddy.jpg",alt:"Groupe d'agriculteurs récoltant du riz dans une exploitation à l'étranger",author:"Zaheed Sarwer Khan",license:"CC BY 4.0",licenseUrl:"https://creativecommons.org/licenses/by/4.0/",sourceUrl:"https://commons.wikimedia.org/wiki/File:Harvesting_paddy.jpg"}
};
export function sectorImageUrl(item:SectorIllustration){return "https://commons.wikimedia.org/wiki/Special:FilePath/"+encodeURIComponent(item.filename)+"?width=960";}
