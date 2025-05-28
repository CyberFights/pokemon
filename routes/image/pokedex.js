module.exports = {
  path: "/image/pokedex",
  code: `
  $send[200;canvas;$default]
  
  
  $drawText[$getData[stats.speed];625;475;50;20]
  $drawText[$getData[stats.sp_def];574;475;50;20]
  $drawText[$getData[stats.sp_atk];518;475;50;20]
  $drawText[$getData[stats.defense];464;475;50;20]
  $drawText[$getData[stats.attack];410;475;50;20]
  $font[15;Times New Roman;bold]
  $drawText[Atk;405;415;50;15]
  $drawText[Def;458;415;50;15]
  $drawText[Sp.A;513;415;50;15]
  $drawText[Sp.D;568;415;50;15]
  $drawText[Spd;620;415;50;15]


$color[#000000]  
$font[16;Times New Roman;bold]
  $drawText[#$getData[id];79;450;80;60;left]  
  $color[#000000]
  
  $font[19;Times New Roman;bold]
  $drawText[$replaceText[$replaceText[$getData[species[0]];@left;];@right;];540;685;80;40;left]
  $drawText[Species:;540;665;80;20;left]
  $drawText[Type:;410;665;40;20;left]
  $drawText[$getData[type];410;675;80;40;left]
  $drawText[$getData[description];410;290;260;200;left]
  $color[#2ecc72]
  $font[14;Times New Roman]
  $drawText[$getData[name]:;410;255;160;15;left]
  $color[#5bc000]
 $font[18;Times New Roman;bold]


$drawText[$getData[weight];80;685;65;10] $drawText[$getData[height];80;655;65;10]
 $font[11;Times New Roman;bold]
 
 $color[#2ecc72]
 
 $drawImage[pokemon;105;330;110;110]
$loadImage[pokemon;url;http://play.pokemonshowdown.com/sprites/ani/$encodeURI[$getQuery[pokemon]].gif]
 $drawImage[base;0;0;725;800] $loadImage[base;url;https://cdn.discordapp.com/attachments/751712788753154119/1018029179406647396/image.png?ex=6838984e&is=683746ce&hm=1f45c04577dda6b852ba2dd046c60eadf39026a860ddee00d2b4ba400f533812&]
  $createCanvas[725;800]
  $request[https://some-random-api.ml/pokemon/pokedex?pokemon=$getQuery[pokemon]]`
}
