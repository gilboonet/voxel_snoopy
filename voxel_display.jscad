// AFFICHAGE DE VOXEL
// Gilbert Duval 2016-08-19
include ('SnoopyVoxels.jscad');

// Paramètres
function getParameterDefinitions(){ return[

{name:"g1",     type:"group",   caption:"VOLUME"},
{name:"larg",   type:"float",   caption:"Largeur :", initial:'2'},

]}

// Application
function main(params) {
volume();

let voxel = volume.voxels;
let res = [];
let L = params.larg;
let position = voxel.position;
//position = [0,0,-voxel.position.z+L/2];

//let base = cube({size:L, center:true}).translate(position);
let base = cube({size:L, center:true}).translate([0,0,40]);

voxel.voxels.forEach(element=>res.push(base.translate(element)));

//res = union(res);

return res;
}
