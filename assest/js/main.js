document.addEventListener('DOMContentLoaded', function (event) {
  var lang = parseQuery().lang || getDefaultLang();
  var news = getNewsByLang(lang);
  document.getElementById('newsDetail').outerHTML = news;
})
function parseQuery() {
  var search = location.search;
  if (!search || !search.length) {
    return {};
  }
  var hashes = search.slice(1).split('&');
  var ret = {};
  return hashes.reduce(function (acc, hash) {
    var key = hash.split('=')[0];
    var val = hash.split('=')[1];
    acc[decodeURIComponent(key)] = decodeURIComponent(val);
    return acc;
  }, ret);
}

function getDefaultLang() {
  var defaultLang = (navigator.language || navigator.userLanguage || 'en')
    .toLowerCase()
    .split('-')[0];
  var acceptLang = ['en', 'zh', 'es', 'id', 'ru', 'vi', 'pt', 'ar', 'ko', 'tr', 'ja', 'th', 'fr'];
  var lang = 'en';
  if (acceptLang.indexOf(lang) > -1) {
    lang = defaultLang;
  }
  return lang;
}

function getNewsByLang(lang) {
  lang = lang.toLowerCase();
  var langMap = {
    // default
    en: `
      <div class="g-detail">
        <h2 class="c-h2">Patch Notes: 3volution</h2>
        <div class="m-detail-time">Jul. 27, 2020</div>
        <div class="m-news-detail">
          <p class="orange">Clash Squad</p>
          <ul>
            <li>
              <span>Rank Season 2<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Season starts 07/30 17:00 SGT</span><br>
                <span>â€œClash Squad Season 2 is here! Rank up to Gold III or above to receive the Clash Squad exclusive
                  item - The Golden G18!â€</span><br>
                <br>
                <span style="color: #666666;">
                  Clash Squad Store Adjustment. <br>
                  Career stats for Clash Squad can now be viewed under the player's personal profile. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>New Item - Horizaline (Revive Kit)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Available in classic</span><br>
                <span>â€œPlayers usually do not get revived by their teammates in Clash Squad because of the constant
                  battle that happens around the map. With the introduction of the Horizaline, players get to have
                  another chance to join the battle once theyâ€™ve been downed. The Horizaline can be quite costly but it
                  can certainly turn a round in your favor.â€</span><br>
                <br>
                <span style="color: #666666;">
                  The Horizaline will not stop bleeding or damage from players or the play zone. <br>
                  Players can restore combat ability by using the revive kit while downed. <br>
                  Players will be revived with 100 HP after using the Horizaline. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Aim Assist<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Aim Assist adjustment in Clash Squad</span><br>
                <span>â€œWeâ€™ve received complaints that the aim assist currently prioritize targets who are downed instead
                  of the ones that are still in combat. This problem can be extremely annoying in Clash Squad where
                  players are constantly engaging in battles. Weâ€™re adjusting the mechanism so players can target the
                  enemies that remain as threats before finishing them off one by one. â€</span><br>
                <br>
                <span style="color: #666666;">
                  Aim assist will now prioritize players who are in combat (Clash Squad only). <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Gameplay</p>
          <ul>
            <li>
              <span>New Spawn Island - â€œThe Runwayâ€<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Spawn island rework</span><br>
                <span>â€œItâ€™s been a while since we released a brand new spawn island. Take a look and let us know how you
                  feel!â€</span><br>
                <br>
                <span style="color: #666666;">
                  New spawn island: â€œThe Runwayâ€ now available.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Crouch & Uncrouch Mechanism<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Headshot protection when crouching</span><br>
                <span>â€œIt came to our attention that some players are setting up scripts to hit an instant headshot by
                  un-crouching really quickly after scoping in. Since this action leaves the players on the receiving
                  end with no chance to counter play, we are going to add a minor debuff towards headshot damage upon
                  un-crouching. This change is targeted only towards players who are abusing this exploit, it should not
                  affect normal game play.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Headshot will do reduced damage shortly after un-crouching. (0.85s)<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Vehicles Update<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Vehicle speed adjustment</span><br>
                <span>â€œYou guys asked and we delivered.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Maximum speed adjustment for the following vehicles: <br>
                  &nbsp;&nbsp;&nbsp;- Motorbike: <del>120km/h</del>->130km/h <br>
                  &nbsp;&nbsp;&nbsp;- Jeep: <del>100km/h</del>-> 110km/h <br>
                  &nbsp;&nbsp;&nbsp;- TuTu: <del>90km/h</del>-> 100km/h <br>
                  &nbsp;&nbsp;&nbsp;- SUV: <del>130km/h</del>->120km/h <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Driving Mechanism<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Optimized speed display and max-speed
                  effects</span><br>
                <span>â€œAs we increase the speed of most vehicles, weâ€™re also adding a camera movement that will make
                  driving more comfortable. After the update, the camera will be zoomed out slightly when players reach
                  the max speed of the vehicle. This should make the driving experience smoother since the driver will
                  be able to see more upcoming objects and obstacles while driving.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Added a more accurate display of the vehicle's speed.<br>
                  Camera will now zoom out slightly when the vehicle is at max speed.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Glider<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Descending speed increases when above a certain
                  height</span><br>
                <span>â€œWeâ€™re making some changes to the gliders because players are using them as an item to get to some
                  unreachable spots instead of using them as a tool to land from high altitudes safely.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Players will now descend faster when theyâ€™re above 38m in altitude. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Health Regeneration<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Added a limit on the amount of heath that can be
                  restored per second.</span><br>
                <span>â€œWith the introduction of new health regeneration mechanisms and skills, it came to our attention
                  that some players can survive outside the playzone way longer than intended by using all the healing
                  abilities and items at once. Weâ€™re taking some of this power away to avoid players getting BOOYAHs by
                  hiding outside the playzone.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Players can no longer receive healing more than 50HP/s. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Weapon and Balance</p>
          <ul>
            <li>
              <span>New Weapon - AUG<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Available in Classic and Clash Squad (Rank &
                  Classic)</span><br>
                <span>â€œIt has been a while since we released an AR into Free Fire. The AUG is an extremely agile and
                  flexible option players can go for in game. The pre-attached 2x scope allows players to immediately
                  engage in mid-range combats and the 35 rounds magazine is extremely useful in close range situations.
                  Try out the AUG with a long range weapon to maximize its efficiency.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Damage Ratio: 31 <br>
                  Magazine Capacity: 35 <br>
                  Rate of fire: .147 <br>
                  Comes with pre-attached 2x scope that is interchangeable with other scopes. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>AK<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Available in all modes</span><br>
                <span>â€œAlthough the AK is one of the all-time-favorite weapons, it is certainly underperforming compared
                  to the top ARs in the game. We are restoring the power of the AK a bit by minorly increasing its
                  stopping power.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Damage Ratio: <del>37</del>->38 <br>
                  Minimum damage: <del>12</del>->14 <br>
                  Rate of fire: -3% <br>
                  Precise shots: <del>1</del>->2 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>FAMAS<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Available in all modes</span><br>
                <span>â€œCurrently, the FAMAS is not agile enough for it to be in the top AR list. Weâ€™re giving it some
                  additional movement speed so players can have an easier time moving around between the
                  3-round-bursts.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Movement speed while shooting: +10% <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>M249<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Available in all modes</span><br>
                <span>â€œThe M249 is no doubt one of the weakest air-drop weapons currently. Weâ€™re giving it a major buff
                  this patch so it can provide suppressing fire effectively.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Precise shots: 4->12 <br>
                  Minimum damage: <del>15</del>->21 <br>
                  Maximum recoil: -18% <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>SPAS12<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Available in all modes</span><br>
                <span>â€œAlthough the SPAS is a top contender in damage output in point black range, the sharp damage
                  drop-off is the reason why the SPAS performs significantly worse than the M1887 and M1014. Weâ€™re
                  giving the SPAS a minor buff this patch to close its gap with other SGs.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Minimum damage: <del>6</del>->7 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>XM8<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Available in all modes</span><br>
                <span>â€œThe XM8 has been on the top of the AR list for a while now. One of the reasons is because this
                  weapon is so flexible and easy to use. Weâ€™re making some adjustments to the XM8 this patch so it will
                  have a deeper learning curve.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Precise shots: 4->3 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Gamemode</p>
          <ul>
            <li>
              <span>Weapon Presets<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Available in TDM, Kill Secured, and Rampage</span><br>
                <span>â€œWe received feedback from the players that the weapon presets are too restrictive because it only
                  provided 4 sets of weapons. Weâ€™re introducing a new weapon selection menu so all the players can
                  choose and change the equipment they want every time they revive.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Players can now purchase weapons and gear with credits provided every round. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Big Head Mode<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Parachute and revive mechanism adjustment. </span><br>
                <span>â€œWeâ€™re adding new mechanisms to the Big Head Mode so players can redeploy and rejoin the battle
                  faster!â€</span><br>
                <br>
                <span style="color: #666666;">
                  Players now have the option to give up and redeploy when being downed. <br>
                  Lowered the altitude of parachuting so players can re-enter the battle faster. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Gun King (Squad)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Weapon upgrade mechanism adjustment and now supports
                  4v4. </span><br>
                <span>â€œOne of the biggest issues we found with the original Gun King was that players wanted to play
                  with their friends, even if theyâ€™re on the enemy team. Weâ€™re adding a 4v4 twist to Gun King so players
                  can now partner up with their squad for a 4v4 showdown!â€</span><br>
                <br>
                <span style="color: #666666;">
                  4v4 is now supported. <br>
                  Players can now choose to â€œskipâ€ a weapon if they lose 3 consecitive battles in a row or if their
                  progress is significantly behind compared to other players. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Characters and Pets</p>
          <ul>
            <li>
              <span>New Character - Luqueta<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Available in Free Fire Store. </span><br>
                <span>â€œAre you ready for a hat trick?â€</span><br>
                <br>
                <span style="color: #666666;">
                  Hat Trick: Every kill increases the max HP by {8/10/12/14/16/18}, up to 35. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>New Pet - Mr. Waggor<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Coming Soon! </span><br>
                <span>â€œAre you sick and tired of not having any gloo walls? Mr. Waggor will make sure you always have a
                  gloo wall in your pocket!â€</span><br>
                <br>
                <span style="color: #666666;">
                  Smooth Gloo: When a player has less than [1/1/2] Gloo Wall grenades, Mr. Waggor can produce 1 Gloo
                  Wall grenade every [120/100/100] seconds. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Hayato â€œFirebrandâ€ - Coming Soon!<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Coming Soon! </span><br>
                <span>â€œOur second awakened character - Hayato â€œFirebrandâ€ is finally here! Join the 3rd Anniversary
                  event on 08/22 to get him for FREE!â€</span><br><br>
                <span style="color: #666666;">
                  Art of Blades: Reduce frontal damage by {20/25/30/35/40}% for 3s. CD: 50s. Firing will interrupt this
                  ability.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">System</p>
          <ul>
            <li>
              <span>Acting Guild Leader<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">New management system added </span><br>
                <span>â€œFrom the last update, we received lots of positive feedback on the additional management tools we
                  added to the guild. However, we got feedback that the biggest pain point of some guild is when the
                  guild leader is no longer active. Weâ€™re going to add a system for guild members to vote for a
                  temporary guild leader so the guild can remain active even without its original leader.â€</span><br>
                <br>
                <span style="color: #666666;">
                  When the guild leader is inactive for more than 30 days, guild members will receive a notification to
                  vote for a new acting guild leader. <br>
                  Once voted, the acting guild leader will have all the authority of the guild leader until the original
                  leader returns or if the acting guild leader is inactive for more than 7 days. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Bug Fix and Optimizations<br></span>
              <span class="m-news-detail-s">
                &nbsp;&nbsp;&nbsp;- New match summary page for Clash Squad and Gun King. <br>
                &nbsp;&nbsp;&nbsp;- Players can now send a system-generated link to invite friends to join their party.
                <br>
                &nbsp;&nbsp;&nbsp;- Optimized in-game weapon HUD. <br>
                &nbsp;&nbsp;&nbsp;- The Thermal Scope can now see through smoke grenades. <br>
                &nbsp;&nbsp;&nbsp;- Party invitation display optimization. <br>
                &nbsp;&nbsp;&nbsp;- Updated new contents into the FF Journal. <br>
                &nbsp;&nbsp;&nbsp;- Close combat mode introduction video display optimization. <br>
                &nbsp;&nbsp;&nbsp;- Optimized the overtime display for TDM mode. <br>
                &nbsp;&nbsp;&nbsp;- Parachuting animation optimization. <br>
                &nbsp;&nbsp;&nbsp;- Kalahari has now been added to the custom rooms. <br>
                &nbsp;&nbsp;&nbsp;- Fixed a bug where players can leave the preparation area in some modes before
                freezing time is over. <br>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
        </div>
      </div>
    `,
    es: `
      <div class="g-detail">
        <h2 class="c-h2">Notas del Parche: 3voluciÃ³n</h2>
        <div class="m-detail-time">Jul. 27, 2020</div>
        <div class="m-news-detail">
          <p class="orange">Duelo de Escuadras - Clasificatoria</p>
          <ul>
            <li>
              <span>Temporada 2<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">A partir del 30 de julio </span><br>
                <span style="font-style: italic; color: #666666;">4:00 MX | 5:00 CL | 6:00 ARG</span><br>
                <span>"Duelo de Escuadras - Clasificatoria Temporada 2 ya estÃ¡ aquÃ­! Sube de rango a Oro III o mÃ¡s para
                  recibir la recompensa exclusiva: Â¡G18 Dorada!"</span><br>
                <br>
                <span style="color: #666666;">
                  Ajuste de la tienda de Duelo de Escuadras. <br>
                  El historial de Duelo de Escuadras ahora se puede ver en el perfil del jugador. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Nuevo objeto - Horizonalina <br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Kit para auto revivirse</span><br>
                <span style="font-style: italic; color: #666666;">Disponible sÃ³lo en Duelo de Escuadras ClÃ¡sico
                </span><br>
                <span>"Por lo general, en Duelo de Escuadras los jugadores no son revividos por sus compaÃ±eros de equipo
                  debido a la constante batalla. Con la introducciÃ³n de la Horizonalina, los jugadores tienen otra
                  oportunidad de unirse a la batalla una vez que han sido derribados. La Horizonalina puede ser algo
                  costosa, pero sin duda puede dar la vuelta a tu favor."</span><br>
                <br>
                <span style="color: #666666;">
                  La Horizonalina no detendrÃ¡ el daÃ±o recibido por otros jugadores o la zona no segura. <br>
                  Los jugadores pueden restaurar la habilidad de combate usando el kit de reanimaciÃ³n mientras estÃ¡n
                  derribados. <br>
                  Los jugadores serÃ¡n revividos con 100 PV despuÃ©s de usar la Horizonalina. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Asistencia de PunterÃ­a<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ajuste en la asistencia de punterÃ­a en Duelo de
                  Escuadras</span><br>
                <span>"Hemos recibido quejas de que la asistencia de punterÃ­a actualmente prioriza a los objetivos que
                  estÃ¡n derribados en lugar de los que todavÃ­a estÃ¡n en combate. Este problema puede ser extremadamente
                  molesto durante Duelo de Escuadras, pues los jugadores estÃ¡n constantemente participando en batallas.
                  Ajustamos el mecanismo para que los jugadores puedan apuntar a los enemigos que permanecen como
                  amenazas antes de acabar con ellos uno por uno."</span><br>
                <br>
                <span style="color: #666666;">
                  Ahora la asistencia de punterÃ­a darÃ¡ prioridad a los jugadores que estÃ¡n en combate (sÃ³lo en Duelo de
                  Escuadras). <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Jugabilidad</p>
          <ul>
            <li>
              <span>Nueva Isla Inicial - "La Pistaâ€<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">RediseÃ±o de la isla inicial</span><br>
                <span>"Ha pasado un tiempo desde que lanzamos una nueva isla inicial. Â¡Echa un vistazo y cuÃ©ntanos cÃ³mo
                  te sientes entre aviones y pistas!"</span><br>
                <br>
                <span style="color: #666666;">
                  "La pista" ya estÃ¡ disponible.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Mecanismo de Disparo<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ProtecciÃ³n contra disparos a la cabeza al
                  agacharse</span><br>
                <span>"Detectamos que algunos jugadores estÃ¡n disparando a la cabeza inmediatamente despuÃ©s de
                  agacharse. Dado que esta acciÃ³n deja a los jugadores receptores sin posibilidad de contraataque, vamos
                  a ajustar el daÃ±o del disparo a la cabeza al agacharse."</span><br>
                <br>
                <span style="color: #666666;">
                  El daÃ±o de un disparo a la cabeza despuÃ©s de agacharse se reducirÃ¡. (0,85s)<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ActualizaciÃ³n de VehÃ­culos<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ajuste en la velocidad mÃ¡xima</span><br>
                <span>"Ustedes lo pidieron, nosotros se los concedemosâ€.</span><br>
                <br>
                <span style="color: #666666;">
                  Ajuste en el lÃ­mite de velocidad para los siguientes vehÃ­culos:<br>
                  &nbsp;&nbsp;&nbsp;- Moto: <del>120 km/h</del> -> 130 km/h <br>
                  &nbsp;&nbsp;&nbsp;- Jeep: <del>100 km/h</del> -> 110 km/h <br>
                  &nbsp;&nbsp;&nbsp;- TuTu: <del>90 km/h</del> -> 100 km/h <br>
                  &nbsp;&nbsp;&nbsp;- Camioneta: <del>130 km/h</del> -> 120 km/h <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Mecanismo de Manejo<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">OptimizaciÃ³n para la visualizaciÃ³n de la velocidad y
                  los efectos de velocidad mÃ¡xima</span><br>
                <span>"A medida que aumentamos la velocidad de la mayorÃ­a de los vehÃ­culos, tambiÃ©n aÃ±adimos un nuevo
                  movimiento de cÃ¡mara. DespuÃ©s de la actualizaciÃ³n, la cÃ¡mara se alejarÃ¡ ligeramente cuando los
                  jugadores alcancen el lÃ­mite de velocidad del vehÃ­culo. Esto harÃ¡ que la experiencia de manejo sea mÃ¡s
                  cÃ³moda pues el conductor serÃ¡ capaz de ver mÃ¡s objetos y obstÃ¡culos mientras maneja."</span><br>
                <br>
                <span style="color: #666666;">
                  Se ha aÃ±adido una visualizaciÃ³n mÃ¡s precisa de la velocidad del vehÃ­culo. <br>
                  La cÃ¡mara ahora se alejarÃ¡ ligeramente cuando el vehÃ­culo alcance el lÃ­mite mÃ¡ximo de velocidad. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Planeador<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ajuste en la velocidad al descender </span><br>
                <span>"Hicimos algunos cambios en los planeadores porque los jugadores los estÃ¡n usando como un objeto
                  para llegar a algunos puntos inalcanzables en lugar de usarlos como una herramienta para aterrizar
                  desde grandes alturas de forma segura".</span><br>
                <br>
                <span style="color: #666666;">
                  Ahora los jugadores descenderÃ¡n mÃ¡s rÃ¡pido cuando estÃ©n por encima de los 38m. de altitud. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Puntos de Vida<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Se ha aÃ±adido un lÃ­mite a la cantidad de PV que se
                  pueden restaurar por segundo.</span><br>
                <span>"Con la introducciÃ³n de nuevos mecanismos y habilidades de curaciÃ³n, nos llamÃ³ la atenciÃ³n que
                  algunos jugadores pueden sobrevivir fuera de la zona segura mucho mÃ¡s tiempo de lo previsto mediante
                  el uso de todas las habilidades y objetos de curaciÃ³n a la vez. Vamos a reducir la cantidad de PV por
                  segundo para evitar que los jugadores logren BOOYAHs escondiÃ©ndose fuera de la zona de
                  juego".</span><br>
                <br>
                <span style="color: #666666;">
                  Los jugadores ya no pueden recibir curaciÃ³n de mÃ¡s de 50 PV/s. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Armas y Balance</p>
          <ul>
            <li>
              <span>Nueva arma - AUG<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Disponible en Modo ClÃ¡sico y Duelo de Escuadras
                  (ClÃ¡sico y Clasificatoria)</span><br>
                <span>"Ha pasado un tiempo desde que lanzamos un AR en Free Fire. El AUG es una opciÃ³n Ã¡gil y flexible
                  que los jugadores pueden necesitar dentro el juego. Su mira predeterminada 2x permite participar en
                  combates de medio alcance y su cargador de 35 rondas es extremadamente Ãºtil en situaciones de corto
                  alcance. Prueba el AUG con un arma de largo alcance para maximizar su eficiencia."</span><br>
                <br>
                <span style="color: #666666;">
                  Rango de daÃ±o: 31 <br>
                  Capacidad del cargador: 35 <br>
                  Velocidad de disparo: 147 <br>
                  Mira predeterminada 2x intercambiable. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>AK<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Disponible en todos los modos</span><br>
                <span>"Aunque la AK es una de las armas favoritas de todos los tiempos, sin duda tiene un rendimiento
                  bajo en comparaciÃ³n con los mejores ARs en el juego. Restauramos un poco el poder de la AK, aumentando
                  en menor medida su poder de frenado".</span><br>
                <br>
                <span style="color: #666666;">
                  Rango de daÃ±o: <del>37</del> -> 38 <br>
                  DaÃ±o mÃ­nimo: <del>12</del> ->14 <br>
                  Velocidad de disparo: -3% <br>
                  Tiros precisos: <del>1</del> -> 2 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>FAMAS<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Disponible en todos los modos</span><br>
                <span>"Actualmente, el FAMAS no es lo suficientemente Ã¡gil como para estar entre los mejores ARs. Le
                  dimos una velocidad de movimiento adicional para que los jugadores puedan moverse mÃ¡s fÃ¡cil entre las
                  rÃ¡fagas de 3 rondas".</span><br>
                <br>
                <span style="color: #666666;">
                  Velocidad de movimiento al disparar: +10%<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>M249<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Disponible en todos los modos</span><br>
                <span>"La M249 es sin duda una de las armas air-drop mÃ¡s dÃ©biles actualmente. Hicimos una mejora
                  importante en este parche para que pueda proporcionar disparos de supresiÃ³n con eficacia".</span><br>
                <br>
                <span style="color: #666666;">
                  Tiros precisos: 4 -> 12 <br>
                  DaÃ±o mÃ­nimo: <del>15</del> -> 21 <br>
                  Retroceso mÃ¡ximo: -18% <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>SPAS12<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Disponible en todos los modos</span><br>
                <span>"Aunque la SPAS es una gran contendiente dentro del alcance a quemarropa, la caÃ­da del daÃ±o es la
                  razÃ³n por la cual la SPAS funciona significativamente peor que la M1887 y la M1014. En este parche, le
                  dimos a la SPAS una mejora menor para cerrar su brecha con otros SGs".</span><br>
                <br>
                <span style="color: #666666;">
                  DaÃ±o mÃ­nimo: <del>6</del> -> 7 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>XM8<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Disponible en todos los modos</span><br>
                <span>"El XM8 es uno de los mejores ARs desde hace un tiempo. Una de las razones es porque esta arma es
                  muy flexible y fÃ¡cil de usar. Hicimos algunos ajustes en Ã©l, para que tenga una curva de aprendizaje
                  mÃ¡s profunda".</span><br>
                <br>
                <span style="color: #666666;">
                  Tiros precisos: 4 -> 3<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Modos de Juego</p>
          <ul>
            <li>
              <span>Ajustes Preestablecidos<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Disponible en Combate a Muerte, Asesinato Asegurado y
                  RevoluciÃ³n</span><br>
                <span>"Recibimos comentarios de los jugadores de que los ajustes preestablecidos de las armas eran
                  demasiado restrictivos porque sÃ³lo proporcionaban 4 conjuntos de armas. Introducimos un nuevo menÃº de
                  selecciÃ³n de armas para que todos los jugadores puedan elegir y cambiar el equipo que desean cada vez
                  que revivan".</span><br>
                <br>
                <span style="color: #666666;">
                  Ahora los jugadores pueden comprar armas y equipo con crÃ©ditos proporcionados en cada ronda.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Cabezotas<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ajuste del mecanismo de paracaÃ­das y
                  reactivaciÃ³n.</span><br>
                <span>"Â¡Agregamos nuevos mecanismos al modo Cabezotas para que los jugadores puedan volver a desplegarse
                  y unirse a la batalla mÃ¡s rÃ¡pido!"</span><br>
                <br>
                <span style="color: #666666;">
                  Ahora los jugadores tienen la opciÃ³n de rendirse y volver a desplegarse al ser derribados. <br>
                  Se ha reducido la altitud del paracaÃ­das para que los jugadores puedan volver a entrar en la batalla
                  mÃ¡s rÃ¡pido. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Rey de las Armas (Escuadra)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ajuste del mecanismo de actualizaciÃ³n de armas.
                </span><br>
                <span>"Uno de los mayores problemas que encontramos en el Rey de las Armas original fue que los
                  jugadores querÃ­an jugar con sus amigos, incluso si estaban en el equipo enemigo. Â¡AÃ±adimos un toque
                  4v4 al Rey de las Armas para que los jugadores ahora puedan asociarse con su escuadra!"</span><br>
                <br>
                <span style="color: #666666;">
                  Ahora es compatible con 4v4. <br>
                  Ahora los jugadores pueden elegir "saltar" un arma si pierden 3 batallas consecutivas o si su progreso
                  estÃ¡ significativamente por detrÃ¡s en comparaciÃ³n con otros jugadores. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Personajes y Mascotas</p>
          <ul>
            <li>
              <span>Nuevo personaje - Luqueta<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Disponible en la Tienda Free Fire. </span><br>
                <span> "Â¿EstÃ¡s listo para un truco de sombrerito?"</span><br>
                <br>
                <span style="color: #666666;">
                  Sombrerito: Cada asesinato aumenta PV en 8, 10, 12, 14, 16, 18 o hasta 35.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Nueva mascota - Sr. Wagger<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Â¡PrÃ³ximamente!</span><br>
                <span>"Â¿EstÃ¡s harto de no tener paredes gloo? Â¡El Sr. Wagger se asegurarÃ¡ de que siempre tengas una
                  pared gloo en el bolsillo!</span><br>
                <br>
                <span style="color: #666666;">
                  ProducciÃ³n Helada: Cuando un jugador tiene menos de [1/1/2] granadas de pared gloo, el Sr. Wagger
                  puede producir 1 granada cada [120/100/100] segundos.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Hayato "Rebelde" <br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Â¡PrÃ³ximamente!</span><br>
                <span>"Â¡Nuestro segundo personaje renacido - Hayato "Rebelde" por fin estÃ¡ aquÃ­! Â¡Ãšnete el 22 de agosto
                  a la celebraciÃ³n del 3er. Aniversario para obtenerlo GRATIS!"</span><br><br>
                <span style="color: #666666;">
                  Arte con Espadas: Reduce el daÃ±o frontal en 20, 25, 30, 35 o 40% durante 3s. Enfriamiento: 50s.
                  Disparar interrumpirÃ¡ esta habilidad.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Sistema</p>
          <ul>
            <li>
              <span>LÃ­der Interino del Clan<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Nuevo sistema de gestiÃ³n aÃ±adido</span><br>
                <span>"Desde la Ãºltima actualizaciÃ³n, recibimos muchos comentarios positivos sobre las herramientas de
                  gestiÃ³n que aÃ±adimos para los clanes. Sin embargo, tambiÃ©n recibimos muchos comentarios sobre su mayor
                  preocupaciÃ³n, que es que el lÃ­der del clan deje de estar activo. Por ello, aÃ±adimos un sistema para
                  que los miembros del clan voten por un lÃ­der interino, de esta manera el clan puede permanecer activo
                  incluso sin su lÃ­der original".</span><br>
                <br>
                <span style="color: #666666;">
                  Cuando el lÃ­der del clan estÃ© inactivo durante mÃ¡s de 30 dÃ­as, los miembros del clan recibirÃ¡n una
                  notificaciÃ³n para votar por un lÃ­der interino.<br>
                  Una vez elegido, el lÃ­der interino tendrÃ¡ toda la autoridad del lÃ­der original del clan. <br>
                  Si el lÃ­der interino estÃ¡ inactivo durante mÃ¡s de 7 dÃ­as, su posiciÃ³n serÃ¡ revocada automÃ¡ticamente.
                  <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>CorrecciÃ³n de errores y otras optimizaciones<br></span>
              <span class="m-news-detail-s">
                &nbsp;&nbsp;&nbsp;- Nueva pÃ¡gina de resumen de la partida para Duelo de Escuadras y el Rey de las Armas.
                <br>
                &nbsp;&nbsp;&nbsp;- Ahora los jugadores pueden enviar un enlace generado por el sistema para invitar a
                sus amigos a unirse a su clan. <br>
                &nbsp;&nbsp;&nbsp;- HUD de arma optimizado. <br>
                &nbsp;&nbsp;&nbsp;- La mira tÃ©rmica ahora permite ver a travÃ©s de granadas de humo. <br>
                &nbsp;&nbsp;&nbsp;- OptimizaciÃ³n de visualizaciÃ³n de invitaciones. <br>
                &nbsp;&nbsp;&nbsp;- Se ha actualizado el contenido del Diario Free Fire. <br>
                &nbsp;&nbsp;&nbsp;- OptimizaciÃ³n del video introductorio al modo Combate Cerrado. <br>
                &nbsp;&nbsp;&nbsp;- Se ha optimizado la visualizaciÃ³n de tiempo extra para el modo Combate a Muerte.
                <br>
                &nbsp;&nbsp;&nbsp;- AnimaciÃ³n de paracaÃ­das optimizada. <br>
                &nbsp;&nbsp;&nbsp;- Kalahari se ha aÃ±adido a las Salas Personalizadas. <br>
                &nbsp;&nbsp;&nbsp;- Se ha corregido un error que provocaba que en algunos modos los jugadores salieran
                del Ã¡rea de preparaciÃ³n antes de que el tiempo de enfriamiento se agotara. <br>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
        </div>
      </div>
    `,
    id: `
      <div class="g-detail">
        <h2 class="c-h2">Patch Notes: 3volution</h2>
        <div class="m-detail-time">Jul. 27, 2020</div>
        <div class="m-news-detail">
          <p class="orange">Clash Squad</p>
          <ul>
            <li>
              <span>Rank Season 2<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Season dimulai pada 07/30 16:00 GMT+7</span><br>
                <span>â€œClash Squad Season 2 sudah tiba! Naikkan Rank kamu ke Gold III atau diatasnya untuk menerima
                  Hadiah Spesial dari Clash Squad - The Golden G18!â€</span><br>
                <br>
                <span style="color: #666666;">
                  Penyesuaian Store di Clash Squad. <br>
                  Career stats for Clash Squad can now be viewed under the player's personal profile. <br>
                  Statistik karir untuk Clash Squad sekarang dapat dilihat di bawah profil pemain <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ITEM BARU - Horizaline (Revive Kit)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Tersedia di Classic</span><br>
                <span>â€œPemain biasanya tidak dapat dihidupkan kembali oleh rekan satu tim mereka di Clash Squad. Dengan
                  diperkenalkannya Horizaline, pemain dapat memiliki kesempatan lain untuk bergabung dalam pertempuran
                  begitu mereka telah jatuh. Horizaline bisa sangat mahal tetapi tentu saja bisa menguntungkan
                  kamuâ€</span><br>
                <br>
                <span style="color: #666666;">
                  Horizaline tidak akan menghentikan pendarahan atau damage dari Pemain atau Play Zone. <br>
                  Pemain dapat hidup kembali dengan menggunakan kit saat jatuh. <br>
                  Pemain akan dihidupkan kembali dengan 100 HP setelah menggunakan Horizaline. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Aim Assist<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Penyesuaian Assist Aim di Clash Squad</span><br>
                <span>â€œKami telah menerima keluhan bahwa tujuannya Assist saat ini memprioritaskan target yang jatuh
                  daripada yang masih dalam pertempuran. Masalah ini bisa sangat menjengkelkan di Clash Squad di mana
                  para pemain harus terus menerus bertempur. Kami menyesuaikan mekanisme sehingga pemain dapat
                  menargetkan musuh dengan ancaman terbesar sebelum menghabisi mereka satu per satu.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Assist Aim sekarang akan memprioritaskan pemain yang sedang bertarung (Clash Squad saja)<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Gameplay</p>
          <ul>
            <li>
              <span>Starting Island Baru - â€œThe Runwayâ€<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Starting Island rework</span><br>
                <span>â€œSepertinya sudah sekian lama sejak kami merilis Starting Island baru. Coba dan beri tahu kami
                  pendapat kamu!â€</span><br>
                <br>
                <span style="color: #666666;">
                  Starting Island: â€œThe Runwayâ€ sekarang sudah tersedia.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Mekanisme Jongkok & Berdiri <br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Perlindungan headshot saat berjongkok</span><br>
                <span>â€œSudah masuk kedalam perhatian kami bahwa beberapa pemain membuat skrip untuk auto headshot dengan
                  menekan tombol jongkok dengan sangat cepat setelah melakukan scoope. Karena tindakan ini membuat para
                  pemain di sisi penerima tidak memiliki kesempatan untuk melawan permainan, kami akan menambahkan
                  sebuah minor debuff menuju damage headshot saat tidak berjongkok. Perubahan ini hanya ditujukan untuk
                  pemain yang menyalahgunakan eksploit ini dan hal ini seharusnya tidak mempengaruhi permainan
                  normal.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Damage Headshot akan berkurang segera setelah tidak berjongkok. (0.85s)<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Update Kendaraan<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Penyesuaian Kecepatan Kendaraan</span><br>
                <span>â€œKalian minta, kami berikan.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Penyesuaian kecepatan untuk kendaraan berikut: <br>
                  &nbsp;&nbsp;&nbsp;- Motor : <del>120km/h</del>->130km/h <br>
                  &nbsp;&nbsp;&nbsp;- Jeep : <del>100km/h</del>-> 110km/h <br>
                  &nbsp;&nbsp;&nbsp;- TukTuk : <del>90km/h</del>-> 100km/h <br>
                  &nbsp;&nbsp;&nbsp;- SUV : <del>130km/h</del>->120km/h <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Mekanisme Mengemudi<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Tampilan kecepatan yang dioptimalkan dan efek
                  kecepatan-maksimum</span><br>
                <span>â€œSeiring kami meningkatkan kecepatan sebagian besar kendaraan, kami juga menambahkan gerakan
                  kamera yang akan membuat berkendara lebih nyaman. Setelah Update, Zoom out kamera akan sedikit
                  diperbesar ketika pemain mencapai kecepatan maksimal kendaraan. Ini akan membuat pengalaman berkendara
                  lebih lancar karena pengemudi akan dapat melihat lebih banyak objek dan hambatan saat
                  mengemudiâ€</span><br>
                <br>
                <span style="color: #666666;">
                  Menambahkan tampilan kecepatan kendaraan yang lebih akurat <br>
                  Kamera sekarang akan Zoom Out sedikit ketika kendaraan berada pada kecepatan maksimal <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Glider<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Kecepatan saat turun meningkat ketika di atas
                  ketinggian tertentu</span><br>
                <span>â€œKami membuat beberapa perubahan pada glider karena pemain menggunakannya sebagai item untuk
                  mencapai beberapa tempat yang tidak terjangkau alih-alih menggunakannya sebagai alat untuk mendarat
                  dari ketinggian tinggi dengan aman. "</span><br>
                <br>
                <span style="color: #666666;">
                  Pemain sekarang akan turun lebih cepat saat ketinggiannya di atas 38m. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Health Regeneration<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Menambahkan limit Health yang dapat dipulihkan per
                  detik.</span><br>
                <span>â€œDengan diperkenalkannya mekanisme dan skill Health Regeneration baru, sudah menjadi perhatian
                  kami bahwa beberapa pemain dapat bertahan di luar Zona dengan lebih lama tanpa harus menggunakan semua
                  skill dan item Medkit sekaligus. Kami melakukan limit ini untuk menghindari pemain mendapatkan BOOYAH
                  dengan bersembunyi di luar playzoneâ€</span><br>
                <br>
                <span style="color: #666666;">
                  Pemain tidak bisa lagi menerima penyembuhan lebih dari 50 HP/s. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Penyesuaian Senjata</p>
          <ul>
            <li>
              <span>Senjata Baru - AUG<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Tersedia di Classic dan Clash Squad (Rank &
                  Classic)</span><br>
                <span>â€œSudah lama sejak kami merilis AR ke Free Fire. AUG adalah opsi yang paling banyak pemain inginkan
                  karena senjata sangat lincah dan fleksibel untuk dimainkan dalam Game. Scoope 2x yang terpasang
                  sebelumnya memungkinkan pemain untuk segera terlibat dalam pertarungan jarak menengah dan kapasitas 35
                  Magazine sangat berguna dalam situasi jarak dekat. Cobalah AUG dengan senjata jarak jauh untuk
                  memaksimalkan efisiensinyaâ€</span><br>
                <br>
                <span style="color: #666666;">
                  Damage Ratio: 31 <br>
                  Kapasitas Magazine: 35 <br>
                  Fire Rate: .147 <br>
                  Dilengkapi dengan Scoope 2x dan dapat ditukar dengan Scoope lainnya. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>AK<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Tersedia di semua mode</span><br>
                <span>â€œMeskipun AK adalah salah satu senjata favorit sepanjang masa, namun tentu berkinerja buruk jika
                  dibandingkan dengan AR lainnya dalam permainan. Kami sedikit memulihkan kekuatan AK dengan sedikit
                  meningkatkan daya hentinyaâ€™</span><br>
                <br>
                <span style="color: #666666;">
                  Damage Ratio : <del>37</del>->38 <br>
                  Minimum Damage : <del>12</del>->14 <br>
                  Fire Rate : -3% <br>
                  Precise shots : <del>1</del>->2 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>FAMAS<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Tersedia di semua mode</span><br>
                <span>â€œSaat ini, FAMAS tidak cukup gesit untuk berada di daftar AR teratas. Kami memberikannya beberapa
                  kecepatan gerakan tambahan sehingga pemain dapat memiliki waktu yang lebih mudah untuk bergerak di
                  antara 3-round-burst.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Movement speed saat menembak: +10%<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>M249<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Tersedia di semua mode</span><br>
                <span>â€M249 tidak diragukan lagi salah satu senjata dari Air-drop terlemah saat ini. Kami memberikannya
                  buff pada patch ini sehingga dapat memberikan damage tembakan secara efektif.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Precise shots: <del>4</del>->12 <br>
                  Minimum damage: <del>15</del>->21 <br>
                  Maximum recoil: -18% <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>SPAS12<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Tersedia di semua mode</span><br>
                <span>â€œAlthough the SPAS is a top contender in damage output in point black range, the sharp damage
                  drop-off is the reason why the SPAS performs significantly worse than the M1887 and M1014. Weâ€™re
                  giving the SPAS a minor buff this patch to close its gap with other SGs.â€ Meskipun SPAS adalah pesaing
                  utama dalam output Damage dalam jarak dekat, namun penurunan Damage yang tajam adalah alasan mengapa
                  SPAS berkinerja lebih buruk secara signifikan daripada M1887 dan M1014. Kami memberi SPAS minor buff
                  pada patch ini untuk menutup perbedannya dengan SG lainnya</span><br>
                <br>
                <span style="color: #666666;">
                  Minimum damage: <del>6</del>->7<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>XM8<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Tersedia di semua mode</span><br>
                <span>â€œXM8 telah berada di bagian atas daftar AR untuk sementara waktu sekarang. Salah satu alasannya
                  adalah karena senjata ini sangat fleksibel dan mudah digunakan. Kami membuat beberapa penyesuaian pada
                  XM8 pada update ini sehingga akan memiliki kurva pembelajaran yang lebih dalam.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Precise shots: <del>4</del>->3<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Gamemode</p>
          <ul>
            <li>
              <span>Senjata Default<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Tersedia di TDM, Kill Secured, dan Rampage</span><br>
                <span>â€œKami menerima Feedback dari para pemain bahwa Senjata Default terlalu sedikit karena hanya
                  menyediakan 4 set senjata. Kami memperkenalkan menu pilihan senjata baru sehingga semua pemain dapat
                  memilih dan mengubah peralatan yang mereka inginkan setiap kali mereka hidup kembali.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Sekarang Pemain dapat membeli senjata dan equipment dengan kredit yang diberikan setiap putaran. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Mode Big Head<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Penyesuaian Mekanisme Parasut dan Revive
                  kembali.</span><br>
                <span>â€œKami menambahkan mekanisme baru ke Mode Big Head sehingga pemain dapat memindahkan kembali dan
                  bergabung kembali dengan pertempuran lebih cepat!â€ </span><br>
                <br>
                <span style="color: #666666;">
                  Pemain sekarang memiliki opsi untuk menyerah dan deploy kembali ketika sedang jatuh. <br>
                  Turunkan ketinggian terjun payung sehingga pemain dapat memasuki kembali pertempuran lebih cepat. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Gun King (Squad)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Penyesuaian Mekanisme peningkatan senjata dan sekarang
                  mendukung 4v4</span><br>
                <span>â€œSalah satu masalah terbesar yang kami temukan dengan Gun King adalah bahwa para pemain ingin
                  bermain dengan teman-teman mereka, bahkan jika mereka berada di tim musuh. Kami menambahkan 4v4 ke Gun
                  King sehingga pemain sekarang dapat bersama dengan pasukan mereka untuk showdown 4v4.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Sekarang didukung 4v4 <br>
                  Pemain sekarang dapat memilih untuk "skip" senjata jika mereka kalah dalam 3 pertempuran
                  berturut-turut atau jika progress mereka jauh di belakang dibandingkan dengan pemain lain. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Karakter dan Pet</p>
          <ul>
            <li>
              <span>Karakter Baru - Luqueta<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Tersedia di Store Free Fire. </span><br>
                <span>â€œSiap mencetak hat trick?â€</span><br>
                <br>
                <span style="color: #666666;">
                  Hat Trick: Setiap kill meningkatkan max HP sebanyak {8/10/12/14/16/18}, hingga maksimal 35. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Pet Baru - Mr. Waggor<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Segera Tiba!</span><br>
                <span>â€œApa kamu kesal tidak bisa menemukan Gloo Wall? Mr. Waggor memastikan kamu selalu punya gloo wall
                  di sakumu!â€</span><br>
                <br>
                <span style="color: #666666;">
                  Smooth Gloo: Saat player punya kurang dari [1/1/2] Gloo Wall grenades, Mr. Waggor akan membuat 1 Gloo
                  Wall grenade setiap [120/100/100] detik. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Hayato â€œFirebrandâ€ - Segera!<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Segera Tiba!</span><br>
                <span>â€œKarakter awaken kedua kami - Hayato â€œFirebrandâ€ akhirnya tiba! Ikuti 3rd Anniversary event pada
                  22 Agustus untuk mendapatkannya secara GRATIS!â€</span><br>
                <br>
                <span style="color: #666666;">
                  Art of Blades: Mengurangi damage yang diterima dari depan sebanyak {20/25/30/35/40}% selama 3s. CD:
                  50s. Menembak akan menghentikan jurus ini.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">System</p>
          <ul>
            <li>
              <span>Ketua Guild Sementara<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Sistem manajemen baru ditambahkan</span><br>
                <span>â€œDari pembaruan terakhir, kami menerima banyak Feedback positif pada sistem manajemen tambahan
                  yang kami tambahkan ke Guild. Namun, kami mendapat Feedback bahwa titik permasalahan terbesar dari
                  beberapa guild adalah ketika pemimpin guild tidak lagi aktif. Kami akan menambahkan sistem bagi
                  anggota guild untuk memilih pemimpin guild sementara sehingga guild dapat tetap aktif bahkan tanpa
                  pemimpin aslinya.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ketika pemimpin Guild tidak aktif selama lebih dari 30 hari, anggota guild akan menerima pemberitahuan
                  untuk memilih pemimpin Guild Baru sementara. <br>
                  Setelah memilih, pemimpin guild bertindak akan memiliki semua wewenang pemimpin guild sampai pemimpin
                  asli kembali atau jika pemimpin guild bertindak tidak aktif selama lebih dari 7 hari. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Penyesuaian & Bug Fix<br></span>
              <span class="m-news-detail-s">
                &nbsp;&nbsp;&nbsp;- Match summary page baru untuk mode Clash Squad dan Gun King. <br>
                &nbsp;&nbsp;&nbsp;- Players dapat mengirim link untuk mengundang teman bergabung ke party. <br>
                &nbsp;&nbsp;&nbsp;- Optimalisasi HUD senjata di in-game. <br>
                &nbsp;&nbsp;&nbsp;- Thermal Scope bisa menembus granat asap. <br>
                &nbsp;&nbsp;&nbsp;- Optimalisasi display undangan bergabung ke party. <br>
                &nbsp;&nbsp;&nbsp;- Konten update terbaru di FF Journal. <br>
                &nbsp;&nbsp;&nbsp;- Optimalisasi tampilan video pengenalan mode close combat. <br>
                &nbsp;&nbsp;&nbsp;- Optimalisasi tampilan overtime mode TDM. <br>
                &nbsp;&nbsp;&nbsp;- Optimalisasi animasi parasut. <br>
                &nbsp;&nbsp;&nbsp;- Kalahari ditambahkan ke custom room. <br>
                &nbsp;&nbsp;&nbsp;- Memperbaiki bug player bisa meninggalkan preparation area di beberapa mode sebelum
                hitungan mundur selesai. <br>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
        </div>
      </div>
    `,
    ru: `
      <div class="g-detail">
        <h2 class="c-h2">Ð”Ð½ÐµÐ²Ð½Ð¸Ðº ÐžÐ±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ñ - 3-Ð²Ð¾Ð»ÑŽÑ†Ð¸Ñ</h2>
        <div class="m-detail-time">Jul. 27, 2020</div>
        <div class="m-news-detail">
          <p class="orange">Ð‘Ð¸Ñ‚Ð²Ð° ÐžÑ‚Ñ€ÑÐ´Ð¾Ð²</p>
          <ul>
            <li>
              <span>Ð ÐµÐ¹Ñ‚Ð¸Ð½Ð³. Ð¡ÐµÐ·Ð¾Ð½ 2<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð¡ÐµÐ·Ð¾Ð½ Ð½Ð°Ñ‡Ð½Ñ‘Ñ‚ÑÑ 30.07 Ð² 12:00 GMT+3</span><br>
                <span>â€œÐ’Ñ‚Ð¾Ñ€Ð¾Ð¹ Ð¡ÐµÐ·Ð¾Ð½ Ð‘Ð¸Ñ‚Ð²Ñ‹ ÐžÑ‚Ñ€ÑÐ´Ð¾Ð² Ð¿Ñ€Ð¸Ð±Ð»Ð¸Ð¶Ð°ÐµÑ‚ÑÑ! ÐŸÐ¾Ð´Ð½Ð¸Ð¼Ð¸ÑÑŒ Ð´Ð¾ Ñ€Ð°Ð½Ð³Ð° Ð—Ð¾Ð»Ð¾Ñ‚Ð¾ III Ð¸ Ð²Ñ‹ÑˆÐµ Ð¸ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸ ÑÐºÑÐºÐ»ÑŽÐ·Ð¸Ð²Ð½ÑƒÑŽ Ð½Ð°Ð³Ñ€Ð°Ð´Ñƒ Ð‘Ð¸Ñ‚Ð²Ñ‹ ÐžÑ‚Ñ€ÑÐ´Ð¾Ð² - Ð—Ð¾Ð»Ð¾Ñ‚Ð¾Ð¹ G18!â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ð˜ÑÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ñ Ð² Ð¼Ð°Ð³Ð°Ð·Ð¸Ð½Ðµ Ð‘Ð¸Ñ‚Ð²Ñ‹ ÐžÑ‚Ñ€ÑÐ´Ð¾Ð² <br>
                  Ð¡Ñ‚Ð°Ñ‚Ð¸ÑÑ‚Ð¸ÐºÐ° Ð‘Ð¸Ñ‚Ð²Ñ‹ ÐžÑ‚Ñ€ÑÐ´Ð¾Ð² Ñ‚ÐµÐ¿ÐµÑ€ÑŒ Ð¾Ñ‚Ð¾Ð±Ñ€Ð°Ð¶Ð°ÐµÑ‚ÑÑ Ð¿Ð¾Ð´ Ð»Ð¸Ñ‡Ð½Ñ‹Ð¼ Ð¿Ñ€Ð¾Ñ„Ð¸Ð»ÐµÐ¼ Ð¸Ð³Ñ€Ð¾ÐºÐ°. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ÐÐ¾Ð²Ñ‹Ð¹ Ð¿Ñ€ÐµÐ´Ð¼ÐµÑ‚: Ð“Ð¾Ñ€Ð¸Ð·Ð°Ð»Ð¸Ð½ (ÐžÐ¶Ð¸Ð²Ð»ÑÑŽÑ‰Ð¸Ð¹ Ð½Ð°Ð±Ð¾Ñ€)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð”Ð¾ÑÑ‚ÑƒÐ¿Ð½Ð¾ Ð² ÐšÐ»Ð°ÑÑÐ¸ÐºÐµ</span><br>
                <span>â€œÐ˜Ð³Ñ€Ð¾ÐºÐ¸ Ð¾Ð±Ñ‹Ñ‡Ð½Ð¾ Ð½Ðµ Ð¿Ð¾Ð´Ð½Ð¸Ð¼Ð°ÑŽÑ‚ ÑÐ¾ÐºÐ¾Ð¼Ð°Ð½Ð´Ð½Ð¸ÐºÐ¾Ð² Ð¸Ð· Ð½Ð¾ÐºÐ´Ð°ÑƒÐ½Ð° Ð² Ð‘Ð¸Ñ‚Ð²Ðµ ÐžÑ‚Ñ€ÑÐ´Ð¾Ð², Ð¿Ð¾Ñ‚Ð¾Ð¼Ñƒ Ñ‡Ñ‚Ð¾ Ð½Ð° ÐºÐ°Ñ€Ñ‚Ðµ Ð¿Ð¾ÑÑ‚Ð¾ÑÐ½Ð½Ð¾ Ð¿Ñ€Ð¾Ð¸ÑÑ…Ð¾Ð´Ð¸Ñ‚ Ð±Ð¸Ñ‚Ð²Ð° Ð¸ Ð·Ð°Ð¼ÐµÑ. Ð“Ð¾Ñ€Ð¸Ð·Ð°Ð»Ð¸Ð½ Ð´Ð°Ñ‘Ñ‚ Ð¸Ð³Ñ€Ð¾ÐºÐ°Ð¼ ÐµÑ‰Ñ‘ Ð¾Ð´Ð¸Ð½ ÑˆÐ°Ð½Ñ Ð²ÐµÑ€Ð½ÑƒÑ‚ÑŒÑÑ Ð² ÑÑ‚Ñ€Ð¾Ð¹ Ð¿Ð¾ÑÐ»Ðµ Ð½Ð¾ÐºÐ´Ð°ÑƒÐ½Ð°. ÐžÐ½ ÑÑ‚Ð¾Ð¸Ñ‚ Ð½ÐµÐ¼Ð°Ð»Ð¾, Ð½Ð¾ Ð¾Ð´Ð½Ð¾Ð·Ð½Ð°Ñ‡Ð½Ð¾ Ð¼Ð¾Ð¶ÐµÑ‚ Ð¿ÐµÑ€ÐµÐ²ÐµÑ€Ð½ÑƒÑ‚ÑŒ Ñ€Ð°ÑƒÐ½Ð´ Ð² Ñ‚Ð²Ð¾ÑŽ Ð¿Ð¾Ð»ÑŒÐ·Ñƒ.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ð“Ð¾Ñ€Ð¸Ð·Ð°Ð»Ð¸Ð½ Ð½Ðµ Ð¾ÑÑ‚Ð°Ð½Ð°Ð²Ð»Ð¸Ð²Ð°ÐµÑ‚ ÐºÑ€Ð¾Ð²Ð¾Ñ‚ÐµÑ‡ÐµÐ½Ð¸Ðµ Ð¸Ð»Ð¸ ÑƒÑ€Ð¾Ð½ Ð¾Ñ‚ Ð¸Ð³Ñ€Ð¾ÐºÐ¾Ð² Ð¸Ð»Ð¸ Ð·Ð¾Ð½Ñ‹. <br>
                  Ð˜Ð³Ñ€Ð¾Ðº Ð¼Ð¾Ð¶ÐµÑ‚ Ð²ÐµÑ€Ð½ÑƒÑ‚ÑŒÑÑ Ð² ÑÑ‚Ñ€Ð¾Ð¹, Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð² ÐžÐ¶Ð¸Ð²Ð»ÑÑŽÑ‰Ð¸Ð¹ Ð½Ð°Ð±Ð¾Ñ€ Ð² Ð½Ð¾ÐºÐ´Ð°ÑƒÐ½Ðµ. <br>
                  ÐŸÐ¾ÑÐ»Ðµ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ñ Ð“Ð¾Ñ€Ð¸Ð·Ð°Ð»Ð¸Ð½Ð° Ð¸Ð³Ñ€Ð¾Ðº Ð²ÑÑ‚Ð°Ñ‘Ñ‚ Ð¸Ð· Ð½Ð¾ÐºÐ´Ð°ÑƒÐ½Ð° Ñ 100 ÐµÐ´Ð¸Ð½Ð¸Ñ† Ð·Ð´Ð¾Ñ€Ð¾Ð²ÑŒÑ. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ÐŸÐ¾Ð¼Ð¾Ñ‰ÑŒ Ð² Ð¿Ñ€Ð¸Ñ†ÐµÐ»Ð¸Ð²Ð°Ð½Ð¸Ð¸<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð˜ÑÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ Ð°Ð²Ñ‚Ð¾Ð¿Ñ€Ð¸Ñ†ÐµÐ»Ð°</span><br>
                <span>â€œÐœÑ‹ Ð¿Ð¾Ð»ÑƒÑ‡Ð°Ð»Ð¸ Ð¼Ð½Ð¾Ð¶ÐµÑÑ‚Ð²Ð¾ Ð¶Ð°Ð»Ð¾Ð± Ð½Ð° Ñ‚Ð¾, Ñ‡Ñ‚Ð¾ Ð¿Ñ€Ð¸Ñ†ÐµÐ» Ð² Ð¿ÐµÑ€Ð²ÑƒÑŽ Ð¾Ñ‡ÐµÑ€ÐµÐ´ÑŒ Ð½Ð°Ð²Ð¾Ð´Ð¸Ñ‚ÑÑ Ð½Ð° Ñ†ÐµÐ»Ð¸ Ð² Ð½Ð¾ÐºÐ´Ð°ÑƒÐ½Ðµ, Ð° Ð½Ðµ Ð½Ð° Ñ‚ÐµÑ…, ÐºÑ‚Ð¾ ÐµÑ‰Ñ‘ ÑÑ€Ð°Ð¶Ð°ÐµÑ‚ÑÑ. Ð’ Ð‘Ð¸Ñ‚Ð²Ðµ ÐžÑ‚Ñ€ÑÐ´Ð¾Ð² ÑÑ‚Ð¾ Ð¼Ð¾Ð¶ÐµÑ‚ ÑƒÐ¶Ð°ÑÐ½Ð¾ Ñ€Ð°Ð·Ð´Ñ€Ð°Ð¶Ð°Ñ‚ÑŒ, Ð¿Ð¾Ñ‚Ð¾Ð¼Ñƒ Ñ‡Ñ‚Ð¾ Ð¸Ð³Ñ€Ð¾ÐºÐ¸ Ð¿Ð¾ÑÑ‚Ð¾ÑÐ½Ð½Ð¾ Ð² Ð±Ð¾ÑŽ. ÐœÑ‹ Ð¿Ð¾Ð¿Ñ€Ð°Ð²Ð¸Ð»Ð¸ ÑÑ‚Ð¾Ñ‚ Ð¼ÐµÑ…Ð°Ð½Ð¸Ð·Ð¼, Ð¸ Ñ‚ÐµÐ¿ÐµÑ€ÑŒ Ð¸Ð³Ñ€Ð¾ÐºÐ¸ Ð¼Ð¾Ð³ÑƒÑ‚ Ñ†ÐµÐ»Ð¸Ñ‚ÑŒÑÑ Ð² Ñ‚ÐµÑ…, ÐºÑ‚Ð¾ Ð²ÑÑ‘ ÐµÑ‰Ñ‘ Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²Ð»ÑÐµÑ‚ ÑƒÐ³Ñ€Ð¾Ð·Ñƒ, Ð¸ Ð²Ñ‹Ð½Ð¾ÑÐ¸Ñ‚ÑŒ Ð¸Ñ… Ð¾Ð´Ð½Ð¾Ð³Ð¾ Ð·Ð° Ð´Ñ€ÑƒÐ³Ð¸Ð¼.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ð¢ÐµÐ¿ÐµÑ€ÑŒ Ð¿Ñ€Ð¸Ð¾Ñ€Ð¸Ñ‚ÐµÑ‚ Ð¿Ñ€Ð¸Ñ†ÐµÐ»Ð° - Ð±Ð¾ÐµÑÐ¿Ð¾ÑÐ¾Ð±Ð½Ñ‹Ðµ Ð¸Ð³Ñ€Ð¾ÐºÐ¸ (Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð² Ð‘Ð¸Ñ‚Ð²Ðµ ÐžÑ‚Ñ€ÑÐ´Ð¾Ð²). <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Ð˜Ð³Ñ€Ð¾Ð²Ð¾Ð¹ Ð¿Ñ€Ð¾Ñ†ÐµÑÑ</p>
          <ul>
            <li>
              <span>ÐÐ¾Ð²Ñ‹Ð¹ Ð¡Ñ‚Ð°Ñ€Ñ‚Ð¾Ð²Ñ‹Ð¹ ÐžÑÑ‚Ñ€Ð¾Ð² - â€œÐ’Ð·Ð»Ñ‘Ñ‚ÐºÐ°â€.<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ÐŸÐµÑ€ÐµÑ€Ð°Ð±Ð¾Ñ‚Ð°Ð½Ð½Ñ‹Ð¹ ÑÑ‚Ð°Ñ€Ñ‚Ð¾Ð²Ñ‹Ð¹ Ð¾ÑÑ‚Ñ€Ð¾Ð²</span><br>
                <span>â€œÐ”Ð°Ð²Ð½ÐµÐ½ÑŒÐºÐ¾ Ð¼Ñ‹ Ð½Ðµ Ð´ÐµÐ»Ð°Ð»Ð¸ Ð½Ð¾Ð²Ñ‹Ñ… ÑÑ‚Ð°Ñ€Ñ‚Ð¾Ð²Ñ‹Ñ… Ð¾ÑÑ‚Ñ€Ð¾Ð²Ð¾Ð². Ð—Ð°Ð³Ð»ÑÐ½Ð¸Ñ‚Ðµ Ð¸ Ñ€Ð°ÑÑÐºÐ°Ð¶Ð¸Ñ‚Ðµ, ÐºÐ°Ðº Ð²Ð°Ð¼!â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ð”Ð¾ÑÑ‚ÑƒÐ¿ÐµÐ½ Ð½Ð¾Ð²Ñ‹Ð¹ Ð¡Ñ‚Ð°Ñ€Ñ‚Ð¾Ð²Ñ‹Ð¹ ÐžÑÑ‚Ñ€Ð¾Ð²: Ð’Ð·Ð»Ñ‘Ñ‚ÐºÐ°.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ÐœÐµÑ…Ð°Ð½Ð¸Ð·Ð¼ â€œÐ¿Ñ€Ð¸ÑÐµÑÑ‚ÑŒ-Ð²ÑÑ‚Ð°Ñ‚ÑŒâ€<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð—Ð°Ñ‰Ð¸Ñ‚Ð° Ð¾Ñ‚ Ð²Ñ‹ÑÑ‚Ñ€ÐµÐ»Ð° Ð² Ð³Ð¾Ð»Ð¾Ð²Ñƒ Ð¿Ñ€Ð¸ Ð¿Ñ€Ð¸ÑÐµÐ´Ð°Ð½Ð¸Ð¸</span><br>
                <span>â€œÐœÑ‹ Ð¾Ð±Ñ€Ð°Ñ‚Ð¸Ð»Ð¸ Ð²Ð½Ð¸Ð¼Ð°Ð½Ð¸Ðµ, Ñ‡Ñ‚Ð¾ Ð½ÐµÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð¸Ð³Ñ€Ð¾ÐºÐ¸ Ð·Ð°Ð²ÐµÐ»Ð¸ Ð¿Ñ€Ð¸Ð²Ñ‹Ñ‡ÐºÑƒ Ñ€ÐµÐ·ÐºÐ¾ ÑÑ‚Ñ€ÐµÐ»ÑÑ‚ÑŒ Ð² Ð³Ð¾Ð»Ð¾Ð²Ñƒ, Ð²Ñ‹Ð¿Ñ€ÑÐ¼Ð»ÑÑÑÑŒ ÑÑ€Ð°Ð·Ñƒ Ð¿Ð¾ÑÐ»Ðµ Ð¿Ñ€Ð¸Ñ†ÐµÐ»Ð¸Ð²Ð°Ð½Ð¸Ñ. Ð­Ñ‚Ð¾ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ Ð½Ðµ Ð¾ÑÑ‚Ð°Ð²Ð»ÑÐµÑ‚ Ñ‚ÐµÐ¼, ÐºÑ‚Ð¾ Ñ Ñ‚Ð¾Ð¹ ÑÑ‚Ð¾Ñ€Ð¾Ð½Ñ‹ Ð¿Ñ€Ð¸Ñ†ÐµÐ»Ð°, Ð½Ð¸ ÐµÐ´Ð¸Ð½Ð¾Ð³Ð¾ ÑˆÐ°Ð½ÑÐ° Ð½Ð° Ð¾Ñ‚Ð²ÐµÑ‚, Ð¸ Ð¼Ñ‹ Ñ€ÐµÑˆÐ¸Ð»Ð¸ ÑÐ»ÐµÐ³ÐºÐ° Ð¾ÑÐ»Ð°Ð±Ð¸Ñ‚ÑŒ ÑƒÑ€Ð¾Ð½ Ð¾Ñ‚ Ñ…ÑÐ´ÑˆÐ¾Ñ‚Ð° Ð¿Ñ€Ð¸ Ð²ÑÑ‚Ð°Ð²Ð°Ð½Ð¸Ð¸. Ð­Ñ‚Ð¾ Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ðµ Ð½Ð°Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¾ Ð² Ð¾ÑÐ½Ð¾Ð²Ð½Ð¾Ð¼ Ð½Ð° Ð¸Ð³Ñ€Ð¾ÐºÐ¾Ð², ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð·Ð»Ð¾ÑƒÐ¿Ð¾Ñ‚Ñ€ÐµÐ±Ð»ÑÑŽÑ‚ Ñ‚Ð°ÐºÐ¾Ð¹ ÑƒÑÐ·Ð²Ð¸Ð¼Ð¾ÑÑ‚ÑŒÑŽ, Ð¸ Ð½Ð° Ð¾Ð±Ñ‹Ñ‡Ð½ÑƒÑŽ Ð¸Ð³Ñ€Ð¾Ð¼ÐµÑ…Ð°Ð½Ð¸ÐºÑƒ Ð¿Ð¾Ð²Ð»Ð¸ÑÑ‚ÑŒ Ð½Ðµ Ð´Ð¾Ð»Ð¶Ð½Ð¾.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ð’Ñ‹ÑÑ‚Ñ€ÐµÐ» Ð² Ð³Ð¾Ð»Ð¾Ð²Ñƒ Ð½Ð°Ð½Ð¾ÑÐ¸Ñ‚ ÑƒÐ¼ÐµÐ½ÑŒÑˆÐµÐ½Ð½Ñ‹Ð¹ ÑƒÑ€Ð¾Ð½ ÐºÐ¾Ñ€Ð¾Ñ‚ÐºÐ¾Ðµ Ð²Ñ€ÐµÐ¼Ñ Ð¿Ð¾ÑÐ»Ðµ Ñ‚Ð¾Ð³Ð¾, ÐºÐ°Ðº Ð¸Ð³Ñ€Ð¾Ðº Ð²ÑÑ‚Ð°Ð». (0.85Ñ)<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ÐžÐ±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ðµ Ð¢Ñ€Ð°Ð½ÑÐ¿Ð¾Ñ€Ñ‚Ð°<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð˜ÑÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ ÑÐºÐ¾Ñ€Ð¾ÑÑ‚Ð¸ Ñ‚Ñ€Ð°Ð½ÑÐ¿Ð¾Ñ€Ñ‚Ð°</span><br>
                <span>â€œÐ’Ñ‹ Ð¿Ñ€Ð¾ÑÐ¸Ð»Ð¸ Ð¸ Ð¼Ñ‹ ÑÐ´ÐµÐ»Ð°Ð»Ð¸.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ð˜ÑÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð° Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÑŒÐ½Ð°Ñ ÑÐºÐ¾Ñ€Ð¾ÑÑ‚ÑŒ Ñ‚Ñ€Ð°Ð½ÑÐ¿Ð¾Ñ€Ñ‚Ð°: <br>
                  &nbsp;&nbsp;&nbsp;- ÐœÐ¾Ñ‚Ð¾Ñ†Ð¸ÐºÐ»: <del>120 ÐºÐ¼/Ñ‡</del>->130 ÐºÐ¼/Ñ‡ <br>
                  &nbsp;&nbsp;&nbsp;- Ð”Ð¶Ð¸Ð¿: <del>100 ÐºÐ¼/Ñ‡</del>-> 110 ÐºÐ¼/Ñ‡ <br>
                  &nbsp;&nbsp;&nbsp;- Ð¢ÑƒÐº Ð¢ÑƒÐº: <del>90 ÐºÐ¼/Ñ‡</del>-> 100 ÐºÐ¼/Ñ‡ <br>
                  &nbsp;&nbsp;&nbsp;- ÐŸÐ¸ÐºÐ°Ð¿: <del>130 ÐºÐ¼/Ñ‡</del>->120 ÐºÐ¼/Ñ‡ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ÐœÐµÑ…Ð°Ð½Ð¸Ð·Ð¼ Ð²Ð¾Ð¶Ð´ÐµÐ½Ð¸Ñ<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ÐžÐ¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð°Ñ†Ð¸Ñ Ð¾Ñ‚Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ñ ÑÐºÐ¾Ñ€Ð¾ÑÑ‚Ð¸ Ð¸ ÑÑ„Ñ„ÐµÐºÑ‚Ð¾Ð² Ð½Ð° Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÑŒÐ½Ð¾Ð¹ ÑÐºÐ¾Ñ€Ð¾ÑÑ‚Ð¸</span><br>
                <span>â€œÐ£Ð²ÐµÐ»Ð¸Ñ‡Ð¸Ð² ÑÐºÐ¾Ñ€Ð¾ÑÑ‚ÑŒ Ð¼Ð½Ð¾Ð³Ð¸Ñ… Ñ‚Ñ€Ð°Ð½ÑÐ¿Ð¾Ñ€Ñ‚Ð½Ñ‹Ñ… ÑÑ€ÐµÐ´ÑÑ‚Ð², Ð¼Ñ‹ Ð´Ð¾Ð±Ð°Ð²Ð¸Ð»Ð¸ Ð´Ð²Ð¸Ð¶ÐµÐ½Ð¸Ðµ ÐºÐ°Ð¼ÐµÑ€Ñ‹, Ñ‡Ñ‚Ð¾Ð±Ñ‹ ÑÐ´ÐµÐ»Ð°Ñ‚ÑŒ Ð²Ð¾Ð¶Ð´ÐµÐ½Ð¸Ðµ Ð±Ð¾Ð»ÐµÐµ ÐºÐ¾Ð¼Ñ„Ð¾Ñ€Ñ‚Ð½Ñ‹Ð¼. ÐŸÐ¾ÑÐ»Ðµ Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ñ ÐºÐ°Ð¼ÐµÑ€Ð° Ð±ÑƒÐ´ÐµÑ‚ ÑÐ»ÐµÐ³ÐºÐ° Ð¾Ñ‚ÑŠÐµÐ·Ð¶Ð°Ñ‚ÑŒ, ÐºÐ¾Ð³Ð´Ð° Ð¸Ð³Ñ€Ð¾Ðº Ð½Ð°Ð±ÐµÑ€Ñ‘Ñ‚ Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÑŒÐ½ÑƒÑŽ ÑÐºÐ¾Ñ€Ð¾ÑÑ‚ÑŒ Ñ‚Ñ€Ð°Ð½ÑÐ¿Ð¾Ñ€Ñ‚Ð°. Ð­Ñ‚Ð¾ ÑÐ´ÐµÐ»Ð°ÐµÑ‚ Ð²Ð¾Ð¶Ð´ÐµÐ½Ð¸Ðµ Ð±Ð¾Ð»ÐµÐµ ÐºÐ¾Ð¼Ñ„Ð¾Ñ€Ñ‚Ð½Ñ‹Ð¼, Ð¿Ð¾Ñ‚Ð¾Ð¼Ñƒ Ñ‡Ñ‚Ð¾ Ð²Ð¾Ð´Ð¸Ñ‚ÐµÐ»ÑŒ ÑÐ¼Ð¾Ð¶ÐµÑ‚ Ð²Ð¸Ð´ÐµÑ‚ÑŒ Ð±Ð¾Ð»ÑŒÑˆÐµ Ð¾Ð±ÑŠÐµÐºÑ‚Ð¾Ð² Ð¸ Ð¿Ñ€ÐµÐ¿ÑÑ‚ÑÑ‚Ð²Ð¸Ð¹ Ð²Ð¿ÐµÑ€ÐµÐ´Ð¸, Ð¿Ð¾ÐºÐ° ÐµÐ´ÐµÑ‚.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ð”Ð¾Ð±Ð°Ð²Ð»ÐµÐ½Ð¾ Ð±Ð¾Ð»ÐµÐµ Ñ‚Ð¾Ñ‡Ð½Ð¾Ðµ Ð¾Ñ‚Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ðµ ÑÐºÐ¾Ñ€Ð¾ÑÑ‚Ð¸ Ñ‚Ñ€Ð°Ð½ÑÐ¿Ð¾Ñ€Ñ‚Ð°. <br>
                  ÐšÐ°Ð¼ÐµÑ€Ð° Ð±ÑƒÐ´ÐµÑ‚ Ð½ÐµÐ¼Ð½Ð¾Ð³Ð¾ Ð¾Ñ‚ÑŠÐµÐ·Ð¶Ð°Ñ‚ÑŒ, ÐºÐ¾Ð³Ð´Ð° Ñ‚Ñ€Ð°Ð½ÑÐ¿Ð¾Ñ€Ñ‚ ÐµÐ´ÐµÑ‚ Ð½Ð° Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÑŒÐ½Ð¾Ð¹ ÑÐºÐ¾Ñ€Ð¾ÑÑ‚Ð¸. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ÐŸÐ»Ð°Ð½ÐµÑ€<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð¡ÐºÐ¾Ñ€Ð¾ÑÑ‚ÑŒ ÑÐ½Ð¸Ð¶ÐµÐ½Ð¸Ñ ÑƒÐ²ÐµÐ»Ð¸Ñ‡Ð¸Ð²Ð°ÐµÑ‚ÑÑ Ð¿Ð¾ÑÐ»Ðµ Ð´Ð¾ÑÑ‚Ð¸Ð¶ÐµÐ½Ð¸Ñ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»Ñ‘Ð½Ð½Ð¾Ð¹ Ð²Ñ‹ÑÐ¾Ñ‚Ñ‹</span><br>
                <span>â€œÐœÑ‹ Ð²Ð½Ð¾ÑÐ¸Ð¼ Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ Ð² Ð¿Ð»Ð°Ð½ÐµÑ€, Ð¿Ð¾Ñ‚Ð¾Ð¼Ñƒ Ñ‡Ñ‚Ð¾ Ð½ÐµÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð¸Ð³Ñ€Ð¾ÐºÐ¸ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÑŽÑ‚ ÐµÐ³Ð¾ ÐºÐ°Ðº ÑÐ¿Ð¾ÑÐ¾Ð± Ð´Ð¾Ð±Ñ€Ð°Ñ‚ÑŒÑÑ Ð´Ð¾ Ð½ÐµÐ´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ñ‹Ñ… Ñ‚Ð¾Ñ‡ÐµÐº Ð²Ð¼ÐµÑÑ‚Ð¾ Ñ‚Ð¾Ð³Ð¾, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ Ð¿Ñ€Ð¸Ð·ÐµÐ¼Ð»ÑÑ‚ÑŒÑÑ Ñ Ð±Ð¾Ð»ÑŒÑˆÐ¾Ð¹ Ð²Ñ‹ÑÐ¾Ñ‚Ñ‹.â€</span><br>
                <br>
                <span style="color: #666666;">
                  ÐŸÑ€Ð¸ Ð´Ð¾ÑÑ‚Ð¸Ð¶ÐµÐ½Ð¸Ð¸ Ð²Ñ‹ÑÐ¾Ñ‚Ñ‹ 38 Ð¼ Ð¸Ð³Ñ€Ð¾Ðº Ð±ÑƒÐ´ÐµÑ‚ ÑÐ½Ð¸Ð¶Ð°Ñ‚ÑŒÑÑ Ð±Ñ‹ÑÑ‚Ñ€ÐµÐµ.  <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Ð’Ð¾ÑÑÑ‚Ð°Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ðµ Ð—Ð´Ð¾Ñ€Ð¾Ð²ÑŒÑ <br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð”Ð¾Ð±Ð°Ð²Ð»ÐµÐ½ Ð»Ð¸Ð¼Ð¸Ñ‚ Ð—Ð´Ð¾Ñ€Ð¾Ð²ÑŒÑ, ÐºÐ¾Ñ‚Ð¾Ñ€Ð¾Ðµ Ð¼Ð¾Ð¶Ð½Ð¾ Ð²Ð¾ÑÑÑ‚Ð°Ð½Ð°Ð²Ð»Ð¸Ð²Ð°Ñ‚ÑŒ Ð·Ð° ÑÐµÐºÑƒÐ½Ð´Ñƒ.</span><br>
                <span>â€œÐŸÐ¾ÑÐ»Ðµ Ð²Ð²ÐµÐ´ÐµÐ½Ð¸Ñ Ð² Ð¸Ð³Ñ€Ñƒ Ð½Ð¾Ð²Ñ‹Ñ… Ð¼ÐµÑ…Ð°Ð½Ð¸Ð·Ð¼Ð¾Ð² Ð¸ Ð½Ð°Ð²Ñ‹ÐºÐ¾Ð² Ñ€ÐµÐ³ÐµÐ½ÐµÑ€Ð°Ñ†Ð¸Ð¸ Ð¼Ñ‹ Ð¾Ð±Ñ€Ð°Ñ‚Ð¸Ð»Ð¸ Ð²Ð½Ð¸Ð¼Ð°Ð½Ð¸Ðµ, Ñ‡Ñ‚Ð¾ Ð½ÐµÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð¸Ð³Ñ€Ð¾ÐºÐ¸ Ð²Ñ‹Ð¶Ð¸Ð²Ð°ÑŽÑ‚ Ð·Ð° Ð¿Ñ€ÐµÐ´ÐµÐ»Ð°Ð¼Ð¸ Ð‘ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾Ð¹ Ð—Ð¾Ð½Ñ‹ Ð½Ð°Ð¼Ð½Ð¾Ð³Ð¾ Ð´Ð¾Ð»ÑŒÑˆÐµ, Ñ‡ÐµÐ¼ ÑÑ‚Ð¾ Ð·Ð°Ð´ÑƒÐ¼Ð°Ð½Ð¾, Ð¿Ð¾Ñ‚Ð¾Ð¼Ñƒ Ñ‡Ñ‚Ð¾ Ð¿Ð¾Ð»ÑŒÐ·ÑƒÑŽÑ‚ÑÑ ÑÑ€Ð°Ð·Ñƒ Ð²ÑÐµÐ¼Ð¸ Ð»ÐµÑ‡Ð°Ñ‰Ð¸Ð¼Ð¸ ÑÐ¿Ð¾ÑÐ¾Ð±Ð½Ð¾ÑÑ‚ÑÐ¼Ð¸ Ð¸ Ð¿Ñ€ÐµÐ´Ð¼ÐµÑ‚Ð°Ð¼Ð¸. ÐœÑ‹ Ð·Ð°Ð±ÐµÑ€Ñ‘Ð¼ Ð½ÐµÐ¼Ð½Ð¾Ð³Ð¾ ÑÑ‚Ð¾Ð¹ Ð¼Ð¾Ñ‰Ð¸, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð½ÐµÐ»ÑŒÐ·Ñ Ð±Ñ‹Ð»Ð¾ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ñ‚ÑŒ Ð·Ð°Ð²ÐµÑ‚Ð½Ð¾Ðµ BOOYAH!, Ð¿Ñ€Ð¾ÑÑ‚Ð¾ ÑÐ¿Ñ€ÑÑ‚Ð°Ð²ÑˆÐ¸ÑÑŒ Ð·Ð° Ð¿Ñ€ÐµÐ´ÐµÐ»Ð°Ð¼Ð¸ Ð‘ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾Ð¹ Ð—Ð¾Ð½Ñ‹.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ð˜Ð³Ñ€Ð¾Ðº Ñ‚ÐµÐ¿ÐµÑ€ÑŒ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÑ‚ Ð²Ð¾ÑÑÑ‚Ð°Ð½Ð°Ð²Ð»Ð¸Ð²Ð°Ñ‚ÑŒ Ð±Ð¾Ð»ÐµÐµ 50 Ð¥ÐŸ Ð² ÑÐµÐºÑƒÐ½Ð´Ñƒ.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">ÐžÑ€ÑƒÐ¶Ð¸Ðµ Ð¸ Ð‘Ð°Ð»Ð°Ð½Ñ</p>
          <ul>
            <li>
              <span>ÐÐ¾Ð²Ð¾Ðµ ÐžÑ€ÑƒÐ¶Ð¸Ðµ - AUG<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð”Ð¾ÑÑ‚ÑƒÐ¿ÐµÐ½ Ð² ÐšÐ»Ð°ÑÑÐ¸ÐºÐµ Ð¸ Ð‘Ð¸Ñ‚Ð²Ðµ ÐžÑ‚Ñ€ÑÐ´Ð¾Ð² (ÐšÐ»Ð°ÑÑÐ¸ÐºÐ° Ð¸ Ð Ð°Ð½Ð³)</span><br>
                <span>â€œÐ”Ð°Ð²Ð½ÐµÐ½ÑŒÐºÐ¾ Ð¼Ñ‹ Ð½Ðµ Ð´Ð¾Ð±Ð°Ð²Ð»ÑÐ»Ð¸ Ð² Free Fire Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¾Ð². AUG - ÑÑ‚Ð¾ Ð½ÐµÐ²ÐµÑ€Ð¾ÑÑ‚Ð½Ð¾ Ð¿Ð¾Ð´Ð²Ð¸Ð¶Ð½Ñ‹Ð¹ Ð¸ Ð³Ð¸Ð±ÐºÐ¸Ð¹ Ð²Ñ‹Ð±Ð¾Ñ€ ÑÑ€ÐµÐ´Ð¸ Ð´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ñ‹Ñ… Ð² Ð¸Ð³Ñ€Ðµ. ÐŸÑ€ÐµÐ´ÑƒÑÑ‚Ð°Ð½Ð¾Ð²Ð»ÐµÐ½Ð½Ñ‹Ð¹ Ð´Ð²Ð¾Ð¹Ð½Ð¾Ð¹ Ð¿Ñ€Ð¸Ñ†ÐµÐ» Ð¿Ð¾Ð·Ð²Ð¾Ð»ÑÐµÑ‚ Ð¸Ð³Ñ€Ð¾ÐºÐ°Ð¼ Ð±Ñ‹ÑÑ‚Ñ€Ð¾ Ð²ÑÑ‚ÑƒÐ¿Ð°Ñ‚ÑŒ Ð² Ð±Ð¾Ð¹ Ð½Ð° ÑÑ€ÐµÐ´Ð½ÐµÐ¹ Ð´Ð¸ÑÑ‚Ð°Ð½Ñ†Ð¸Ð¸, Ð° Ð¼Ð°Ð³Ð°Ð·Ð¸Ð½ Ð½Ð° 35 Ð¿Ð°Ñ‚Ñ€Ð¾Ð½Ð¾Ð² Ð½ÐµÑ€ÐµÐ°Ð»ÑŒÐ½Ð¾ Ð¿Ð¾Ð»ÐµÐ·ÐµÐ½ Ð² Ð±Ð»Ð¸Ð¶Ð½Ð¸Ñ… ÑÐ¸Ñ‚ÑƒÐ°Ñ†Ð¸ÑÑ…. Ð”Ð»Ñ Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÑŒÐ½Ð¾Ð³Ð¾ ÑÑ„Ñ„ÐµÐºÑ‚Ð° Ð¿Ð¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹ ÑÐ¾Ñ‡ÐµÑ‚Ð°Ñ‚ÑŒ AUG Ñ Ð´Ð°Ð»ÑŒÐ½Ð¾Ð±Ð¾Ð¹Ð½Ñ‹Ð¼ Ð¾Ñ€ÑƒÐ¶Ð¸ÐµÐ¼!â€</span><br>
                <br>
                <span style="color: #666666;">
                  ÐšÐ¾ÑÑ„Ñ„Ð¸Ñ†Ð¸ÐµÐ½Ñ‚ Ð£Ñ€Ð¾Ð½Ð°: 31 <br>
                  ÐÐ¼ÐºÐ¾ÑÑ‚ÑŒ Ð¼Ð°Ð³Ð°Ð·Ð¸Ð½Ð°: 35 <br>
                  Ð¡ÐºÐ¾Ñ€Ð¾ÑÑ‚Ñ€ÐµÐ»ÑŒÐ½Ð¾ÑÑ‚ÑŒ: .147 <br>
                  ÐŸÐ¾ÑÑ‚Ð°Ð²Ð»ÑÐµÑ‚ÑÑ ÑÑ€Ð°Ð·Ñƒ Ñ 2x Ð¿Ñ€Ð¸Ñ†ÐµÐ»Ð¾Ð¼, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¹ Ð¼Ð¾Ð¶Ð½Ð¾ Ð·Ð°Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ð½Ð° Ð´Ñ€ÑƒÐ³Ð¾Ð¹ Ð¿Ñ€Ð¸Ñ†ÐµÐ». <br>           
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>AK<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð”Ð¾ÑÑ‚ÑƒÐ¿ÐµÐ½ Ð²Ð¾ Ð²ÑÐµÑ… Ñ€ÐµÐ¶Ð¸Ð¼Ð°Ñ…</span><br>
                <span>â€œÐÐµÑÐ¼Ð¾Ñ‚Ñ€Ñ Ð½Ð° Ñ‚Ð¾, Ñ‡Ñ‚Ð¾ ÐÐš - ÑÑ‚Ð¾ Ð¾Ð´Ð½Ð¾ Ð¸Ð· â€œÐ¾Ñ€ÑƒÐ¶Ð¸Ð¹ Ð½Ð° Ð²ÑÐµ Ð²Ñ€ÐµÐ¼ÐµÐ½Ð°â€, Ð¾Ð½ Ð¾Ð´Ð½Ð¾Ð·Ð½Ð°Ñ‡Ð½Ð¾ ÑƒÑÑ‚ÑƒÐ¿Ð°ÐµÑ‚ Ð´Ñ€ÑƒÐ³Ð¸Ð¼ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð°Ð¼ Ð² Ð¸Ð³Ñ€Ðµ. ÐœÑ‹ Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÐ¼ ÐÐš Ð±Ñ‹Ð»ÑƒÑŽ Ð¼Ð¾Ñ‰ÑŒ, ÑÐ»ÐµÐ³ÐºÐ° ÑƒÐ²ÐµÐ»Ð¸Ñ‡Ð¸Ð² ÐµÐ³Ð¾ ÑƒÐ±Ð¾Ð¹Ð½ÑƒÑŽ ÑÐ¸Ð»Ñƒ.â€</span><br>
                <br>
                <span style="color: #666666;">
                  ÐšÐ¾ÑÑ„Ñ„Ð¸Ñ†Ð¸ÐµÐ½Ñ‚ Ð£Ñ€Ð¾Ð½Ð°: <del>37</del>->38 <br>
                  ÐœÐ¸Ð½Ð¸Ð¼Ð°Ð»ÑŒÐ½Ñ‹Ð¹ Ð£Ñ€Ð¾Ð½: <del>12</del>->14 <br>
                  Ð¡ÐºÐ¾Ñ€Ð¾ÑÑ‚Ñ€ÐµÐ»ÑŒÐ½Ð¾ÑÑ‚ÑŒ: -3% <br>
                  Ð¢Ð¾Ñ‡Ð½Ñ‹Ðµ Ð²Ñ‹ÑÑ‚Ñ€ÐµÐ»Ñ‹: <del>1</del>->2 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>FAMAS<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð”Ð¾ÑÑ‚ÑƒÐ¿ÐµÐ½ Ð²Ð¾ Ð²ÑÐµÑ… Ñ€ÐµÐ¶Ð¸Ð¼Ð°Ñ…</span><br>
                <span>â€œÐ¡ÐµÐ¹Ñ‡Ð°Ñ FAMAS Ð½Ðµ Ð½Ð°ÑÑ‚Ð¾Ð»ÑŒÐºÐ¾ Ð±Ñ‹ÑÑ‚Ñ€, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¾ÐºÐ°Ð·Ð°Ñ‚ÑŒÑÑ Ñ‚Ð¾Ð¿Ð¾Ð²Ñ‹Ð¼ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¾Ð¼ Ð² Ñ€ÐµÐ¹Ñ‚Ð¸Ð½Ð³Ðµ. ÐœÑ‹ Ð½ÐµÐ¼Ð½Ð¾Ð³Ð¾ ÑƒÐ²ÐµÐ»Ð¸Ñ‡Ð¸Ð»Ð¸ ÑÐºÐ¾Ñ€Ð¾ÑÑ‚ÑŒ Ð¿ÐµÑ€ÐµÐ´Ð²Ð¸Ð¶ÐµÐ½Ð¸Ñ, Ñ‚Ð°Ðº Ñ‡Ñ‚Ð¾ Ð¸Ð³Ñ€Ð¾ÐºÐ¸ Ð¼Ð¾Ð³ÑƒÑ‚ Ð±Ñ‹ÑÑ‚Ñ€ÐµÐµ Ð¿ÐµÑ€ÐµÐ¼ÐµÑ‰Ð°Ñ‚ÑŒÑÑ Ð¼ÐµÐ¶Ð´Ñƒ ÐºÐ¾Ñ€Ð¾Ñ‚ÐºÐ¸Ð¼Ð¸ Ð¾Ñ‡ÐµÑ€ÐµÐ´ÑÐ¼Ð¸.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ð¡ÐºÐ¾Ñ€Ð¾ÑÑ‚ÑŒ Ð¿ÐµÑ€ÐµÐ´Ð²Ð¸Ð¶ÐµÐ½Ð¸Ñ Ð¿Ñ€Ð¸ ÑÑ‚Ñ€ÐµÐ»ÑŒÐ±Ðµ: +10%<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>M249<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð”Ð¾ÑÑ‚ÑƒÐ¿ÐµÐ½ Ð²Ð¾ Ð²ÑÐµÑ… Ñ€ÐµÐ¶Ð¸Ð¼Ð°Ñ…</span><br>
                <span>â€œÐ¡ÐµÐ¹Ñ‡Ð°Ñ M249, Ð±ÐµÐ· ÑÐ¾Ð¼Ð½ÐµÐ½Ð¸Ñ, Ð¾Ð´Ð¸Ð½ Ð¸Ð· ÑÐ°Ð¼Ñ‹Ñ… ÑÐ»Ð°Ð±Ñ‹Ñ… Ð´ÐµÐ²Ð°Ð¹ÑÐ¾Ð² Ð² Ð°Ð²Ð¸Ð°Ð¿Ð¾ÑÑ‹Ð»ÐºÐµ. Ð’ ÑÑ‚Ð¾Ð¼ Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ð¸ Ð¼Ñ‹ ÐºÐ°Ðº ÑÐ»ÐµÐ´ÑƒÐµÑ‚ ÐµÐ³Ð¾ ÑƒÑÐ¸Ð»Ð¸Ð»Ð¸, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¼Ð¾Ð¶Ð½Ð¾ Ð±Ñ‹Ð»Ð¾ ÑÑ„Ñ„ÐµÐºÑ‚Ð¸Ð²Ð½ÐµÐµ Ð²ÐµÑÑ‚Ð¸ Ð¿Ð¾Ð´Ð°Ð²Ð»ÑÑŽÑ‰Ð¸Ð¹ Ð¾Ð³Ð¾Ð½ÑŒ.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ð¢Ð¾Ñ‡Ð½Ñ‹Ðµ Ð²Ñ‹ÑÑ‚Ñ€ÐµÐ»Ñ‹: <del>4</del>->12 <br>
                  ÐœÐ¸Ð½Ð¸Ð¼Ð°Ð»ÑŒÐ½Ñ‹Ð¹ ÑƒÑ€Ð¾Ð½: <del>15</del>->21 <br>
                  ÐœÐ°ÐºÑÐ¸Ð¼Ð°Ð»ÑŒÐ½Ð°Ñ Ð¾Ñ‚Ð´Ð°Ñ‡Ð°: -18% <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>SPAS12<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð”Ð¾ÑÑ‚ÑƒÐ¿ÐµÐ½ Ð²Ð¾ Ð²ÑÐµÑ… Ñ€ÐµÐ¶Ð¸Ð¼Ð°Ñ…</span><br>
                <span>â€œÐ¥Ð¾Ñ‚ÑŒ SPAS Ð¸ ÑÐ°Ð¼Ñ‹Ð¹ ÐºÑ€ÑƒÑ‚Ð¾Ð¹ Ñ€Ð°Ð·Ð´Ð°Ñ‚Ñ‡Ð¸Ðº ÑƒÑ€Ð¾Ð½Ð° Ð½Ð° Ð´Ð¸ÑÑ‚Ð°Ð½Ñ†Ð¸Ð¸ â€œÐ² ÑƒÐ¿Ð¾Ñ€â€, ÐµÐ³Ð¾ Ñ€Ð°Ð·Ð»Ñ‘Ñ‚ Ð¿Ð¾ Ñ‚Ð¾Ñ‡Ð½Ð¾ÑÑ‚Ð¸ Ð´ÐµÐ»Ð°ÐµÑ‚ ÐµÐ³Ð¾ Ð·Ð½Ð°Ñ‡Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ Ñ…ÑƒÐ¶Ðµ M1887 Ð¸ M1014. Ð’ ÑÑ‚Ð¾Ð¼ Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ð¸ Ð¼Ñ‹ Ð½ÐµÐ¼Ð½Ð¾Ð³Ð¾ Ð¿Ð¾Ð´Ð½ÑÐ»Ð¸ Ð¢Ð¢Ð¥ SPAS, Ñ‡Ñ‚Ð¾Ð±Ñ‹ ÑƒÐ¼ÐµÐ½ÑŒÑˆÐ¸Ñ‚ÑŒ ÐµÐ³Ð¾ Ñ€Ð°Ð·Ñ€Ñ‹Ð² Ñ Ð´Ñ€ÑƒÐ³Ð¸Ð¼Ð¸ Ð´Ñ€Ð¾Ð±Ð¾Ð²Ð¸ÐºÐ°Ð¼Ð¸.â€</span><br>
                <br>
                <span style="color: #666666;">
                  ÐœÐ¸Ð½Ð¸Ð¼Ð°Ð»ÑŒÐ½Ñ‹Ð¹ Ð£Ñ€Ð¾Ð½: <del>6</del>->7 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>XM8<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð”Ð¾ÑÑ‚ÑƒÐ¿ÐµÐ½ Ð²Ð¾ Ð²ÑÐµÑ… Ñ€ÐµÐ¶Ð¸Ð¼Ð°Ñ…</span><br>
                <span>â€œXM8 ÑƒÐ¶Ðµ Ð½ÐµÐºÐ¾Ñ‚Ð¾Ñ€Ð¾Ðµ Ð²Ñ€ÐµÐ¼Ñ ÐºÑ€Ð°ÑÑƒÐµÑ‚ÑÑ Ð² Ñ‚Ð¾Ð¿Ðµ ÑÑ€ÐµÐ´Ð¸ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¾Ð². ÐžÐ´Ð½Ð° Ð¸Ð· Ð¿Ñ€Ð¸Ñ‡Ð¸Ð½ ÑÑ‚Ð¾Ð³Ð¾ - ÑÑ‚Ð¾ Ð¾Ñ€ÑƒÐ¶Ð¸Ðµ Ð´Ð¾ÑÑ‚Ð°Ñ‚Ð¾Ñ‡Ð½Ð¾ Ð¿Ð¾Ð´Ð°Ñ‚Ð»Ð¸Ð²Ð¾Ðµ Ð¸ ÐµÐ³Ð¾ Ð»ÐµÐ³ÐºÐ¾ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ. ÐœÑ‹ Ð²Ð½ÐµÑÐ»Ð¸ Ð½ÐµÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð¸ÑÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ñ, Ñ‚Ð°Ðº Ñ‡Ñ‚Ð¾ Ñ‚ÐµÐ¿ÐµÑ€ÑŒ Ð¿Ð¾Ñ€Ð¾Ð³ Ð²Ñ…Ð¾Ð¶Ð´ÐµÐ½Ð¸Ñ Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ Ð¸Ð·Ð¼ÐµÐ½Ð¸Ñ‚ÑÑ.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ð¢Ð¾Ñ‡Ð½Ñ‹Ðµ Ð²Ñ‹ÑÑ‚Ñ€ÐµÐ»Ñ‹: <del>4</del>->3 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Ð˜Ð³Ñ€Ð¾Ð²Ñ‹Ðµ Ñ€ÐµÐ¶Ð¸Ð¼Ñ‹</p>
          <ul>
            <li>
              <span>ÐÐ°Ð±Ð¾Ñ€Ñ‹ ÐžÑ€ÑƒÐ¶Ð¸Ñ<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð”Ð¾ÑÑ‚ÑƒÐ¿Ð½Ð¾ Ð² ÐšÐ¾Ð¼Ð°Ð½Ð´Ð½Ð¾Ð¹ Ð‘Ð¸Ñ‚Ð²Ðµ ÐÐ°ÑÐ¼ÐµÑ€Ñ‚ÑŒ, ÐšÐ¸Ð»Ð»ÑÑ‚Ñ€Ð¸Ðº Ð¸ Ð‘ÐµÐ·ÑƒÐ¼Ð¸Ð¸</span><br>
                <span>â€œÐœÑ‹ Ð¿Ð¾Ð»ÑƒÑ‡Ð°Ð»Ð¸ Ð¼Ð½Ð¾Ð³Ð¾ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ð¹ Ð¾Ñ‚ Ð¸Ð³Ñ€Ð¾ÐºÐ¾Ð², Ñ‡Ñ‚Ð¾ Ð½Ð°Ð±Ð¾Ñ€Ñ‹ Ð¾Ñ€ÑƒÐ¶Ð¸Ñ Ð¸Ñ… ÑÐ»Ð¸ÑˆÐºÐ¾Ð¼ Ð¾Ð³Ñ€Ð°Ð½Ð¸Ñ‡Ð¸Ð²Ð°ÑŽÑ‚, Ð¿Ð¾ÑÐºÐ¾Ð»ÑŒÐºÑƒ Ð¸Ñ… Ð²ÑÐµÐ³Ð¾ 4. ÐœÑ‹ Ð²Ð²Ð¾Ð´Ð¸Ð¼ Ð½Ð¾Ð²Ð¾Ðµ Ð¼ÐµÐ½ÑŽ Ð²Ñ‹Ð±Ð¾Ñ€Ð° Ð¾Ñ€ÑƒÐ¶Ð¸Ñ, Ð¸ Ñ‚ÐµÐ¿ÐµÑ€ÑŒ Ð²ÑÐµ Ð¸Ð³Ñ€Ð¾ÐºÐ¸ Ð¼Ð¾Ð³ÑƒÑ‚ Ð²Ñ‹Ð±Ð¸Ñ€Ð°Ñ‚ÑŒ Ð¸ Ð¼ÐµÐ½ÑÑ‚ÑŒ ÑÐ²Ð¾ÑŽ ÑÐºÐ¸Ð¿Ð¸Ñ€Ð¾Ð²ÐºÑƒ ÐºÐ°Ð¶Ð´Ñ‹Ð¹ Ñ€Ð°Ð· Ð¿Ð¾ÑÐ»Ðµ Ð¾Ð¶Ð¸Ð²Ð»ÐµÐ½Ð¸Ñ.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ð¢ÐµÐ¿ÐµÑ€ÑŒ Ð¸Ð³Ñ€Ð¾Ðº Ð¼Ð¾Ð¶ÐµÑ‚ Ð¿Ð¾ÐºÑƒÐ¿Ð°Ñ‚ÑŒ Ð¾Ñ€ÑƒÐ¶Ð¸Ðµ Ð¸ ÑÐºÐ¸Ð¿Ð¸Ñ€Ð¾Ð²ÐºÑƒ Ð·Ð° ÐºÑ€ÐµÐ´Ð¸Ñ‚Ñ‹ ÐºÐ°Ð¶Ð´Ñ‹Ð¹ Ñ€Ð°ÑƒÐ½Ð´. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Ð ÐµÐ¶Ð¸Ð¼ Ð‘Ð¾Ð»ÑŒÑˆÐ°Ñ Ð“Ð¾Ð»Ð¾Ð²Ð°<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð˜ÑÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ñ Ð² Ð¼ÐµÑ…Ð°Ð½Ð¸ÐºÐ°Ñ… Ð¿Ð°Ñ€Ð°ÑˆÑŽÑ‚Ð° Ð¸ Ð¾Ð¶Ð¸Ð²Ð»ÐµÐ½Ð¸Ñ. </span><br>
                <span>â€œÐœÑ‹ Ð´Ð¾Ð±Ð°Ð²Ð¸Ð»Ð¸ Ð½Ð¾Ð²Ñ‹Ðµ Ð¼ÐµÑ…Ð°Ð½Ð¸ÐºÐ¸ Ð² Ñ€ÐµÐ¶Ð¸Ð¼ Ð‘Ð¾Ð»ÑŒÑˆÐ°Ñ Ð“Ð¾Ð»Ð¾Ð²Ð°, Ð¸ Ñ‚ÐµÐ¿ÐµÑ€ÑŒ Ð¸Ð³Ñ€Ð¾ÐºÐ¸ Ð¼Ð¾Ð³ÑƒÑ‚ Ð±Ñ‹ÑÑ‚Ñ€ÐµÐµ Ð¾Ð¶Ð¸Ð²Ð°Ñ‚ÑŒ Ð¸ Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°Ñ‚ÑŒÑÑ Ð² Ð±Ð¾Ð¹!â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ð¢ÐµÐ¿ÐµÑ€ÑŒ Ð¸Ð³Ñ€Ð¾Ðº Ð¼Ð¾Ð¶ÐµÑ‚ Ð²Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Ð¾Ð¿Ñ†Ð¸ÑŽ â€œÑÐ´Ð°Ñ‚ÑŒÑÑâ€ Ð¸ ÑÐ½Ð¾Ð²Ð° Ð²Ð¾Ð¹Ñ‚Ð¸ Ð² Ð±Ð¾Ð¹ Ð¿Ð¾ÑÐ»Ðµ Ð½Ð¾ÐºÐ´Ð°ÑƒÐ½Ð°. <br>
                  Ð’Ñ‹ÑÐ¾Ñ‚Ð° ÑÐ±Ñ€Ð¾ÑÐ° Ñ Ð¿Ð°Ñ€Ð°ÑˆÑŽÑ‚Ð¾Ð¼ ÑƒÐ¼ÐµÐ½ÑŒÑˆÐµÐ½Ð°, Ð¿Ð¾ÑÑ‚Ð¾Ð¼Ñƒ Ð¸Ð³Ñ€Ð¾Ðº Ð¼Ð¾Ð¶ÐµÑ‚ Ð²ÐµÑ€Ð½ÑƒÑ‚ÑŒÑÑ Ð² Ð±Ð¾Ð¹ Ð±Ñ‹ÑÑ‚Ñ€ÐµÐµ.  <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ÐžÑ€ÑƒÐ¶ÐµÐ¹Ð½Ñ‹Ð¹ Ð‘Ð°Ñ€Ð¾Ð½ (ÐžÑ‚Ñ€ÑÐ´)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð˜ÑÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½ Ð¼ÐµÑ…Ð°Ð½Ð¸Ð·Ð¼ ÑƒÐ»ÑƒÑ‡ÑˆÐµÐ½Ð¸Ñ Ð¾Ñ€ÑƒÐ¶Ð¸Ñ, Ð¸ Ð²Ð²ÐµÐ´ÐµÐ½Ð° Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ° 4v4.  </span><br>
                <span>â€œÐžÐ´Ð½Ð¾Ð¹ Ð¸Ð· ÑÐ°Ð¼Ñ‹Ñ… Ð±Ð¾Ð»ÑŒÑˆÐ¸Ñ… ÑÐ»Ð¾Ð¶Ð½Ð¾ÑÑ‚ÐµÐ¹ Ñ€ÐµÐ¶Ð¸Ð¼Ð° ÐžÑ€ÑƒÐ¶ÐµÐ¹Ð½Ñ‹Ð¹ Ð‘Ð°Ñ€Ð¾Ð½ Ð±Ñ‹Ð»Ð¾ Ñ‚Ð¾, Ñ‡Ñ‚Ð¾ Ð¸Ð³Ñ€Ð¾ÐºÐ¸ Ñ…Ð¾Ñ‚ÐµÐ»Ð¸ Ð¸Ð³Ñ€Ð°Ñ‚ÑŒ ÑÐ¾ ÑÐ²Ð¾Ð¸Ð¼Ð¸ Ð´Ñ€ÑƒÐ·ÑŒÑÐ¼Ð¸, Ð´Ð°Ð¶Ðµ ÐµÑÐ»Ð¸ Ñ‚Ðµ Ð±Ñ‹Ð»Ð¸ Ð²Ð¾ Ð²Ñ€Ð°Ð¶ÐµÑÐºÐ¾Ð¹ ÐºÐ¾Ð¼Ð°Ð½Ð´Ðµ. ÐœÑ‹ Ð´Ð¾Ð±Ð°Ð²Ð»ÑÐµÐ¼ Ð² ÐžÑ€ÑƒÐ¶ÐµÐ¹Ð½Ð¾Ð³Ð¾ Ð‘Ð°Ñ€Ð¾Ð½Ð° Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ÑÑ‚ÑŒ ÑÐ¾Ð±Ñ€Ð°Ñ‚ÑŒÑÑ 4v4, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¸Ð³Ñ€Ð¾ÐºÐ¸ ÑÐ¼Ð¾Ð³Ð»Ð¸ ÑÐ¾Ð±Ñ€Ð°Ñ‚ÑŒ ÐºÐ¾Ð¼Ð°Ð½Ð´Ñƒ Ð¼ÐµÑ‡Ñ‚Ñ‹ Ð¸ Ð·Ð°Ð¶ÐµÑ‡ÑŒ!â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ð”Ð¾ÑÑ‚ÑƒÐ¿Ð½Ð° Ð¸Ð³Ñ€Ð° 4v4 <br>
                  Ð˜Ð³Ñ€Ð¾Ðº Ð¼Ð¾Ð¶ÐµÑ‚ Ð²Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ÑÑ‚ÑŒ â€œÐ¿Ñ€Ð¾Ð¿ÑƒÑÑ‚Ð¸Ñ‚ÑŒâ€ Ð¾Ñ€ÑƒÐ¶Ð¸Ðµ, ÐµÑÐ»Ð¸ Ð¿Ñ€Ð¾Ð¸Ð³Ñ€Ð°ÐµÑ‚ 3 Ð±Ð¸Ñ‚Ð²Ñ‹ Ð¿Ð¾Ð´Ñ€ÑÐ´, Ð¸Ð»Ð¸ ÐµÑÐ»Ð¸ ÑÐ¸Ð»ÑŒÐ½Ð¾ Ð¾Ñ‚ÑÑ‚Ð°Ñ‘Ñ‚ Ð¾Ñ‚ Ð´Ñ€ÑƒÐ³Ð¸Ñ… Ð¸Ð³Ñ€Ð¾ÐºÐ¾Ð². <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">ÐŸÐµÑ€ÑÐ¾Ð½Ð°Ð¶Ð¸ Ð¸ ÐŸÐ¸Ñ‚Ð¾Ð¼Ñ†Ñ‹</p>
          <ul>
            <li>
              <span>ÐÐ¾Ð²Ñ‹Ð¹ ÐŸÐµÑ€ÑÐ¾Ð½Ð°Ð¶ - Ð›ÑƒÑÐ¸Ð¾<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð”Ð¾ÑÑ‚ÑƒÐ¿ÐµÐ½ Ð² ÐœÐ°Ð³Ð°Ð·Ð¸Ð½Ðµ Free Fire. </span><br>
                <span>â€œÐ’Ñ‹ ÑƒÐ¶Ðµ Ð³Ð¾Ñ‚Ð¾Ð²Ñ‹ Ðº Ñ…ÐµÑ‚-Ñ‚Ñ€Ð¸ÐºÑƒ?â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ð¥ÐµÑ‚-Ñ‚Ñ€Ð¸Ðº: ÐšÐ°Ð¶Ð´Ð¾Ðµ ÑƒÐ±Ð¸Ð¹ÑÑ‚Ð²Ð¾ ÑƒÐ²ÐµÐ»Ð¸Ñ‡Ð¸Ð²Ð°ÐµÑ‚ Ð¼Ð°ÐºÑÐ¸Ð¼ÑƒÐ¼ Ð¥ÐŸ Ð½Ð° {8/10/12/14/16/18}, Ð´Ð¾ 35<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ÐÐ¾Ð²Ñ‹Ð¹ ÐŸÐ¸Ñ‚Ð¾Ð¼ÐµÑ† - ÐœÐ¸ÑÑ‚ÐµÑ€ ÐŸÐ¸Ð½Ð³-Ð’Ð¸Ð½<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð£Ð¶Ðµ ÑÐºÐ¾Ñ€Ð¾!</span><br>
                <span>â€œÐ¢ÐµÐ±Ðµ Ð½Ð°Ð´Ð¾ÐµÐ»Ð¾, Ñ‡Ñ‚Ð¾ Ð¡Ñ‚ÐµÐ½Ñ‹ Ð²ÑÑ‘ Ð²Ñ€ÐµÐ¼Ñ Ð·Ð°ÐºÐ°Ð½Ñ‡Ð¸Ð²Ð°ÑŽÑ‚ÑÑ? ÐœÐ¸ÑÑ‚ÐµÑ€ ÐŸÐ¸Ð½Ð³-Ð’Ð¸Ð½ Ð¿Ð¾Ð·Ð°Ð±Ð¾Ñ‚Ð¸Ñ‚ÑÑ Ð¾ Ñ‚Ð¾Ð¼, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ñƒ Ñ‚ÐµÐ±Ñ Ð² ÐºÐ°Ñ€Ð¼Ð°ÑˆÐºÐµ Ð²ÑÐµÐ³Ð´Ð° Ð±Ñ‹Ð»Ð° Ð¡Ñ‚ÐµÐ½Ð°!â€</span><br>
                <br>
                <span style="color: #666666;">
                  ÐœÐ¾Ñ€Ð¾Ð·Ð¸Ð»ÐºÐ°: Ð•ÑÐ»Ð¸ Ñƒ Ð¸Ð³Ñ€Ð¾ÐºÐ° Ñ ÑÐ¾Ð±Ð¾Ð¹ Ð¼ÐµÐ½ÑŒÑˆÐµ [1/1/2] Ð¡Ñ‚ÐµÐ½, ÐœÐ¸ÑÑ‚ÐµÑ€ ÐŸÐ¸Ð½Ð³-Ð’Ð¸Ð½ Ð´ÐµÐ»Ð°ÐµÑ‚ 1 Ð¡Ñ‚ÐµÐ½Ñƒ ÐºÐ°Ð¶Ð´Ñ‹Ðµ [120/100/100] ÑÐµÐºÑƒÐ½Ð´<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Ð¥Ð°ÑÑ‚Ð¾ â€œÐ’ÑÐ¿Ð¾Ð»Ð¾Ñ…â€ - ÑƒÐ¶Ðµ ÑÐºÐ¾Ñ€Ð¾!<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð£Ð¶Ðµ ÑÐºÐ¾Ñ€Ð¾!</span><br>
                <span>â€œÐÐ°ÐºÐ¾Ð½ÐµÑ†-Ñ‚Ð¾ Ð¿Ñ€Ð¾Ð±ÑƒÐ¶Ð´Ð°ÐµÑ‚ÑÑ Ð²Ñ‚Ð¾Ñ€Ð¾Ð¹ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð¶ - Ð¥Ð°ÑÑ‚Ð¾ â€œÐ’ÑÐ¿Ð¾Ð»Ð¾Ñ…â€! Ð£Ñ‡Ð°ÑÑ‚Ð²ÑƒÐ¹ Ð² ÑÐ¾Ð±Ñ‹Ñ‚Ð¸ÑÑ… 3-Ð³Ð¾ Ð”Ð½Ñ Ð Ð¾Ð¶Ð´ÐµÐ½Ð¸Ñ Ð¸Ð³Ñ€Ñ‹ 22.08 Ð¸ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸ ÐµÐ³Ð¾ Ð’ ÐŸÐžÐ”ÐÐ ÐžÐš!â€</span><br><br>
                <span style="color: #666666;">
                  ÐœÐ°ÑÑ‚ÐµÑ€ ÐšÐ»Ð¸Ð½ÐºÐ°: ÐŸÐ¾Ð²Ñ€ÐµÐ¶Ð´ÐµÐ½Ð¸Ñ, Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ð½Ñ‹Ðµ ÑÐ¿ÐµÑ€ÐµÐ´Ð¸, ÑƒÐ¼ÐµÐ½ÑŒÑˆÐ°ÑŽÑ‚ÑÑ Ð½Ð° {20/25/30/35/40}% Ð½Ð° 3Ñ. Ð’Ð¾ÑÑÑ‚Ð°Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ðµ: 50Ñ. Ð¡Ñ‚Ñ€ÐµÐ»ÑŒÐ±Ð° Ð¿Ñ€ÐµÑ€Ñ‹Ð²Ð°ÐµÑ‚ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ Ð½Ð°Ð²Ñ‹ÐºÐ°.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Ð¡Ð¸ÑÑ‚ÐµÐ¼Ð°</p>
          <ul>
            <li>
              <span>Ð’Ñ€ÐµÐ¼ÐµÐ½Ð½Ñ‹Ð¹ Ð›Ð¸Ð´ÐµÑ€ Ð“Ð¸Ð»ÑŒÐ´Ð¸Ð¸<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ð”Ð¾Ð±Ð°Ð²Ð»ÐµÐ½Ð° Ð½Ð¾Ð²Ð°Ñ ÑÐ¸ÑÑ‚ÐµÐ¼Ð° ÑƒÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ñ</span><br>
                <span>â€œÐœÑ‹ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ð»Ð¸ Ð¾Ñ‡ÐµÐ½ÑŒ Ð¼Ð½Ð¾Ð³Ð¾ Ð¿Ð¾Ð·Ð¸Ñ‚Ð¸Ð²Ð½Ñ‹Ñ… Ð¾Ñ‚Ð·Ñ‹Ð²Ð¾Ð² Ð½Ð° Ð´Ð¾Ð¿Ð¾Ð»Ð½Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ðµ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ñ‹ ÑƒÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ñ Ð“Ð¸Ð»ÑŒÐ´Ð¸ÐµÐ¹, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð¼Ñ‹ Ð´Ð¾Ð±Ð°Ð²Ð¸Ð»Ð¸ Ð² Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð¼ Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ð¸. Ð˜ ÐµÑ‰Ñ‘ Ð¼Ñ‹ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ð»Ð¸ Ð¾Ñ‚Ð·Ñ‹Ð²Ñ‹, Ñ‡Ñ‚Ð¾ ÑÐ°Ð¼Ñ‹Ð¹ Ð±Ð¾Ð»ÑŒÐ½Ð¾Ð¹ Ð²Ð¾Ð¿Ñ€Ð¾Ñ Ð´Ð»Ñ Ð½ÐµÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ñ… Ð“Ð¸Ð»ÑŒÐ´Ð¸Ð¹ - Ñ‡Ñ‚Ð¾ Ð´ÐµÐ»Ð°Ñ‚ÑŒ, ÐµÑÐ»Ð¸ Ð»Ð¸Ð´ÐµÑ€ Ð±Ð¾Ð»ÑŒÑˆÐµ Ð½Ðµ Ð°ÐºÑ‚Ð¸Ð²ÐµÐ½? ÐœÑ‹ Ð´Ð¾Ð±Ð°Ð²Ð¸Ð¼ Ð½Ð¾Ð²ÑƒÑŽ ÑÐ¸ÑÑ‚ÐµÐ¼Ñƒ Ð´Ð»Ñ Ñ‡Ð»ÐµÐ½Ð¾Ð² Ð“Ð¸Ð»ÑŒÐ´Ð¸Ð¸ - Ñ‚ÐµÐ¿ÐµÑ€ÑŒ Ð¾Ð½Ð¸ Ð¼Ð¾Ð³ÑƒÑ‚ Ð³Ð¾Ð»Ð¾ÑÐ¾Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð½Ð°Ð·Ð½Ð°Ñ‡Ð°Ñ‚ÑŒ Ð’Ñ€ÐµÐ¼ÐµÐ½Ð½Ð¾Ð³Ð¾ Ð›Ð¸Ð´ÐµÑ€Ð° Ð“Ð¸Ð»ÑŒÐ´Ð¸Ð¸, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð“Ð¸Ð»ÑŒÐ´Ð¸Ñ Ð¿Ñ€Ð¾Ð´Ð¾Ð»Ð¶Ð°Ð»Ð° ÑÑƒÑ‰ÐµÑÑ‚Ð²Ð¾Ð²Ð°Ñ‚ÑŒ Ð´Ð°Ð¶Ðµ Ð±ÐµÐ· ÑÐ²Ð¾ÐµÐ³Ð¾ Ð¾ÑÐ½Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ð•ÑÐ»Ð¸ Ð›Ð¸Ð´ÐµÑ€ Ð“Ð¸Ð»ÑŒÐ´Ð¸Ð¸ Ð½ÐµÐ°ÐºÑ‚Ð¸Ð²ÐµÐ½ Ð±Ð¾Ð»ÐµÐµ 30 Ð´Ð½ÐµÐ¹, Ð²ÑÐµ Ñ‡Ð»ÐµÐ½Ñ‹ Ð“Ð¸Ð»ÑŒÐ´Ð¸Ð¸ Ð¿Ð¾Ð»ÑƒÑ‡Ð°Ñ‚ Ð¿Ñ€Ð¸Ð³Ð»Ð°ÑˆÐµÐ½Ð¸Ðµ Ð¿Ñ€Ð¾Ð³Ð¾Ð»Ð¾ÑÐ¾Ð²Ð°Ñ‚ÑŒ Ð·Ð° Ð½Ð¾Ð²Ð¾Ð³Ð¾ Ð’Ñ€ÐµÐ¼ÐµÐ½Ð½Ð¾Ð³Ð¾ Ð›Ð¸Ð´ÐµÑ€Ð° Ð“Ð¸Ð»ÑŒÐ´Ð¸Ð¸.  <br>
                  Ð‘ÑƒÐ´ÑƒÑ‡Ð¸ Ð²Ñ‹Ð±Ñ€Ð°Ð½, Ð’Ñ€ÐµÐ¼ÐµÐ½Ð½Ñ‹Ð¹ Ð›Ð¸Ð´ÐµÑ€ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ñ‚ Ð²ÑÐµ Ð¿Ð¾Ð»Ð½Ð¾Ð¼Ð¾Ñ‡Ð¸Ñ Ð›Ð¸Ð´ÐµÑ€Ð° Ð“Ð¸Ð»ÑŒÐ´Ð¸Ð¸ Ð´Ð¾ Ñ‚ÐµÑ… Ð¿Ð¾Ñ€, Ð¿Ð¾ÐºÐ° Ð½Ðµ Ð²ÐµÑ€Ð½Ñ‘Ñ‚ÑÑ Ð¸ÑÑ…Ð¾Ð´Ð½Ñ‹Ð¹ Ð›Ð¸Ð´ÐµÑ€, Ð¸Ð»Ð¸ Ð¿Ð¾ÐºÐ° Ð’Ñ€ÐµÐ¼ÐµÐ½Ð½Ñ‹Ð¹ Ð›Ð¸Ð´ÐµÑ€ Ð½Ðµ Ð±ÑƒÐ´ÐµÑ‚ Ð½ÐµÐ°ÐºÑ‚Ð¸Ð²ÐµÐ½ Ð±Ð¾Ð»ÐµÐµ 7 Ð´Ð½ÐµÐ¹. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Ð‘Ð°Ð³Ñ„Ð¸ÐºÑÑ‹ Ð¸ Ð¾Ð¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð°Ñ†Ð¸Ñ<br></span>
              <span class="m-news-detail-s">
                &nbsp;&nbsp;&nbsp;- ÐÐ¾Ð²Ð°Ñ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð° ÑÐ²Ð¾Ð´ÐºÐ¸ Ð¼Ð°Ñ‚Ñ‡Ð° Ð² Ð‘Ð¸Ñ‚Ð²Ðµ ÐžÑ‚Ñ€ÑÐ´Ð¾Ð² Ð¸ ÐžÑ€ÑƒÐ¶ÐµÐ¹Ð½Ð¾Ð¼ Ð‘Ð°Ñ€Ð¾Ð½Ðµ. <br>
                &nbsp;&nbsp;&nbsp;- Ð˜Ð³Ñ€Ð¾Ðº Ð¼Ð¾Ð¶ÐµÑ‚ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð»ÑÑ‚ÑŒ ÑÐ²Ð¾Ð¸Ð¼ Ð´Ñ€ÑƒÐ·ÑŒÑÐ¼ Ð¿Ñ€Ð¸Ð³Ð»Ð°ÑÐ¸Ñ‚ÐµÐ»ÑŒÐ½ÑƒÑŽ ÑÑÑ‹Ð»ÐºÑƒ, ÑÐ³ÐµÐ½ÐµÑ€Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½ÑƒÑŽ ÑÐ¸ÑÑ‚ÐµÐ¼Ð¾Ð¹. <br>
                &nbsp;&nbsp;&nbsp;- ÐžÐ¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð¸Ñ€Ð¾Ð²Ð°Ð½ Ð¸Ð½Ñ‚ÐµÑ€Ñ„ÐµÐ¹Ñ Ð¾Ñ€ÑƒÐ¶Ð¸Ñ. <br>
                &nbsp;&nbsp;&nbsp;- Ð’ Ð¢ÐµÐ¿Ð»Ð¾Ð²Ð¾Ð¹ ÐŸÑ€Ð¸Ñ†ÐµÐ» Ñ‚ÐµÐ¿ÐµÑ€ÑŒ Ð²Ð¸Ð´Ð½Ð¾ Ð¸Ð³Ñ€Ð¾ÐºÐ¾Ð² ÑÐºÐ²Ð¾Ð·ÑŒ Ð´Ñ‹Ð¼Ð¾Ð²ÑƒÑŽ Ð·Ð°Ð²ÐµÑÑƒ. <br>
                &nbsp;&nbsp;&nbsp;- ÐžÐ¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¾ Ð¾Ñ‚Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ðµ Ð¿Ñ€Ð¸Ð³Ð»Ð°ÑˆÐµÐ½Ð¸Ð¹. <br>
                &nbsp;&nbsp;&nbsp;- ÐÐ¾Ð²Ñ‹Ðµ Ð·Ð°Ð¿Ð¸ÑÐ¸ Ð² Ð¶ÑƒÑ€Ð½Ð°Ð»Ðµ FF. <br>
                &nbsp;&nbsp;&nbsp;- ÐžÐ¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð¸Ñ€Ð¾Ð²Ð°Ð½ Ð¿Ð¾ÐºÐ°Ð· Ð¾Ð±ÑƒÑ‡ÐµÐ½Ð¸Ñ Ð±Ð»Ð¸Ð¶Ð½ÐµÐ¼Ñƒ Ð±Ð¾ÑŽ. <br>
                &nbsp;&nbsp;&nbsp;- ÐžÐ¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¾ Ð¾Ñ‚Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ðµ Ð¾Ð²ÐµÑ€Ñ‚Ð°Ð¹Ð¼Ð° Ð² Ñ€ÐµÐ¶Ð¸Ð¼Ðµ ÐšÐ¾Ð¼Ð°Ð½Ð´Ð½Ð°Ñ Ð‘Ð¸Ñ‚Ð²Ð° ÐÐ°ÑÐ¼ÐµÑ€Ñ‚ÑŒ. <br>
                &nbsp;&nbsp;&nbsp;- ÐžÐ¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð° Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ñ Ð¿Ð°Ñ€Ð°ÑˆÑŽÑ‚Ð°. <br>
                &nbsp;&nbsp;&nbsp;- Ð’ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ñ‹ Ð´Ð¾Ð±Ð°Ð²Ð»ÐµÐ½Ð° ÐšÐ°Ð»Ð°Ñ…Ð°Ñ€Ð¸. <br>
                &nbsp;&nbsp;&nbsp;- Ð˜ÑÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½ Ð±Ð°Ð³, Ð¿Ñ€Ð¸ ÐºÐ¾Ñ‚Ð¾Ñ€Ð¾Ð¼ Ð¸Ð³Ñ€Ð¾ÐºÐ¸ Ð¼Ð¾Ð³Ð»Ð¸ Ñ€Ð°Ð½ÑŒÑˆÐµ Ð²Ñ€ÐµÐ¼ÐµÐ½Ð¸ Ð¿Ð¾ÐºÐ¸Ð´Ð°Ñ‚ÑŒ Ð·Ð¾Ð½Ñƒ Ð¿Ð¾Ð´Ð³Ð¾Ñ‚Ð¾Ð²ÐºÐ¸ Ð² Ð½ÐµÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ñ… Ñ€ÐµÐ¶Ð¸Ð¼Ð°Ñ…. <br>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
        </div>
      </div>
    `,
    vi: `
      <div class="g-detail">
        <h2 class="c-h2">Báº£n Cáº­p Nháº­t: Sinh Nháº­t</h2>
        <div class="m-detail-time">Jul. 27, 2020</div>
        <div class="m-news-detail">
          <p class="orange">Tá»­ Chiáº¿n</p>
          <ul>
            <li>
              <span>Xáº¿p háº¡ng MÃ¹a  2<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">MÃ¹a giáº£i báº¯t Ä‘áº§u tá»« 16:00 30/07</span><br>
                <span>â€œTá»­ Chiáº¿n MÃ¹a 2 Ä‘Ã£ Ä‘áº¿n! LÃªn má»©c xáº¿p háº¡ng VÃ ng III trá»Ÿ lÃªn Ä‘á»ƒ nháº­n quÃ  Ä‘á»™c quyá»n Tá»­ Chiáº¿n - G18 VÃ ng rÃ²ng!â€</span><br>
                <br>
                <span style="color: #666666;">
                  Äiá»u chá»‰nh Cá»­a hÃ ng Tá»­ Chiáº¿n. <br>
                  ThÃ´ng sá»‘ Tá»­ Chiáº¿n giá» sáº½ xuáº¥t hiá»‡n trong há»“ sÆ¡ cá»§a ngÆ°á»i chÆ¡i. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Váº­t pháº©m má»›i - Bá»™ há»“i phá»¥c<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Xuáº¥t hiá»‡n trong Ä‘áº¥u thÆ°á»ng</span><br>
                <span>â€œNgÆ°á»i chÆ¡i thÆ°á»ng khÃ´ng Ä‘Æ°á»£c cá»©u bá»Ÿi cÃ¡c Ä‘á»“ng Ä‘á»™i trong Tá»­ Chiáº¿n vÃ¬ tráº­n chiáº¿n liÃªn tá»¥c xáº£y ra trÃªn báº£n Ä‘á»“. Vá»›i sá»± ra máº¯t cá»§a Bá»™ há»“i phá»¥c, ngÆ°á»i chÆ¡i cÃ³ cÆ¡ há»™i tham gia tráº­n chiáº¿n má»™t khi há» bá»‹ háº¡ gá»¥c. Bá»™ há»“i phá»¥c cÃ³ thá»ƒ khÃ¡ tá»‘n kÃ©m nhÆ°ng cháº¯c cháº¯n nÃ³ cÃ³ thá»ƒ giÃºp báº¡n láº­t ngÆ°á»£c tháº¿ cá».â€</span><br>
                <br>
                <span style="color: #666666;">
                  Bá»™ há»“i phá»¥c sáº½ khÃ´ng dá»«ng viá»‡c máº¥t mÃ¡u hoáº·c nháº­n sÃ¡t thÆ°Æ¡ng tá»« káº» thÃ¹ hoáº·c vÃ²ng bo. <br>
                  NgÆ°á»i chÆ¡i cÃ³ thá»ƒ khÃ´i phá»¥c kháº£ nÄƒng chiáº¿n Ä‘áº¥u báº±ng cÃ¡ch sá»­ dá»¥ng bá»™ há»“i sinh trong khi Ä‘ang bá»‹ ná»‘c. <br>
                  NgÆ°á»i chÆ¡i sáº½ Ä‘Æ°á»£c há»“i phá»¥c vá»›i 100 mÃ¡u HP sau khi sá»­ dá»¥ng Bá»™ há»“i phá»¥c. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Há»— trá»£ Ngáº¯m tá»± Ä‘á»™ng<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Äiá»u chá»‰nh Há»— trá»£ ngáº¯m trong Tá»­ Chiáº¿n</span><br>
                <span>â€œChÃºng tÃ´i Ä‘Ã£ nháº­n Ä‘Æ°á»£c nhá»¯ng lá»i phÃ n nÃ n ráº±ng há»— trá»£ ngáº¯m tá»± Ä‘á»™ng hiá»‡n Ä‘ang Æ°u tiÃªn cÃ¡c má»¥c tiÃªu bá»‹ háº¡ thay vÃ¬ nhá»¯ng má»¥c tiÃªu váº«n Ä‘ang chiáº¿n Ä‘áº¥u. Váº¥n Ä‘á» nÃ y cÃ³ thá»ƒ cá»±c ká»³ khÃ³ chá»‹u trong Tá»­ Chiáº¿n, nÆ¡i ngÆ°á»i chÆ¡i liÃªn tá»¥c tham gia vÃ o cÃ¡c tráº­n chiáº¿n. ChÃºng tÃ´i Ä‘iá»u chá»‰nh cÆ¡ cháº¿ Ä‘á»ƒ ngÆ°á»i chÆ¡i cÃ³ thá»ƒ nháº¯m vÃ o nhá»¯ng káº» thÃ¹ váº«n Ä‘ang lÃ  má»‘i Ä‘e dá»a trÆ°á»›c khi káº¿t liá»…u chÃºng tá»«ng ngÆ°á»i má»™t. â€</span><br>
                <br>
                <span style="color: #666666;">
                  Há»— trá»£ ngáº¯m tá»± Ä‘á»™ng bÃ¢y giá» sáº½ Æ°u tiÃªn ngÆ°á»i chÆ¡i Ä‘ang chiáº¿n Ä‘áº¥u (chá»‰ trong Tá»­ Chiáº¿n).  <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Lá»‘i ChÆ¡i</p>
          <ul>
            <li>
              <span>Äáº£o Chá» Má»›i - â€œÄÆ°á»ng BÄƒngâ€<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">LÃ m láº¡i Äáº£o chá» má»›i</span><br>
                <span>â€œÄÃ£ Ä‘Æ°á»£c má»™t thá»i gian ká»ƒ tá»« khi chÃºng tÃ´i ra máº¯t má»™t hÃ²n Ä‘áº£o chá» hoÃ n toÃ n má»›i. HÃ£y ngÃ³ qua vÃ  cho chÃºng tÃ´i biáº¿t cáº£m giÃ¡c cá»§a báº¡n!â€</span><br>
                <br>
                <span style="color: #666666;">
                  Äáº£o chá» má»›i: â€œÄÆ°á»ng BÄƒngâ€ hiá»‡n Ä‘Ã£ xuáº¥t hiá»‡n.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>CÆ¡ cháº¿ Ngá»“i & Bá» ngá»“i<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Báº£o vá»‡ headshot khi ngá»“i</span><br>
                <span>â€œChÃºng tÃ´i nháº­n tháº¥y ráº±ng má»™t sá»‘ ngÆ°á»i chÆ¡i Ä‘ang thiáº¿t láº­p cÃ¡c thÃ³i quen Ä‘á»ƒ Ä‘áº¡t Ä‘Æ°á»£c headshot ngay láº­p tá»©c báº±ng cÃ¡ch bá» ngá»“i thá»±c sá»± nhanh chÃ³ng sau khi ngáº¯m báº¯n. VÃ¬ hÃ nh Ä‘á»™ng nÃ y khiáº¿n ngÆ°á»i chÆ¡i bá»‹ áº£nh hÆ°á»Ÿng khÃ´ng cÃ³ cÆ¡ há»™i pháº£n Ä‘Ã²n, chÃºng tÃ´i sáº½ thÃªm giáº£m sÃ¡t thÆ°Æ¡ng nhá» Ä‘á»‘i vá»›i cÃ¡c phÃ¡t headshot ngay khi bá» ngá»“i. Thay Ä‘á»•i nÃ y chá»‰ nháº¯m Ä‘áº¿n nhá»¯ng ngÆ°á»i chÆ¡i Ä‘ang láº¡m dá»¥ng Ä‘áº·c Ä‘iá»ƒm nÃ y, nÃ³ khÃ´ng áº£nh hÆ°á»Ÿng Ä‘áº¿n viá»‡c chÆ¡i trÃ² chÆ¡i thÃ´ng thÆ°á»ng.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Headshot sáº½ bá»‹ giáº£m sÃ¡t thÆ°Æ¡ng 1 thá»i gian ngáº¯n sau khi bá» ngá»“i. (0.85s)<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>NÃ¢ng cáº¥p PhÆ°Æ¡ng tiá»‡n<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Äiá»u chá»‰nh tá»‘c Ä‘á»™ phÆ°Æ¡ng tiá»‡n</span><br>
                <span>â€œCÃ¡c báº¡n yÃªu cáº§u thÃ¬ chÃºng tÃ´i Ä‘Ã¡p á»©ng.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Äiá»u chá»‰nh tá»‘c Ä‘á»™ tá»‘i Ä‘a cho nhá»¯ng phÆ°Æ¡ng tiá»‡n sau:<br>
                  &nbsp;&nbsp;&nbsp;- Xe mÃ¡y: <del>120km/h</del>->130km/h <br>
                  &nbsp;&nbsp;&nbsp;- Xe Jeep: <del>100km/h</del>-> 110km/h <br>
                  &nbsp;&nbsp;&nbsp;- Xe Tuktuk: <del>90km/h</del>-> 100km/h <br>
                  &nbsp;&nbsp;&nbsp;- Xe bÃ¡n táº£i: <del>130km/h</del>->120km/h <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>CÆ¡ cháº¿ LÃ¡i xe<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Tá»‘i Æ°u hiá»ƒn thá»‹ tá»‘c Ä‘á»™ vÃ  hiá»‡u á»©ng tá»‘c Ä‘á»™ tá»‘i Ä‘a</span><br>
                <span>â€œKhi chÃºng tÃ´i tÄƒng tá»‘c Ä‘á»™ cá»§a háº§u háº¿t cÃ¡c phÆ°Æ¡ng tiá»‡n, chÃºng tÃ´i cÅ©ng thÃªm má»™t chuyá»ƒn Ä‘á»™ng camera sáº½ giÃºp lÃ¡i xe thoáº£i mÃ¡i hÆ¡n. Sau khi cáº­p nháº­t, camera sáº½ Ä‘Æ°á»£c thu nhá» má»™t chÃºt khi xe Ä‘áº¡t tá»‘c Ä‘á»™ tá»‘i Ä‘a. Äiá»u nÃ y sáº½ giÃºp tráº£i nghiá»‡m lÃ¡i xe mÆ°á»£t mÃ  hÆ¡n vÃ¬ ngÆ°á»i lÃ¡i sáº½ cÃ³ thá»ƒ nhÃ¬n tháº¥y nhiá»u váº­t thá»ƒ vÃ  chÆ°á»›ng ngáº¡i váº­t sáº¯p tá»›i trong khi lÃ¡i.â€</span><br>
                <br>
                <span style="color: #666666;">
                  ÄÃ£ thÃªm má»™t mÃ n hiá»ƒn thá»‹ chÃ­nh xÃ¡c hÆ¡n vá» tá»‘c Ä‘á»™ cá»§a xe. <br>
                  Camera bÃ¢y giá» sáº½ thu nhá» má»™t chÃºt khi xe á»Ÿ tá»‘c Ä‘á»™ tá»‘i Ä‘a. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>DÃ¹ lÆ°á»£n<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Tá»‘c Ä‘á»™ lÆ°á»£n giáº£m dáº§n khi trÃªn má»™t Ä‘á»™ cao nháº¥t Ä‘á»‹nh</span><br>
                <span>â€œChÃºng tÃ´i thá»±c hiá»‡n má»™t sá»‘ thay Ä‘á»•i cho dÃ¹ lÆ°á»£n vÃ¬ ngÆ°á»i chÆ¡i Ä‘ang sá»­ dá»¥ng chÃºng nhÆ° má»™t váº­t pháº©m Ä‘á»ƒ Ä‘áº¿n má»™t sá»‘ Ä‘iá»ƒm khÃ´ng thá»ƒ Ä‘áº¿n thay vÃ¬ sá»­ dá»¥ng chÃºng nhÆ° má»™t cÃ´ng cá»¥ Ä‘á»ƒ háº¡ cÃ¡nh an toÃ n tá»« Ä‘á»™ cao lá»›n.â€</span><br>
                <br>
                <span style="color: #666666;">
                  NgÆ°á»i chÆ¡i bÃ¢y giá» sáº½ háº¡ xuá»‘ng nhanh hÆ¡n khi há» á»Ÿ Ä‘á»™ cao trÃªn 38m. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Há»“i MÃ¡u<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ÄÃ£ thÃªm má»™t giá»›i háº¡n vá» lÆ°á»£ng mÃ¡u cÃ³ thá»ƒ Ä‘Æ°á»£c phá»¥c há»“i má»—i giÃ¢y.</span><br>
                <span>â€œVá»›i sá»± ra Ä‘á»i cá»§a cÃ¡c cÆ¡ cháº¿ vÃ  ká»¹ nÄƒng há»“i mÃ¡u má»›i, chÃºng tÃ´i nháº­n tháº¥y ráº±ng má»™t sá»‘ ngÆ°á»i chÆ¡i cÃ³ thá»ƒ tá»“n táº¡i bÃªn ngoÃ i vÃ²ng bp lÃ¢u hÆ¡n dá»± Ä‘á»‹nh báº±ng cÃ¡ch sá»­ dá»¥ng táº¥t cáº£ cÃ¡c ká»¹ nÄƒng vÃ  váº­t pháº©m há»“i mÃ¡u cÃ¹ng má»™t lÃºc. ChÃºng tÃ´i Ä‘Ã£ láº¥y Ä‘i má»™t pháº§n sá»©c máº¡nh nÃ y Ä‘á»ƒ trÃ¡nh ngÆ°á»i chÆ¡i Ä‘áº¡t BOOYAH báº±ng cÃ¡ch trá»‘n bÃªn ngoÃ i vÃ²ng bo.â€</span><br>
                <br>
                <span style="color: #666666;">
                  NgÆ°á»i chÆ¡i giá» khÃ´ng thá»ƒ há»“i mÃ¡u hÆ¡n 50 mÃ¡u/s.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">VÅ© KhÃ­ vÃ  CÃ¢n Báº±ng</p>
          <ul>
            <li>
              <span>VÅ© khÃ­ má»›i - AUG<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Xuáº¥t hiá»‡n trong Sinh tá»“n & Tá»­ chiáº¿n (Xáº¿p háº¡ng & Äáº¥u thÆ°á»ng)</span><br>
                <span>â€œÄÃ£ Ä‘Æ°á»£c má»™t thá»i gian ká»ƒ tá»« khi chÃºng tÃ´i ra máº¯t SÃºng trÆ°á»ng trong Free Fire. AUG lÃ  má»™t lá»±a chá»n cá»±c ká»³ nhanh nháº¹n vÃ  linh hoáº¡t mÃ  ngÆ°á»i chÆ¡i cÃ³ thá»ƒ sá»­ dá»¥ng trong trÃ² chÆ¡i. á»ng ngáº¯m 2x Ä‘Æ°á»£c Ä‘Ã­nh kÃ¨m trÆ°á»›c cho phÃ©p ngÆ°á»i chÆ¡i tham gia ngay vÃ o cÃ¡c tráº­n chiáº¿n táº§m trung vÃ  bÄƒng Ä‘áº¡n 35 viÃªn cá»±c ká»³ há»¯u Ã­ch trong cÃ¡c tÃ¬nh huá»‘ng á»Ÿ cá»± ly gáº§n. HÃ£y thá»­ AUG vá»›i vÅ© khÃ­ táº§m xa Ä‘á»ƒ tá»‘i Ä‘a hÃ³a hiá»‡u quáº£ cá»§a nÃ³.â€</span><br>
                <br>
                <span style="color: #666666;">
                  SÃ¡t thÆ°Æ¡ng: 31 <br>
                  Giá»›i háº¡n bÄƒng Ä‘áº¡n: 35 <br>
                  Tá»‘c báº¯n: .147 <br>
                  Äi kÃ¨m vá»›i á»‘ng 2x Ä‘Æ°á»£c trang bá»‹ sáºµn cÃ³ thá»ƒ hoÃ¡n Ä‘á»•i vá»›i cÃ¡c á»‘ng ngáº¯m khÃ¡c. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>AK<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Xuáº¥t hiá»‡n trong má»i cháº¿ Ä‘á»™</span><br>
                <span>â€œMáº·c dÃ¹ AK lÃ  má»™t trong nhá»¯ng vÅ© khÃ­ Ä‘Æ°á»£c yÃªu thÃ­ch má»i thá»i Ä‘áº¡i, nhÆ°ng nÃ³ cháº¯c cháº¯n lÃ  kÃ©m hÆ¡n so vá»›i cÃ¡c SÃºng trÆ°á»ng hÃ ng Ä‘áº§u trong trÃ² chÆ¡i. ChÃºng tÃ´i Ä‘ang khÃ´i phá»¥c sá»©c máº¡nh cá»§a AK má»™t chÃºt báº±ng cÃ¡ch tÄƒng nháº¹ sá»©c máº¡nh cá»§a nÃ³.â€</span><br>
                <br>
                <span style="color: #666666;">
                  SÃ¡t thÆ°Æ¡ng: <del>37</del>->38 <br>
                  SÃ¡t thÆ°Æ¡ng tá»‘i thiá»ƒu: <del>12</del>->14 <br>
                  Tá»‘c báº¯n: -3% <br>
                  PhÃ¡t báº¯n chÃ­nh xÃ¡c: <del>1</del>->2 <br>                
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>FAMAS<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Xuáº¥t hiá»‡n trong má»i cháº¿ Ä‘á»™</span><br>
                <span>â€œHiá»‡n táº¡i, FAMAS khÃ´ng Ä‘á»§ nhanh nháº¹n Ä‘á»ƒ nÃ³ náº±m trong danh sÃ¡ch SÃºng trÆ°á»ng hÃ ng Ä‘áº§u. ChÃºng tÃ´i cung cáº¥p cho nÃ³ má»™t sá»‘ tá»‘c Ä‘á»™ di chuyá»ƒn bá»• sung Ä‘á»ƒ ngÆ°á»i chÆ¡i cÃ³ thá»ƒ cÃ³ thá»i gian di chuyá»ƒn dá»… dÃ ng hÆ¡n giá»¯a cÃ¡c Ä‘á»£t báº¯n 3 viÃªn.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Tá»‘c Ä‘á»™ di chuyá»ƒn khi báº¯n: +10%<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>M249<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Xuáº¥t hiá»‡n trong má»i cháº¿ Ä‘á»™</span><br>
                <span>â€œM249 cháº¯c cháº¯n lÃ  má»™t trong nhá»¯ng vÅ© khÃ­ hÃ²m thÃ­nh yáº¿u nháº¥t hiá»‡n nay. ChÃºng tÃ´i cung cáº¥p cho nÃ³ má»™t báº£n cáº­p nháº­t chÃ­nh Ä‘á»ƒ cÃ³ thá»ƒ cung cáº¥p há»a lá»±c hiá»‡u quáº£.â€</span><br>
                <br>
                <span style="color: #666666;">
                  PhÃ¡t báº¯n chÃ­nh xÃ¡c: <del>4</del>->12 <br>
                  SÃt thÆ°Æ¡ng tá»‘i thiá»ƒu: <del>15</del>->21 <br>
                  Äá»™ giáº­t tá»‘i thiá»ƒu: -18% <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>SPAS12<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Xuáº¥t hiá»‡n trong má»i cháº¿ Ä‘á»™</span><br>
                <span>â€œMáº·c dÃ¹ SPAS12 lÃ  á»©ng cá»­ viÃªn hÃ ng Ä‘áº§u vá» lÆ°á»£ng sÃ¡t thÆ°Æ¡ng trong pháº¡m vi Ä‘iá»ƒm Ä‘en, nhÆ°ng viá»‡c giáº£m sÃ¡t thÆ°Æ¡ng máº¡nh lÃ  lÃ½ do khiáº¿n SPAS12 hoáº¡t Ä‘á»™ng kÃ©m hÆ¡n Ä‘Ã¡ng ká»ƒ so vá»›i M1887 vÃ  M1014. ChÃºng tÃ´i cung cáº¥p cho SPAS12 má»™t buff nhá» báº£n vÃ¡ nÃ y Ä‘á»ƒ thu háº¹p khoáº£ng cÃ¡ch vá»›i cÃ¡c shotgun khÃ¡c.â€</span><br>
                <br>
                <span style="color: #666666;">
                  SÃ¡t thÆ°Æ¡ng tá»‘i thiá»ƒu: <del>6</del>->7 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>XM8<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Xuáº¥t hiá»‡n trong má»i cháº¿ Ä‘á»™</span><br>
                <span>â€œXM8 Ä‘Ã£ Ä‘á»©ng Ä‘áº§u danh sÃ¡ch SÃºng trÆ°á»ng má»™t thá»i gian rá»“i. Má»™t trong nhá»¯ng lÃ½ do lÃ  vÃ¬ vÅ© khÃ­ nÃ y ráº¥t linh hoáº¡t vÃ  dá»… sá»­ dá»¥ng. ChÃºng tÃ´i Ä‘Ã£ thá»±c hiá»‡n má»™t sá»‘ Ä‘iá»u chá»‰nh cho báº£n cáº­p nháº­t XM8 nÃ y Ä‘á»ƒ nÃ³ cáº§n nhiá»u thá»i gian lÃ m quen hÆ¡n.â€</span><br>
                <br>
                <span style="color: #666666;">
                  PhÃ¡t báº¯n chÃ­nh xÃ¡c: <del>4</del>->3 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Cháº¿ Ä‘á»™ chÆ¡i</p>
          <ul>
            <li>
              <span>Bá»™ VÅ© KhÃ­<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Xuáº¥t hiá»‡n LiÃªn hoÃ n chiáº¿n, Nháº·t tháº», vÃ  Cuá»“ng sÃ¡t</span><br>
                <span>â€œChÃºng tÃ´i Ä‘Ã£ nháº­n Ä‘Æ°á»£c pháº£n há»“i tá»« ngÆ°á»i chÆ¡i ráº±ng cÃ¡c bá»™ vÅ© khÃ­ trÆ°á»›c quÃ¡ háº¡n cháº¿ vÃ¬ nÃ³ chá»‰ cung cáº¥p 4 bá»™ vÅ© khÃ­. ChÃºng tÃ´i giá»›i thiá»‡u má»™t danh sÃ¡ch chá»n vÅ© khÃ­ má»›i Ä‘á»ƒ táº¥t cáº£ ngÆ°á»i chÆ¡i cÃ³ thá»ƒ chá»n vÃ  thay Ä‘á»•i váº­t pháº©m há» muá»‘n má»—i khi há» há»“i sinh.â€</span><br>
                <br>
                <span style="color: #666666;">
                  NgÆ°á»i chÆ¡i hiá»‡n cÃ³ thá»ƒ mua vÅ© khÃ­ vÃ  trang bá»‹ vá»›i cÃ¡c khoáº£n tiá»n Ä‘Æ°á»£c cung cáº¥p má»—i vÃ²ng. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Cháº¿ Ä‘á»™ Äáº§u To<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;"> Äiá»u chá»‰nh nháº£y dÃ¹ vÃ  cÆ¡ cháº¿ há»“i sinh. </span><br>
                <span>â€œChÃºng tÃ´i Ä‘Ã£ thÃªm cÃ¡c cÆ¡ cháº¿ má»›i vÃ o Cháº¿ Ä‘á»™ Ä‘áº§u to Ä‘á»ƒ ngÆ°á»i chÆ¡i cÃ³ thá»ƒ triá»ƒn khai láº¡i vÃ  tham gia tráº­n chiáº¿n nhanh hÆ¡n!â€</span><br>
                <br>
                <span style="color: #666666;">
                  NgÆ°á»i chÆ¡i giá» Ä‘Ã¢y cÃ³ tÃ¹y chá»n tá»« bá» vÃ  há»“i sinh láº¡i khi bá»‹ háº¡. <br>
                  Háº¡ tháº¥p Ä‘á»™ cao cá»§a nháº£y dÃ¹ Ä‘á»ƒ ngÆ°á»i chÆ¡i cÃ³ thá»ƒ vÃ o láº¡i tráº­n chiáº¿n nhanh hÆ¡n.  <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Báº­c Tháº§y VÅ© KhÃ­ (Team 4)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Äiá»u chá»‰nh cÆ¡ cháº¿ nÃ¢ng cáº¥p vÅ© khÃ­ vÃ  hiá»‡n há»— trá»£ 4v4. </span><br>
                <span>â€œMá»™t trong nhá»¯ng váº¥n Ä‘á» lá»›n nháº¥t mÃ  chÃºng tÃ´i tÃ¬m tháº¥y vá»›i Báº­c Tháº§y VÅ© KhÃ­ ban Ä‘áº§u lÃ  ngÆ°á»i chÆ¡i muá»‘n chÆ¡i vá»›i báº¡n bÃ¨ cá»§a há», ngay cáº£ khi há» xuáº¥t hiá»‡n trong Ä‘á»™i hÃ¬nh káº» thÃ¹. ChÃºng tÃ´i Ä‘Ã£ bá»• sung má»™t thay Ä‘á»•i 4v4 cho Báº­c Tháº§y VÅ© KhÃ­ Ä‘á»ƒ ngÆ°á»i chÆ¡i cÃ³ thá»ƒ há»£p tÃ¡c vá»›i Ä‘á»™i hÃ¬nh cá»§a há» cho tráº­n Ä‘áº¥u 4v4!â€</span><br>
                <br>
                <span style="color: #666666;">
                  4v4 Ä‘Æ°á»£c há»— trá»£. <br>
                  Giá» Ä‘Ã¢y, ngÆ°á»i chÆ¡i cÃ³ thá»ƒ chá»n Ä‘á»ƒ bá» qua vÅ© khÃ­, náº¿u há» thua 3 tráº­n liÃªn tiáº¿p hoáº·c náº¿u tiáº¿n trÃ¬nh nÃ¢ng cáº¥p cá»§a há» cháº­m hÆ¡n Ä‘Ã¡ng ká»ƒ so vá»›i nhá»¯ng ngÆ°á»i chÆ¡i khÃ¡c. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">NhÃ¢n váº­t vÃ  Trá»£ thá»§</p>
          <ul>
            <li>
              <span>NhÃ¢n váº­t má»›i - Luqueta<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Hiá»‡n cÃ³ trong Cá»­a hÃ ng Free Fire. </span><br>
                <span>â€œBáº¡n Ä‘Ã£ sáºµn sÃ ng cho má»™t cÃº hat trick?â€</span><br>
                <br>
                <span style="color: #666666;">
                  Hat Trick: Má»—i máº¡ng háº¡ gá»¥c tÄƒng mÃ¡u HP tá»‘i Ä‘a {8/10/12/14/16/18}, lÃªn tá»›i 35.  <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Trá»£ thá»§ má»›i - Mr. Waggor<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Sáº¯p ra máº¯t! </span><br>
                <span>â€œBáº¡n cÃ³ bá»‹ chÃ¡n náº£n vÃ  má»‡t má»i vÃ¬ khÃ´ng cÃ³ quáº£ bom keo nÃ o khÃ´ng? Mr. Waggor sáº½ Ä‘áº£m báº£o báº¡n luÃ´n cÃ³ má»™t quáº£ bom keo trong tÃºi cá»§a báº¡n!â€</span><br>
                <br>
                <span style="color: #666666;">
                  TÆ°á»ng Keo: Khi má»™t ngÆ°á»i chÆ¡i cÃ³ Ã­t hÆ¡n [1/1/2] quáº£ bom keo, Mr. Waggor cÃ³ thá»ƒ táº¡o 1 quáº£ bom keo má»—i [120/100/80] giÃ¢y. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Hayato â€œHoáº£ Quyá»nâ€ - Sáº¯p ra máº¯t!<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Sáº¯p ra máº¯t! </span><br>
                <span>â€œNhÃ¢n váº­t thá»©c tá»‰nh thá»© 2 - Hayato â€œHoáº£ Quyá»nâ€ cuá»‘i cÃ¹ng cÅ©ng Ä‘áº¿n rá»“i! Tham gia sá»± kiá»‡n Sinh nháº­t 3 tuá»•i vÃ o ngÃ y 22 thÃ¡ng 8 Ä‘á»ƒ nháº­n Ä‘Æ°á»£c MIá»„N PHÃ!â€</span><br><br>
                <span style="color: #666666;">
                  KhiÃªn dao: Giáº£m sÃ¡t thÆ°Æ¡ng phÃ­a trÆ°á»›c{20/25/30/35/40}% trong 3s. CD: 50s. Báº¯n sáº½ lÃ m giÃ¡n Ä‘oáº¡n ká»¹ nÄƒng nÃ y.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Há»‡ Thá»‘ng</p>
          <ul>
            <li>
              <span>Quyá»n Chá»§ QuÃ¢n ÄoÃ n<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Há»‡ thá»‘ng quáº£n lÃ½ má»›i Ä‘Æ°á»£c bá»• sung </span><br>
                <span>â€œTá»« báº£n cáº­p nháº­t trÆ°á»›c, chÃºng tÃ´i Ä‘Ã£ nháº­n Ä‘Æ°á»£c ráº¥t nhiá»u pháº£n há»“i tÃ­ch cá»±c vá» cÃ¡c cÃ´ng cá»¥ quáº£n lÃ½ bá»• sung mÃ  chÃºng tÃ´i Ä‘Ã£ thÃªm vÃ o quÃ¢n Ä‘oÃ n. Tuy nhiÃªn, chÃºng tÃ´i Ä‘Ã£ nháº­n Ä‘Æ°á»£c pháº£n há»“i ráº±ng Ä‘iá»ƒm khÃ³ chá»‹u nháº¥t cá»§a má»™t sá»‘ quÃ¢n Ä‘oÃ n lÃ  khi chá»§ quÃ¢n Ä‘oÃ n khÃ´ng cÃ²n hoáº¡t Ä‘á»™ng. ChÃºng tÃ´i sáº½ bá»• sung má»™t há»‡ thá»‘ng Ä‘á»ƒ cÃ¡c thÃ nh viÃªn quÃ¢n Ä‘oÃ n báº§u chá»n cho má»™t chá»§ quÃ¢n Ä‘oÃ n táº¡m thá»i Ä‘á»ƒ quÃ¢n Ä‘oÃ n cÃ³ thá»ƒ duy trÃ¬ hoáº¡t Ä‘á»™ng ngay cáº£ khi khÃ´ng cÃ³ ngÆ°á»i lÃ£nh Ä‘áº¡o ban Ä‘áº§u.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Khi chá»§ quÃ¢n Ä‘oÃ n khÃ´ng hoáº¡t Ä‘á»™ng trong hÆ¡n 30 ngÃ y, cÃ¡c thÃ nh viÃªn quÃ¢n Ä‘oÃ n sáº½ nháº­n Ä‘Æ°á»£c thÃ´ng bÃ¡o bá» phiáº¿u cho má»™t quyá»n chá»§ quÃ¢n Ä‘oÃ n má»›i.  <br>
                  Sau khi bá» phiáº¿u, quyá»n chá»§ quÃ¢n Ä‘oÃ n sáº½ cÃ³ táº¥t cáº£ quyá»n háº¡n cá»§a chá»§ quÃ¢n Ä‘oÃ n cho Ä‘áº¿n khi ngÆ°á»i lÃ£nh Ä‘áº¡o ban Ä‘áº§u trá»Ÿ láº¡i hoáº·c náº¿u quyá»n chá»§ quÃ¢n Ä‘oÃ n khÃ´ng hoáº¡t Ä‘á»™ng trong hÆ¡n 7 ngÃ y.  <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Sá»­a Lá»—i vÃ  Tá»‘i Æ¯u HoÃ¡<br></span>
              <span class="m-news-detail-s">
                &nbsp;&nbsp;&nbsp;- Trang tÃ³m táº¯t tráº­n Ä‘áº¥u má»›i cho Tá»­ Chiáº¿n vÃ  Báº­c Tháº§y VÅ© KhÃ­. <br>
                &nbsp;&nbsp;&nbsp;- BÃ¢y giá» ngÆ°á»i chÆ¡i cÃ³ thá»ƒ gá»­i má»™t liÃªn káº¿t do há»‡ thá»‘ng táº¡o Ä‘á»ƒ má»i báº¡n bÃ¨ tham gia nhÃ³m cá»§a há». <br>
                &nbsp;&nbsp;&nbsp;- Tá»‘i Æ°u hÃ³a vÅ© khÃ­ trong game HUD. <br>
                &nbsp;&nbsp;&nbsp;- á»ng ngáº¯m nhiá»‡t bÃ¢y giá» cÃ³ thá»ƒ nhÃ¬n tháº¥y qua lá»±u Ä‘áº¡n khÃ³i. <br>
                &nbsp;&nbsp;&nbsp;- Tá»‘i Æ°u hÃ³a hiá»ƒn thá»‹ lá»i má»i cá»§a nhÃ³m. <br>
                &nbsp;&nbsp;&nbsp;- Cáº­p nháº­t ná»™i dung má»›i vÃ o HÆ°á»›ng dáº«n FF. <br>
                &nbsp;&nbsp;&nbsp;- Tá»‘i Æ°u hÃ³a hiá»ƒn thá»‹ video giá»›i thiá»‡u trong cÃ¡c cháº¿ Ä‘á»™ chiáº¿n Ä‘áº¥u gáº§n. <br>
                &nbsp;&nbsp;&nbsp;- Tá»‘i Æ°u hÃ³a hiá»ƒn thá»‹ bÃ¹ giá» cho LiÃªn hoÃ n chiáº¿n. <br>
                &nbsp;&nbsp;&nbsp;- Tá»‘i Æ°u hÃ³a hiá»‡u á»©ng nháº£y dÃ¹. <br>
                &nbsp;&nbsp;&nbsp;- Äáº£o sa máº¡c hiá»‡n Ä‘Ã£ Ä‘Æ°á»£c thÃªm vÃ o táº¡o phÃ²ng. <br>
                &nbsp;&nbsp;&nbsp;- ÄÃ£ sá»­a lá»—i trong Ä‘Ã³ ngÆ°á»i chÆ¡i cÃ³ thá»ƒ rá»i khá»i khu vá»±c chuáº©n bá»‹ á»Ÿ má»™t sá»‘ cháº¿ Ä‘á»™ trÆ°á»›c khi háº¿t thá»i gian Ä‘Ã³ng bÄƒng. <br>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
        </div>
      </div>
    `,
    th: `
      <div class="g-detail">
        <h2 class="c-h2">à¸­à¸±à¸›à¹€à¸”à¸•à¹ƒà¸«à¸¡à¹ˆ Free Fire: 3volution</h2>
        <div class="m-detail-time">Jul. 27, 2020</div>
        <div class="m-news-detail">
          <p class="orange">à¹‚à¸«à¸¡à¸” 4v4 à¸ˆà¸±à¸”à¸­à¸±à¸™à¸”à¸±à¸š </p>
          <ul>
            <li>
              <span>4v4 à¸ˆà¸±à¸”à¸­à¸±à¸™à¸”à¸±à¸šà¸‹à¸µà¸‹à¸±à¹ˆà¸™ 2 à¸à¸¥à¸±à¸šà¸¡à¸²à¹à¸¥à¹‰à¸§<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Season starts 07/30 17:00 SGT</span><br>
                <span>4v4 à¸ˆà¸±à¸”à¸­à¸±à¸™à¸”à¸±à¸šà¸‹à¸µà¸‹à¸±à¹ˆà¸™à¸ªà¸­à¸‡ à¹€à¸£à¸´à¹ˆà¸¡à¸•à¹‰à¸™à¸‚à¸¶à¹‰à¸™à¹à¸¥à¹‰à¸§! à¹€à¸•à¸£à¸µà¸¢à¸¡à¸•à¸±à¸§à¹„à¸•à¹ˆà¹à¸£à¸‡à¸à¹Œà¸‚à¸¶à¹‰à¸™à¸–à¸¶à¸‡ à¹‚à¸à¸¥à¸¥à¹Œ 3 à¸«à¸£à¸·à¸­ à¸¡à¸²à¸à¸à¸§à¹ˆà¸²à¸™à¸±à¹‰à¸™
                  à¹€à¸žà¸·à¹ˆà¸­à¸£à¸±à¸šà¹„à¸­à¹€à¸—à¸¡à¸ªà¸¸à¸” Exclusive - The Golden G18!</span><br>
                <span>à¸£à¸°à¸¢à¸° +</span><br>
                <span>à¸„à¸§à¸²à¸¡à¹à¸¡à¹ˆà¸™à¸¢à¸³ -</span><br>
                <br>
                <span style="color: #666666;">
                  à¸›à¸£à¸±à¸šà¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸„à¸¥à¸±à¸‡à¸­à¸²à¸§à¸¸à¸˜ 4v4 <br>
                  à¸ªà¸–à¸´à¸•à¸´à¸à¸²à¸£à¹€à¸¥à¹ˆà¸™à¹ƒà¸™à¹‚à¸«à¸¡à¸” 4v4 à¸ªà¸²à¸¡à¸²à¸£à¸–à¸”à¸¹à¹„à¸”à¹‰à¸ˆà¸²à¸à¸«à¸™à¹‰à¸²à¹‚à¸›à¸£à¹„à¸Ÿà¸¥à¹Œà¸ªà¹ˆà¸§à¸™à¸•à¸±à¸§ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>à¹„à¸­à¹€à¸—à¸¡à¹ƒà¸«à¸¡à¹ˆ! Horizaline (Revive Kit)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">à¹€à¸ˆà¸­à¹„à¸”à¹‰à¹ƒà¸™ 4v4 à¸—à¸±à¹ˆà¸§à¹„à¸› </span><br>
                <span>à¸­à¸¸à¸›à¸à¸£à¸“à¹Œà¸—à¸µà¹ˆà¸ˆà¸°à¸Šà¹ˆà¸§à¸¢à¹ƒà¸«à¹‰à¸¥à¸¸à¸à¸‚à¸¶à¹‰à¸™à¸¡à¸²à¹„à¸”à¹‰à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡à¹à¸¡à¹‰à¸šà¸²à¸”à¹€à¸ˆà¹‡à¸šà¸ªà¸²à¸«à¸±à¸ª à¹‚à¸”à¸¢à¹„à¸¡à¹ˆà¸•à¹‰à¸­à¸‡à¸žà¸¶à¹ˆà¸‡à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¹ƒà¸™à¸—à¸µà¸¡à¸„à¸™à¸­à¸·à¹ˆà¸™
                  à¹€à¸žà¸£à¸²à¸°à¸§à¹ˆà¸²à¹‚à¸«à¸¡à¸”à¸™à¸µà¹‰à¹€à¸›à¹‡à¸™à¸à¸²à¸£à¸•à¹ˆà¸­à¸ªà¸¹à¹‰à¸—à¸µà¹ˆà¸•à¹ˆà¸­à¹€à¸™à¸·à¹ˆà¸­à¸‡
                  à¹€à¸›à¹‡à¸™à¸à¸²à¸£à¹€à¸›à¸´à¸”à¹‚à¸­à¸à¸²à¸ªà¹ƒà¸«à¹‰à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¹„à¸”à¹‰à¸à¸¥à¸±à¸šà¸¡à¸²à¸­à¸¢à¸¹à¹ˆà¹ƒà¸™à¸ªà¸¡à¸£à¸ à¸¹à¸¡à¸´à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡à¸«à¸¥à¸±à¸‡à¸ˆà¸²à¸à¸¥à¹‰à¸¡ à¹„à¸­à¹€à¸—à¸¡ Horizaline
                  à¸¡à¸µà¸£à¸²à¸„à¸²à¸—à¸µà¹ˆà¸„à¹ˆà¸­à¸™à¸‚à¹‰à¸²à¸‡à¸ªà¸¹à¸‡ à¹à¸•à¹ˆà¸žà¸§à¸à¹€à¸£à¸²à¹€à¸Šà¸·à¹ˆà¸­à¸§à¹ˆà¸²à¸¡à¸±à¸™à¸ˆà¸°à¹€à¸›à¹‡à¸™à¹„à¸­à¹€à¸—à¸¡à¸—à¸µà¹ˆà¸—à¸¸à¸à¸„à¸™à¸Šà¸·à¹ˆà¸™à¸Šà¸­à¸šà¹à¸™à¹ˆà¸™à¸­à¸™!</span><br>
                <br>
                <span style="color: #666666;">
                  Horizaline à¹„à¸­à¹€à¸—à¸¡à¸™à¸µà¹‰à¸ˆà¸°à¹„à¸¡à¹ˆà¹„à¸”à¹‰à¸—à¸³à¹ƒà¸«à¹‰à¸ªà¸–à¸²à¸™à¸°à¹€à¸¥à¸·à¸­à¸”à¸­à¸­à¸ à¸«à¸£à¸·à¸­ à¸”à¸²à¹€à¸¡à¸ˆ <br>
                  à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸ªà¸²à¸¡à¸²à¸£à¸–à¸à¸¥à¸±à¸šà¹€à¸‚à¹‰à¸²à¸ªà¸¹à¹ˆà¹€à¸à¸¡à¹„à¸”à¹‰à¹‚à¸”à¸¢à¸à¸²à¸£à¹ƒà¸Šà¹‰à¹„à¸­à¹€à¸—à¸¡à¸•à¸±à¸§à¸™à¸µà¹‰à¸‚à¸“à¸°à¸—à¸µà¹ˆà¸¥à¹‰à¸¡à¹à¸¥à¹‰à¸§ <br>
                  à¹à¸¥à¸° à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸ˆà¸°à¹„à¸”à¹‰ à¹€à¸¥à¸·à¸­à¸” HP 100 à¸«à¸¥à¸±à¸‡à¸ˆà¸²à¸à¹ƒà¸Šà¹‰ Horizaline <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>à¸£à¸°à¸šà¸šà¸Šà¹ˆà¸§à¸¢à¹€à¸¥à¹‡à¸‡à¹ƒà¸™à¹€à¸à¸¡<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">à¸›à¸£à¸±à¸šà¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸à¸²à¸£à¸Šà¹ˆà¸§à¸¢à¹€à¸¥à¹‡à¸‡à¹ƒà¸™à¹‚à¸«à¸¡à¸” 4v4</span><br>
                <span>à¸žà¸§à¸à¹€à¸£à¸²à¹„à¸”à¹‰à¸£à¸±à¸šà¸à¸²à¸£à¸£à¹‰à¸­à¸‡à¹€à¸£à¸µà¸¢à¸™à¹€à¸à¸µà¹ˆà¸¢à¸§à¸à¸±à¸šà¸à¸²à¸£à¸ˆà¸±à¸”à¸¥à¸³à¸”à¸±à¸šà¸„à¸§à¸²à¸¡à¸ªà¸³à¸„à¸±à¸ à¸‚à¸­à¸‡à¸à¸²à¸£à¸¥à¹‡à¸­à¸à¹€à¸›à¹‰à¸²à¹€à¸¥à¹‡à¸‡à¸‚à¸­à¸‡à¸„à¸™à¸—à¸µà¹ˆà¸¥à¹‰à¸¡à¸­à¸¢à¸¹à¹ˆà¸•à¸£à¸‡à¸«à¸™à¹‰à¸²
                  à¹à¸—à¸™à¸—à¸µà¹ˆà¸ˆà¸°à¸ªà¸²à¸¡à¸²à¸£à¸–à¹€à¸¥à¹‡à¸‡à¹„à¸›à¸¢à¸±à¸‡à¸¨à¸±à¸•à¸£à¸¹à¸­à¸·à¹ˆà¸™à¹ƒà¸™à¹€à¸à¸¡à¹„à¸”à¹‰ à¸›à¸±à¸à¸«à¸²à¸™à¸µà¹‰à¹€à¸›à¹‡à¸™à¸›à¸±à¸à¸«à¸²à¸—à¸µà¹ˆà¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¹„à¸¡à¹ˆà¸žà¸­à¹ƒà¸ˆà¹ƒà¸™à¹‚à¸«à¸¡à¸” 4v4
                  à¹€à¸£à¸²à¸ˆà¸¶à¸‡à¸›à¸£à¸±à¸šà¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸à¸¥à¹„à¸à¹€à¸žà¸·à¹ˆà¸­à¹ƒà¸«à¹‰à¹€à¸›à¹‰à¸²à¹€à¸¥à¹‡à¸‡à¹„à¸¡à¹ˆà¸¥à¹‡à¸­à¸à¸„à¸™à¸—à¸µà¹ˆà¸¥à¹‰à¸¡à¸­à¸¢à¸¹à¹ˆà¸•à¸£à¸‡à¸«à¸™à¹‰à¸² à¹à¸•à¹ˆà¸ªà¸²à¸¡à¸²à¸£à¸–à¹€à¸¥à¹‡à¸‡à¹„à¸›à¸¢à¸±à¸‡à¸¨à¸±à¸•à¸£à¸¹à¸•à¸±à¸§à¸­à¸·à¹ˆà¸™ à¹† à¹„à¸”à¹‰
                  à¸à¹ˆà¸­à¸™à¸—à¸µà¹ˆà¸ˆà¸°à¸¡à¸²à¹„à¸¥à¹ˆà¹€à¸à¹‡à¸šà¸„à¸™à¸—à¸µà¹ˆà¸¥à¹‰à¸¡à¸­à¸¢à¸¹à¹ˆ</span><br>
                <br>
                <span style="color: #666666;">
                  à¸£à¸°à¸šà¸šà¸Šà¹ˆà¸§à¸¢à¹€à¸¥à¹‡à¸‡à¸ˆà¸°à¸Šà¹ˆà¸§à¸¢à¹ƒà¸«à¹‰à¸„à¸¸à¸“à¸ˆà¸±à¸”à¸¥à¸³à¸”à¸±à¸šà¸„à¸§à¸²à¸¡à¸ªà¸³à¸„à¸±à¸à¸‚à¸­à¸‡à¸„à¸¸à¸“à¹€à¸­à¸‡à¹„à¸”à¹‰à¹ƒà¸™à¸ªà¸¡à¸£à¸ à¸¹à¸¡à¸´ [à¹‚à¸«à¸¡à¸” 4v4 à¹€à¸—à¹ˆà¸²à¸™à¸±à¹‰à¸™!]<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">à¸£à¸°à¸šà¸šà¹€à¸à¸¡</p>
          <ul>
            <li>
              <span>à¹€à¸à¸²à¸°à¸£à¸­à¹ƒà¸«à¸¡à¹ˆ â€œà¹‚à¸£à¸‡à¹€à¸à¹‡à¸šà¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡à¸šà¸´à¸™â€<br></span>
              <span class="m-news-detail-s">
                <span>à¹€à¸à¸²à¸°à¸£à¸­à¹ƒà¸«à¸¡à¹ˆ: â€œà¹‚à¸£à¸‡à¹€à¸à¹‡à¸šà¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡à¸šà¸´à¸™â€ à¸¡à¸²à¹à¸¥à¹‰à¸§!!</span><br>
                <br>
                <span style="color: #666666;">
                  à¹€à¸à¸²à¸°à¸£à¸­à¹ƒà¸«à¸¡à¹ˆ: â€œà¹‚à¸£à¸‡à¹€à¸à¹‡à¸šà¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡à¸šà¸´à¸™â€ à¸¡à¸²à¹à¸¥à¹‰à¸§!!<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>à¹à¸à¹‰à¹„à¸‚à¸¥à¸¸à¸ - à¸™à¸±à¹ˆà¸‡à¸¢à¸´à¸‡<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">à¸›à¹‰à¸­à¸‡à¸à¸±à¸™à¸à¸²à¸£ Headshot à¹€à¸¡à¸·à¹ˆà¸­à¸à¸”à¸™à¸±à¹ˆà¸‡</span><br>
                <span>à¹€à¸£à¸²à¹„à¸”à¹‰à¸¢à¸´à¸™à¸§à¹ˆà¸²à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸šà¸²à¸‡à¸ªà¹ˆà¸§à¸™à¹„à¸”à¹‰à¹ƒà¸Šà¹‰à¹€à¸—à¸„à¸™à¸´à¸„à¹ƒà¸™à¸à¸²à¸£à¸¢à¸´à¸‡Headshotà¹„à¸”à¹‰à¸—à¸±à¸™à¸—à¸µ
                  à¹‚à¸”à¸¢à¸à¸²à¸£à¸à¸”à¸™à¸±à¹ˆà¸‡à¹à¸¥à¸°à¸¥à¸¸à¸à¸‚à¸¶à¹‰à¸™à¸—à¸±à¸™à¸—à¸µà¸«à¸¥à¸±à¸‡à¸ˆà¸²à¸à¸à¸”à¹€à¸¥à¹‡à¸‡ à¸—à¸³à¹ƒà¸«à¹‰à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸­à¸·à¹ˆà¸™à¹„à¸¡à¹ˆà¸¡à¸µà¹‚à¸­à¸à¸²à¸ªà¹„à¸”à¹‰à¹‚à¸•à¹‰à¸à¸¥à¸±à¸šà¸­à¸¢à¹ˆà¸²à¸‡à¸—à¸µà¹ˆà¸„à¸§à¸£à¹€à¸›à¹‡à¸™
                  à¹€à¸£à¸²à¸ˆà¸¶à¸‡à¹„à¸”à¹‰à¸—à¸³à¸à¸²à¸£à¸¥à¸”à¸”à¸²à¹€à¸¡à¸ˆà¸à¸²à¸£à¸¢à¸´à¸‡Headshotà¸¥à¸‡à¹€à¸¡à¸·à¹ˆà¸­à¹ƒà¸Šà¹‰à¹€à¸—à¸„à¸™à¸´à¸„à¸™à¸µà¹‰
                  à¸à¸²à¸£à¸›à¸£à¸±à¸šà¸”à¸²à¹€à¸¡à¸ˆà¸™à¸µà¹‰à¸ˆà¸°à¸¡à¸µà¸œà¸¥à¹à¸„à¹ˆà¸•à¹ˆà¸­à¸¨à¸±à¸•à¸£à¸¹à¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆà¸•à¸£à¸‡à¸«à¸™à¹‰à¸²à¸‚à¸­à¸‡à¸œà¸¹à¹‰à¸—à¸µà¹ˆà¹ƒà¸Šà¹‰à¹€à¸—à¸„à¸™à¸´à¸„à¸™à¸µà¹‰à¹€à¸—à¹ˆà¸²à¸™à¸±à¹‰à¸™
                  à¹„à¸¡à¹ˆà¹„à¸”à¹‰à¸ªà¹ˆà¸‡à¸œà¸¥à¸•à¹ˆà¸­à¸à¸²à¸£à¹€à¸¥à¹ˆà¸™à¹‚à¸”à¸¢à¸£à¸§à¸¡ </span><br>
                <br>
                <span style="color: #666666;">
                  à¸›à¸£à¸±à¸šà¸„à¸§à¸²à¸¡à¸ªà¸¡à¸”à¸¸à¸¥à¸‚à¸­à¸‡à¸à¸²à¸£à¸¥à¸¸à¸-à¸™à¸±à¹ˆà¸‡à¸¢à¸´à¸‡ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>à¸­à¸±à¸›à¹€à¸”à¸•à¸¢à¸²à¸™à¸žà¸²à¸«à¸™à¸°<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">à¹€à¸žà¸´à¹ˆà¸¡à¸„à¸§à¸²à¸¡à¹€à¸£à¹‡à¸§à¸‚à¸­à¸‡à¸¢à¸²à¸™à¸žà¸²à¸«à¸™à¸°</span><br>
                <span>â€œà¹€à¸¡à¸·à¹ˆà¸­à¸„à¸¸à¸“à¸‚à¸­ à¹€à¸£à¸²à¸à¹‡à¸ˆà¸±à¸”à¹ƒà¸«à¹‰â€</span><br>
                <br>
                <span style="color: #666666;">
                  à¸„à¸§à¸²à¸¡à¹€à¸£à¹‡à¸§à¸ªà¸¹à¸‡à¸ªà¸¹à¸” à¸‚à¸­à¸‡à¸¢à¸²à¸™à¸žà¸²à¸«à¸™à¸°à¹à¸•à¹ˆà¸¥à¸°à¸Šà¸™à¸´à¸”: <br>
                  &nbsp;&nbsp;&nbsp;- à¸¡à¸­à¹€à¸•à¸­à¸£à¹Œà¹„à¸‹à¸„à¹Œ à¹€à¸žà¸´à¹ˆà¸¡à¹€à¸›à¹‡à¸™ 130 km/h <br>
                  &nbsp;&nbsp;&nbsp;- à¸£à¸–à¸ˆà¸µà¹Šà¸› à¹€à¸žà¸´à¹ˆà¸¡à¹€à¸›à¹‡à¸™ 110 km/h <br>
                  &nbsp;&nbsp;&nbsp;- à¸£à¸–à¸•à¸¸à¹Šà¸à¸•à¸¸à¹Šà¸ à¹€à¸žà¸´à¹ˆà¸¡à¹€à¸›à¹‡à¸™ 100 km/h <br>
                  &nbsp;&nbsp;&nbsp;- à¸£à¸–à¸¢à¸™à¸•à¹Œ à¹€à¸žà¸´à¹ˆà¸¡à¹€à¸›à¹‡à¸™ 120 km/h <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>à¸£à¸°à¸šà¸šà¸à¸²à¸£à¸‚à¸±à¸šà¸‚à¸µà¹ˆ<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">à¸›à¸£à¸±à¸šà¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸«à¸™à¹‰à¸²à¸ˆà¸­à¹à¸ªà¸”à¸‡à¸„à¸§à¸²à¸¡à¹€à¸£à¹‡à¸§
                  à¹à¸¥à¸°à¸à¸²à¸£à¹à¸ªà¸”à¸‡à¸œà¸¥à¹€à¸¡à¸·à¹ˆà¸­à¹€à¸£à¹ˆà¸‡à¸„à¸§à¸²à¸¡à¹€à¸£à¹‡à¸§à¸ªà¸¹à¸‡à¸ªà¸¸à¸”</span><br>
                <span>à¹ƒà¸™à¸‚à¸“à¸°à¸—à¸µà¹ˆà¹€à¸£à¸²à¹€à¸žà¸´à¹ˆà¸¡à¸„à¸§à¸²à¸¡à¹€à¸£à¹‡à¸§à¹ƒà¸«à¹‰à¸à¸±à¸šà¸¢à¸²à¸™à¸žà¸²à¸«à¸™à¸°à¸ªà¹ˆà¸§à¸™à¹ƒà¸«à¸à¹ˆ
                  à¹€à¸£à¸²à¸¢à¸±à¸‡à¹„à¸”à¹‰à¹€à¸žà¸´à¹ˆà¸¡à¸£à¸°à¸šà¸šà¸¡à¸¸à¸¡à¸à¸¥à¹‰à¸­à¸‡à¸—à¸µà¹ˆà¸ˆà¸°à¸Šà¹ˆà¸§à¸¢à¹ƒà¸«à¹‰à¸à¸²à¸£à¸‚à¸±à¸šà¸‚à¸µà¹ˆà¸™à¸±à¹‰à¸™à¸‡à¹ˆà¸²à¸¢à¸¢à¸´à¹ˆà¸‡à¸‚à¸¶à¹‰à¸™ à¸«à¸¥à¸±à¸‡à¸ˆà¸²à¸à¸­à¸±à¸›à¹€à¸”à¸• à¸¡à¸¸à¸¡à¸à¸¥à¹‰à¸­à¸‡à¸ˆà¸°à¸„à¹ˆà¸­à¸¢ à¹†
                  à¸‹à¸¹à¸¡à¸­à¸­à¸à¸Šà¹‰à¸² à¹† à¹€à¸¡à¸·à¹ˆà¸­à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¹€à¸£à¹ˆà¸‡à¸„à¸§à¸²à¸¡à¹€à¸£à¹‡à¸§à¸ˆà¸™à¸–à¸¶à¸‡à¸„à¸§à¸²à¸¡à¹€à¸£à¹‡à¸§à¸ªà¸¹à¸‡à¸ªà¸¸à¸”
                  à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸ˆà¸°à¹„à¸”à¹‰à¸£à¸±à¸šà¸›à¸£à¸°à¸ªà¸šà¸à¸²à¸£à¸“à¹Œà¸à¸²à¸£à¸‚à¸±à¸šà¸£à¸–à¸—à¸µà¹ˆà¸¥à¸·à¹ˆà¸™à¹„à¸«à¸¥à¸‚à¸¶à¹‰à¸™ à¸ªà¸²à¸¡à¸²à¸£à¸–à¸ªà¹ˆà¸­à¸‡à¹€à¸«à¹‡à¸™à¸§à¸±à¸•à¸–à¸¸à¹à¸¥à¸°à¸­à¸¸à¸›à¸ªà¸£à¸£à¸„à¸•à¹ˆà¸²à¸‡ à¹†
                  à¸—à¸µà¹ˆà¸ˆà¸°à¹€à¸‚à¹‰à¸²à¸¡à¸²à¸«à¸²à¹„à¸”à¹‰à¸”à¸µà¸¢à¸´à¹ˆà¸‡à¸‚à¸¶à¹‰à¸™ </span><br>
                <br>
                <span style="color: #666666;">
                  à¸›à¸£à¸±à¸šà¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸«à¸™à¹‰à¸²à¸›à¸±à¸”à¸„à¸§à¸²à¸¡à¹€à¸£à¹‡à¸§à¸‚à¸“à¸°à¸‚à¸±à¸šà¸£à¸– <br>
                  à¸¡à¸¸à¸¡à¸à¸¥à¹‰à¸­à¸‡à¸ˆà¸°à¸‹à¸¹à¸¡à¸­à¸­à¸à¸Šà¹‰à¸² à¹† à¹€à¸¡à¸·à¹ˆà¸­à¹€à¸£à¹ˆà¸‡à¸£à¸–à¸–à¸¶à¸‡à¸„à¸§à¸²à¸¡à¹€à¸£à¹‡à¸§à¸ªà¸¹à¸‡à¸ªà¸¸à¸” <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>à¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡à¸£à¹ˆà¸­à¸™<br></span>
              <span class="m-news-detail-s">
                <span
                  style="font-style: italic; color: #666666;">à¸„à¸§à¸²à¸¡à¹€à¸£à¹‡à¸§à¹ƒà¸™à¸à¸²à¸£à¸£à¹ˆà¸§à¸‡à¸ˆà¸°à¹€à¸žà¸´à¹ˆà¸¡à¸‚à¸¶à¹‰à¸™à¹€à¸¡à¸·à¹ˆà¸­à¸–à¸¶à¸‡à¸£à¸°à¸”à¸±à¸šà¸„à¸§à¸²à¸¡à¸ªà¸¹à¸‡à¸—à¸µà¹ˆà¹€à¸«à¸¡à¸²à¸°à¸ªà¸¡</span><br>
                <span>â€œà¹€à¸£à¸²à¹„à¸”à¹‰à¸—à¸³à¸à¸²à¸£à¸›à¸£à¸±à¸šà¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸šà¸²à¸‡à¸­à¸¢à¹ˆà¸²à¸‡à¹€à¸à¸µà¹ˆà¸¢à¸§à¸à¸±à¸šà¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡à¸£à¹ˆà¸­à¸™ à¹€à¸žà¸£à¸²à¸°à¸§à¹ˆà¸²à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸šà¸²à¸‡à¸ªà¹ˆà¸§à¸™à¹„à¸”à¹‰à¹ƒà¸Šà¹‰à¸¡à¸±à¸™à¹„à¸›à¹ƒà¸™à¸—à¸µà¹ˆ à¹†
                  à¹„à¸¡à¹ˆà¸ªà¸²à¸¡à¸²à¸£à¸–à¹„à¸›à¹„à¸”à¹‰ à¹à¸—à¸™à¸—à¸µà¹ˆà¸ˆà¸°à¹ƒà¸Šà¹‰à¹€à¸›à¹‡à¸™à¸­à¸¸à¸›à¸à¸£à¸“à¹Œà¹€à¸žà¸·à¹ˆà¸­à¸¥à¸‡à¸ˆà¸²à¸à¸—à¸µà¹ˆà¸ªà¸¹à¸‡à¸­à¸¢à¹ˆà¸²à¸‡à¸›à¸¥à¸­à¸”à¸ à¸±à¸¢â€</span><br>
                <br>
                <span style="color: #666666;">
                  à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸ˆà¸°à¸£à¹ˆà¸§à¸‡à¸¥à¸‡à¹€à¸£à¹‡à¸§à¸‚à¸¶à¹‰à¸™à¹€à¸¡à¸·à¹ˆà¸­à¸‚à¸¶à¹‰à¸™à¸–à¸¶à¸‡à¸„à¸§à¸²à¸¡à¸ªà¸¹à¸‡à¸¡à¸²à¸à¸à¸§à¹ˆà¸² 38 à¹€à¸¡à¸•à¸£ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>à¸à¸²à¸£à¸Ÿà¸·à¹‰à¸™à¸Ÿà¸¹à¹€à¸¥à¸·à¸­à¸”<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">à¸ˆà¸³à¸à¸±à¸”à¸›à¸£à¸´à¸¡à¸²à¸“à¸‚à¸­à¸‡à¹€à¸¥à¸·à¸­à¸”à¸—à¸µà¹ˆà¸ˆà¸°à¹€à¸žà¸´à¹ˆà¸¡à¸‚à¸¶à¹‰à¸™à¸•à¹ˆà¸­à¸§à¸´à¸™à¸²à¸—à¸µ</span><br>
                <span>â€œà¸”à¹‰à¸§à¸¢à¸à¸²à¸£à¹€à¸›à¸´à¸”à¸•à¸±à¸§à¸£à¸°à¸šà¸šà¸Ÿà¸·à¹‰à¸™à¸Ÿà¸¹à¹€à¸¥à¸·à¸­à¸”à¹à¸¥à¸°à¸ªà¸à¸´à¸¥à¹à¸šà¸šà¹ƒà¸«à¸¡à¹ˆ
                  à¹€à¸£à¸²à¹„à¸”à¹‰à¹€à¸«à¹‡à¸™à¸§à¹ˆà¸²à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸šà¸²à¸‡à¸ªà¹ˆà¸§à¸™à¸ªà¸²à¸¡à¸²à¸£à¸–à¸­à¸¢à¸¹à¹ˆà¸£à¸­à¸”à¸™à¸­à¸à¸«à¸¡à¸­à¸à¹„à¸”à¹‰à¹€à¸›à¹‡à¸™à¹€à¸§à¸¥à¸²à¸™à¸²à¸™à¹‚à¸”à¸¢à¸à¸²à¸£à¹ƒà¸Šà¹‰à¸„à¸§à¸²à¸¡à¸ªà¸²à¸¡à¸²à¸£à¸–à¹ƒà¸™à¸à¸²à¸£à¸Ÿà¸·à¹‰à¸™à¸Ÿà¸¹à¹€à¸¥à¸·à¸­à¸”à¸«à¸¥à¸²à¸¢à¸­à¸¢à¹ˆà¸²à¸‡à¹ƒà¸™à¸„à¸£à¸±à¹‰à¸‡à¹€à¸”à¸µà¸¢à¸§
                  à¸ˆà¸¶à¸‡à¹„à¸”à¹‰à¸™à¸³à¸„à¸§à¸²à¸¡à¸ªà¸²à¸¡à¸²à¸£à¸–à¸šà¸²à¸‡à¸­à¸¢à¹ˆà¸²à¸‡à¸­à¸­à¸à¹€à¸žà¸·à¹ˆà¸­à¸«à¸¥à¸µà¸à¹€à¸¥à¸µà¹ˆà¸¢à¸‡à¸à¸²à¸£ BOOYAH à¹‚à¸”à¸¢à¸à¸²à¸£à¸‹à¹ˆà¸­à¸™à¸­à¸¢à¸¹à¹ˆà¹ƒà¸™à¸«à¸¡à¸­à¸â€</span><br>
                <br>
                <span style="color: #666666;">
                  à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸ˆà¸°à¹„à¸¡à¹ˆà¸ªà¸²à¸¡à¸²à¸£à¸–à¸£à¸±à¸šà¸à¸²à¸£à¸Ÿà¸·à¹‰à¸™à¸Ÿà¸¹à¹„à¸”à¹‰à¹€à¸à¸´à¸™ 50HP à¸•à¹ˆà¸­à¸§à¸´à¸™à¸²à¸—à¸µà¹„à¸”à¹‰à¸­à¸µà¸à¸•à¹ˆà¸­à¹„à¸›<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">à¸›à¸£à¸±à¸šà¸ªà¸¡à¸”à¸¸à¸¥à¸­à¸²à¸§à¸¸à¸˜</p>
          <ul>
            <li>
              <span>à¸­à¸²à¸§à¸¸à¸˜à¹ƒà¸«à¸¡à¹ˆ - AUG <br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">à¸žà¸šà¹„à¸”à¹‰à¹ƒà¸™à¹‚à¸«à¸¡à¸”à¸—à¸±à¹ˆà¸§à¹„à¸›à¹à¸¥à¸° 4v4 [Clash Squad]
                  à¸ˆà¸±à¸”à¸­à¸±à¸™à¸”à¸±à¸šà¹à¸¥à¸°à¸—à¸±à¹ˆà¸§à¹„à¸›</span><br>
                <span>â€œà¸œà¹ˆà¸²à¸™à¸¡à¸²à¸ªà¸±à¸à¸žà¸±à¸à¹à¸¥à¹‰à¸§à¸•à¸±à¹‰à¸‡à¹à¸•à¹ˆà¸—à¸µà¹ˆà¹€à¸£à¸²à¹„à¸”à¹‰à¹€à¸žà¸´à¹ˆà¸¡à¸›à¸·à¸™ AR à¹€à¸‚à¹‰à¸²à¹„à¸›à¹ƒà¸™à¹€à¸à¸¡ à¸›à¸·à¸™ AUG
                  à¹€à¸›à¹‡à¸™à¸›à¸·à¸™à¸—à¸µà¹ˆà¸¡à¸µà¸„à¸§à¸²à¸¡à¸„à¸¥à¹ˆà¸­à¸‡à¸•à¸±à¸§à¸ªà¸¹à¸‡à¸¡à¸²à¸à¹à¸¥à¸°à¸¡à¸µà¸Ÿà¸±à¸‡à¸à¹Œà¸Šà¸±à¹ˆà¸™à¸—à¸µà¹ˆà¸¢à¸·à¸”à¸«à¸¢à¸¸à¹ˆà¸™à¹ƒà¸™à¸à¸²à¸£à¹€à¸¥à¹ˆà¸™ à¸”à¹‰à¸§à¸¢à¸ªà¹‚à¸„à¸› 2x à¸—à¸µà¹ˆà¸•à¸´à¸”à¸¡à¸²à¸•à¸±à¹‰à¸‡à¹à¸•à¹ˆà¸•à¹‰à¸™
                  à¸—à¸³à¹ƒà¸«à¹‰à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸ªà¸²à¸¡à¸²à¸£à¸–à¹‚à¸ˆà¸¡à¸•à¸µà¸ˆà¸²à¸à¸£à¸°à¸¢à¸°à¸à¸¥à¸²à¸‡à¹„à¸”à¹‰à¸—à¸±à¸™à¸—à¸µ à¹à¸¥à¸°à¹à¸¡à¸à¸à¸²à¸‹à¸µà¸™à¹€à¸£à¸´à¹ˆà¸¡à¸•à¹‰à¸™à¸—à¸µà¹ˆ 35 à¸™à¸±à¸”
                  à¸—à¸³à¹ƒà¸«à¹‰à¸—à¸³à¸à¸²à¸£à¸›à¸°à¸—à¸°à¸£à¸°à¸¢à¸°à¹ƒà¸à¸¥à¹‰à¹„à¸”à¹‰à¸œà¸¥à¸­à¸¢à¹ˆà¸²à¸‡à¸¡à¸²à¸ à¸¥à¸­à¸‡à¹ƒà¸Šà¹‰à¸›à¸·à¸™ AUG
                  à¸„à¸¹à¹ˆà¸à¸±à¸šà¸›à¸·à¸™à¹‚à¸ˆà¸¡à¸•à¸µà¸£à¸°à¸¢à¸°à¹„à¸à¸¥à¹€à¸žà¸·à¹ˆà¸­à¸›à¸£à¸°à¸ªà¸´à¸—à¸˜à¸´à¸ à¸²à¸žà¸ªà¸¹à¸‡à¸ªà¸¸à¸”â€</span><br>
                <br>
                <span style="color: #666666;">
                  à¸„à¸§à¸²à¸¡à¹€à¸ªà¸µà¸¢à¸«à¸²à¸¢: 31 <br>
                  à¹à¸¡à¸à¸à¸²à¸‹à¸µà¸™: 35 <br>
                  à¸­à¸±à¸•à¸£à¸²à¸à¸²à¸£à¸¢à¸´à¸‡: 147 <br>
                  à¸¡à¸²à¸žà¸£à¹‰à¸­à¸¡à¸à¸±à¸šà¸ªà¹‚à¸„à¸› 2x à¸—à¸µà¹ˆà¸ªà¸²à¸¡à¸²à¸£à¸–à¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¹€à¸›à¹‡à¸™à¸ªà¹‚à¸„à¸›à¹„à¸”à¹‰ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>AK<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">à¸›à¸£à¸±à¸šà¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸ªà¸¡à¸”à¸¸à¸¥à¸­à¸²à¸§à¸¸à¸˜à¹ƒà¸™à¸—à¸¸à¸à¹‚à¸«à¸¡à¸”</span><br>
                <span>â€œà¹à¸¡à¹‰à¸§à¹ˆà¸²à¸›à¸·à¸™ AK à¸ˆà¸°à¹€à¸›à¹‡à¸™à¸«à¸™à¸¶à¹ˆà¸‡à¹ƒà¸™à¸›à¸·à¸™à¸—à¸µà¹ˆà¸®à¸´à¸•à¸—à¸µà¹ˆà¸ªà¸¸à¸” à¹à¸•à¹ˆà¸›à¸£à¸°à¸ªà¸´à¸—à¸˜à¸´à¸ à¸²à¸žà¸‚à¸­à¸‡à¸¡à¸±à¸™à¸à¸±à¸šà¸•à¹ˆà¸³à¸à¸§à¹ˆà¸² à¹€à¸¡à¸·à¹ˆà¸­à¹€à¸›à¸£à¸µà¸¢à¸šà¹€à¸—à¸µà¸¢à¸šà¸à¸±à¸šà¸›à¸·à¸™
                  AR à¸£à¸°à¸”à¸±à¸šà¸ªà¸¹à¸‡ à¹€à¸£à¸²à¸ˆà¸¶à¸‡à¹„à¸”à¹‰à¸›à¸£à¸±à¸šà¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¹ƒà¸«à¹‰à¸­à¸²à¸§à¸¸à¸˜à¸Šà¸™à¸´à¸”à¸™à¸µà¹‰à¸ªà¸¡à¸”à¸¸à¸¥à¸¡à¸²à¸à¸¢à¸´à¹ˆà¸‡à¸‚à¸¶à¹‰à¸™â€</span><br>
                <br>
                <span style="color: #666666;">
                  à¸„à¸§à¸²à¸¡à¹€à¸ªà¸µà¸¢à¸«à¸²à¸¢ : <del>37</del>->38 <br>
                  à¸„à¸§à¸²à¸¡à¹€à¸ªà¸µà¸¢à¸«à¸²à¸¢à¸•à¹ˆà¸³à¸ªà¸¸à¸” : <del>12</del>->14 <br>
                  à¸­à¸±à¸•à¸£à¸²à¸à¸²à¸£à¸¢à¸´à¸‡ : -3% <br>
                  à¸„à¸§à¸²à¸¡à¹à¸¡à¹ˆà¸™à¸¢à¸³ : <del>1</del>->2 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>FAMAS<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">à¸›à¸£à¸±à¸šà¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸ªà¸¡à¸”à¸¸à¸¥à¸­à¸²à¸§à¸¸à¸˜à¹ƒà¸™à¸—à¸¸à¸à¹‚à¸«à¸¡à¸”</span><br>
                <span>â€œà¸“ à¸›à¸±à¸ˆà¸ˆà¸¸à¸šà¸±à¸™ à¸›à¸·à¸™ FAMAS à¸™à¸±à¹‰à¸™à¹„à¸¡à¹ˆà¸„à¸¥à¹ˆà¸­à¸‡à¸•à¸±à¸§à¸žà¸­à¸—à¸µà¹ˆà¸ˆà¸°à¸­à¸¢à¸¹à¹ˆà¹ƒà¸™à¸£à¸°à¸”à¸±à¸šà¸—à¹‡à¸­à¸›à¸‚à¸­à¸‡à¸›à¸·à¸™à¸•à¸£à¸°à¸à¸¹à¸¥ AR
                  à¹€à¸£à¸²à¸ˆà¸¶à¸‡à¹„à¸”à¹‰à¹€à¸žà¸´à¹ˆà¸¡à¸„à¸§à¸²à¸¡à¹€à¸£à¹‡à¸§à¸à¸²à¸£à¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸—à¸µà¹ˆ
                  à¹€à¸žà¸·à¹ˆà¸­à¸—à¸µà¹ˆà¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸ˆà¸°à¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸¢à¹‰à¸²à¸¢à¸•à¸³à¹à¸«à¸™à¹ˆà¸‡à¸‡à¹ˆà¸²à¸¢à¸‚à¸¶à¹‰à¸™à¸£à¸°à¸«à¸§à¹ˆà¸²à¸‡à¸à¸²à¸£à¸¢à¸´à¸‡à¹ƒà¸™à¹‚à¸«à¸¡à¸”à¹€à¸šà¸´à¸£à¹Œà¸ªà¸— ( 3à¸™à¸±à¸”à¸•à¸´à¸” )â€</span><br>
                <br>
                <span style="color: #666666;">
                  à¸„à¸§à¸²à¸¡à¹€à¸£à¹‡à¸§à¸à¸²à¸£à¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸—à¸µà¹ˆà¹€à¸¡à¸·à¹ˆà¸­à¸¢à¸´à¸‡: +10%<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>M249<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">à¸›à¸£à¸±à¸šà¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸ªà¸¡à¸”à¸¸à¸¥à¸­à¸²à¸§à¸¸à¸˜à¹ƒà¸™à¸—à¸¸à¸à¹‚à¸«à¸¡à¸”</span><br>
                <span>â€œà¸«à¸²à¸à¸ˆà¸°à¸žà¸¹à¸”à¸–à¸¶à¸‡à¸›à¸·à¸™à¸ˆà¸²à¸à¹à¸­à¸£à¹Œà¸”à¸£à¸­à¸›à¸—à¸µà¹ˆà¸”à¹‰à¸­à¸¢à¸›à¸£à¸°à¸ªà¸´à¸—à¸˜à¸´à¸ à¸²à¸žà¸¡à¸²à¸à¸—à¸µà¹ˆà¸ªà¸¸à¸” à¸à¹‡à¸„à¸‡à¹„à¸¡à¹ˆà¸žà¹‰à¸™à¸›à¸·à¸™ M249
                  à¹€à¸£à¸²à¸ˆà¸¶à¸‡à¹„à¸”à¹‰à¸—à¸³à¸à¸²à¸£à¸­à¸±à¸›à¹€à¸à¸£à¸”à¸Šà¸¸à¸”à¹ƒà¸«à¸à¹ˆ à¸—à¸³à¹ƒà¸«à¹‰à¸¡à¸±à¸™à¸¡à¸µà¸›à¸£à¸°à¸ªà¸´à¸—à¸˜à¸´à¸ à¸²à¸žà¸—à¸µà¹ˆà¸”à¸µà¸¡à¸²à¸à¸¢à¸´à¹ˆà¸‡à¸‚à¸¶à¹‰à¸™â€</span><br>
                <br>
                <span style="color: #666666;">
                  à¸„à¸§à¸²à¸¡à¹à¸¡à¹ˆà¸™à¸¢à¸³: 4->12 <br>
                  à¸„à¸§à¸²à¸¡à¹€à¸ªà¸µà¸¢à¸«à¸²à¸¢à¸•à¹ˆà¸³à¸ªà¸¸à¸”: <del>15</del>->21 <br>
                  à¹à¸£à¸‡à¸–à¸µà¸šà¸ªà¸¹à¸‡à¸ªà¸¸à¸”: -18% <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>SPAS12<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">à¸›à¸£à¸±à¸šà¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸ªà¸¡à¸”à¸¸à¸¥à¸­à¸²à¸§à¸¸à¸˜à¹ƒà¸™à¸—à¸¸à¸à¹‚à¸«à¸¡à¸”</span><br>
                <span>â€œà¹à¸¡à¹‰à¸§à¹ˆà¸²à¸›à¸·à¸™ SPAS à¸ˆà¸°à¸ªà¸£à¹‰à¸²à¸‡à¸„à¸§à¸²à¸¡à¹€à¸ªà¸µà¸¢à¸«à¸²à¸¢à¹ƒà¸™à¸£à¸°à¸¢à¸°à¸›à¸£à¸°à¸Šà¸´à¸”à¹„à¸”à¹‰à¸ªà¸¹à¸‡à¸¡à¸²à¸
                  à¹à¸•à¹ˆà¸”à¹‰à¸§à¸¢à¸„à¸§à¸²à¸¡à¸—à¸µà¹ˆà¸¡à¸±à¸™à¸ªà¸£à¹‰à¸²à¸‡à¸„à¸§à¸²à¸¡à¹€à¸ªà¸µà¸¢à¸«à¸²à¸¢à¹„à¸”à¹‰à¹ƒà¸™à¸£à¸°à¸¢à¸°à¹ƒà¸à¸¥à¹‰ à¹† à¹€à¸—à¹ˆà¸²à¸™à¸±à¹‰à¸™à¸¡à¸±à¸™à¸ˆà¸¶à¸‡à¸¡à¸µà¸›à¸£à¸°à¸ªà¸´à¸—à¸˜à¸´à¸ à¸²à¸žà¸—à¸µà¹ˆà¹à¸¢à¹ˆà¸à¸§à¹ˆà¸²à¸›à¸·à¸™ M1887 à¹à¸¥à¸°
                  M1014 à¹ƒà¸™à¹à¸žà¸—à¸Šà¹Œà¸™à¸µà¹‰à¹€à¸£à¸²à¸ˆà¸¶à¸‡à¹„à¸”à¹‰à¹€à¸žà¸´à¹ˆà¸¡à¸›à¸£à¸°à¸ªà¸´à¸—à¸˜à¸´à¸ à¸²à¸žà¸‚à¸­à¸‡à¸¡à¸±à¸™à¸‚à¸¶à¹‰à¸™à¹ƒà¸™à¸£à¸°à¸”à¸±à¸šà¸«à¸™à¸¶à¹ˆà¸‡à¹€à¸žà¸·à¹ˆà¸­à¹ƒà¸«à¹‰à¸¡à¸±à¸™à¹ƒà¸à¸¥à¹‰à¹€à¸„à¸µà¸¢à¸‡à¸à¸±à¸šà¸›à¸·à¸™à¸•à¸£à¸°à¸à¸¹à¸¥ SG
                  à¸­à¸·à¹ˆà¸™ à¹† à¹„à¸”à¹‰à¸¡à¸²à¸à¸‚à¸¶à¹‰à¸™â€</span><br>
                <br>
                <span style="color: #666666;">
                  à¸„à¸§à¸²à¸¡à¹€à¸ªà¸µà¸¢à¸«à¸²à¸¢à¸•à¹ˆà¸³à¸ªà¸¸à¸”: <del>6</del>->7 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>XM8<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">à¸›à¸£à¸±à¸šà¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸ªà¸¡à¸”à¸¸à¸¥à¸­à¸²à¸§à¸¸à¸˜à¹ƒà¸™à¸—à¸¸à¸à¹‚à¸«à¸¡à¸”</span><br>
                <span>â€œà¸›à¸·à¸™ XM8 à¹€à¸›à¹‡à¸™à¸›à¸·à¸™ AR à¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆà¹ƒà¸™à¸£à¸°à¸”à¸±à¸šà¸•à¹‰à¸™ à¹† à¸¡à¸²à¸ªà¸±à¸à¸žà¸±à¸à¸«à¸™à¸¶à¹ˆà¸‡à¹à¸¥à¹‰à¸§ à¸«à¸™à¸¶à¹ˆà¸‡à¹ƒà¸™à¹€à¸«à¸•à¸¸à¸œà¸¥à¸™à¸±à¹‰à¸™à¸à¹‡à¸„à¸·à¸­
                  à¸¡à¸µà¸„à¸§à¸²à¸¡à¸¢à¸·à¸”à¸«à¸¢à¸¸à¸”à¹à¸¥à¸°à¸¡à¸µà¸„à¸§à¸²à¸¡à¸‡à¹ˆà¸²à¸¢à¹ƒà¸™à¸à¸²à¸£à¹ƒà¸Šà¹‰
                  à¹à¸¥à¸°à¹ƒà¸™à¹à¸žà¸—à¸Šà¹Œà¸™à¸µà¹‰à¹€à¸£à¸²à¹„à¸”à¹‰à¸›à¸£à¸±à¸šà¹à¸•à¹ˆà¸‡à¹ƒà¸«à¹‰à¸›à¸·à¸™à¸ªà¸¡à¸”à¸¸à¸¥à¹à¸¥à¸°à¹€à¸«à¸¡à¸²à¸°à¸ªà¸¡à¹ƒà¸™à¸à¸²à¸£à¹€à¸¥à¹ˆà¸™à¸¢à¸´à¹ˆà¸‡à¸‚à¸¶à¹‰à¸™â€</span><br>
                <br>
                <span style="color: #666666;">
                  à¸„à¸§à¸²à¸¡à¹à¸¡à¹ˆà¸™à¸¢à¸³: <del>4</del>->3 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">à¹‚à¸«à¸¡à¸”à¹€à¸à¸¡</p>
          <ul>
            <li>
              <span>à¸à¸²à¸£à¸•à¸±à¹‰à¸‡à¸„à¹ˆà¸²à¸­à¸²à¸§à¸¸à¸˜à¸¥à¹ˆà¸§à¸‡à¸«à¸™à¹‰à¸²<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">à¹€à¸›à¸´à¸”à¹ƒà¸«à¹‰à¹€à¸¥à¹ˆà¸™à¹ƒà¸™à¹‚à¸«à¸¡à¸”à¸•à¸²à¸¢à¹€à¸à¸´à¸”à¸£à¸°à¹€à¸šà¸´à¸”à¸„à¸§à¸²à¸¡à¸¡à¸±à¸™à¸ªà¹Œ à¹‚à¸«à¸¡à¸”à¸à¸£à¸°à¸Šà¸²à¸à¹à¸—à¹‡à¸
                  à¹à¸¥à¸°à¹‚à¸«à¸¡à¸”à¸„à¸™à¸„à¸¥à¸±à¹ˆà¸‡</span><br>
                <span>â€œà¹€à¸£à¸²à¹„à¸”à¹‰à¸£à¸±à¸šà¹€à¸ªà¸µà¸¢à¸‡à¸•à¸­à¸šà¸£à¸±à¸šà¸ˆà¸²à¸à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¹€à¸à¸µà¹ˆà¸¢à¸§à¸à¸±à¸šà¸£à¸°à¸šà¸šà¸à¸²à¸£à¸•à¸±à¹‰à¸‡à¸„à¹ˆà¸²à¸­à¸²à¸§à¸¸à¸˜à¸¥à¹ˆà¸§à¸‡à¸«à¸™à¹‰à¸²à¸§à¹ˆà¸²à¸¡à¸µà¹ƒà¸«à¹‰à¹€à¸¥à¸·à¸­à¸à¹€à¸žà¸µà¸¢à¸‡ 4 à¹€à¸‹à¸•
                  à¸™à¸±à¹‰à¸™à¸¡à¸±à¸™à¸™à¹‰à¸­à¸¢à¹€à¸à¸´à¸™à¹„à¸›
                  à¹€à¸£à¸²à¸ˆà¸¶à¸‡à¸‚à¸­à¹à¸™à¸°à¸™à¸³à¸£à¸°à¸šà¸šà¸à¸²à¸£à¸•à¸±à¹‰à¸‡à¸„à¹ˆà¸²à¸­à¸²à¸§à¸¸à¸˜à¸¥à¹ˆà¸§à¸‡à¸«à¸™à¹‰à¸²à¹à¸šà¸šà¹ƒà¸«à¸¡à¹ˆà¸—à¸µà¹ˆà¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸ˆà¸°à¸ªà¸²à¸¡à¸²à¸£à¸–à¹€à¸¥à¸·à¸­à¸à¹à¸¥à¸°à¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸­à¸²à¸§à¸¸à¸˜à¹„à¸”à¹‰à¸«à¸¥à¸±à¸‡à¸ˆà¸²à¸à¹€à¸à¸´à¸”à¹ƒà¸«à¸¡à¹ˆà¸—à¸¸à¸à¸„à¸£à¸±à¹‰à¸‡â€</span><br>
                <br>
                <span style="color: #666666;">
                  à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸ªà¸²à¸¡à¸²à¸£à¸–à¸‹à¸·à¹‰à¸­à¸­à¸²à¸§à¸¸à¸˜à¹à¸¥à¸°à¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡à¸¡à¸·à¸­à¸”à¹‰à¸§à¸¢à¸—à¸­à¸‡à¸—à¸µà¹ˆà¹„à¸”à¹‰à¸£à¸±à¸šà¹ƒà¸™à¹à¸•à¹ˆà¸¥à¸°à¸£à¸­à¸š<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>à¹‚à¸«à¸¡à¸”à¸«à¸±à¸§à¹‚à¸•<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">à¸›à¸£à¸±à¸šà¸à¸²à¸£à¹‚à¸”à¸”à¸£à¹ˆà¸¡à¹à¸¥à¸°à¸£à¸°à¸šà¸šà¸à¸²à¸£à¹€à¸à¸´à¸”à¹ƒà¸«à¸¡à¹ˆ</span><br>
                <span>â€œà¹€à¸£à¸²à¹„à¸”à¹‰à¸—à¸³à¸à¸²à¸£à¹€à¸žà¸´à¹ˆà¸¡à¸£à¸°à¸šà¸šà¹ƒà¸«à¸¡à¹ˆà¹€à¸‚à¹‰à¸²à¹„à¸›à¹ƒà¸™à¹‚à¸«à¸¡à¸”à¸«à¸±à¸§à¹‚à¸•
                  à¹€à¸žà¸·à¹ˆà¸­à¸—à¸³à¹ƒà¸«à¹‰à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸ªà¸²à¸¡à¸²à¸£à¸–à¹€à¸à¸´à¸”à¹ƒà¸«à¸¡à¹ˆà¹à¸¥à¸°à¹€à¸‚à¹‰à¸²à¸£à¹ˆà¸§à¸¡à¹€à¸à¸¡à¹„à¸”à¹‰à¹€à¸£à¹‡à¸§à¸à¸§à¹ˆà¸²à¹€à¸”à¸´à¸¡â€</span><br>
                <br>
                <span style="color: #666666;">
                  à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸ªà¸²à¸¡à¸²à¸£à¸–à¹€à¸¥à¸·à¸­à¸à¹„à¸”à¹‰à¸§à¹ˆà¸²à¸•à¹‰à¸­à¸‡à¸à¸²à¸£à¸¢à¸­à¸¡à¹à¸žà¹‰à¸«à¸£à¸·à¸­à¹€à¸à¸´à¸”à¹ƒà¸«à¸¡à¹ˆà¹€à¸žà¸·à¹ˆà¸­à¹€à¸¥à¹ˆà¸™à¸•à¹ˆà¸­à¸«à¸¥à¸±à¸‡à¸ˆà¸²à¸à¸¥à¹‰à¸¡ <br>
                  à¸¥à¸”à¸£à¸°à¸”à¸±à¸šà¸„à¸§à¸²à¸¡à¸ªà¸¹à¸‡à¹ƒà¸™à¸à¸²à¸£à¹‚à¸”à¸”à¸£à¹ˆà¸¡ à¹€à¸žà¸·à¹ˆà¸­à¹ƒà¸«à¹‰à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸ªà¸²à¸¡à¸²à¸£à¸–à¸à¸¥à¸±à¸šà¹€à¸‚à¹‰à¸²à¹€à¸à¸¡à¹„à¸”à¹‰à¹€à¸£à¹‡à¸§à¸‚à¸¶à¹‰à¸™ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>à¹‚à¸«à¸¡à¸”à¸­à¸­à¸à¸­à¸²à¸§à¸¸à¸˜ (à¸—à¸µà¸¡ 4 à¸„à¸™)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">à¸›à¸£à¸±à¸šà¸£à¸°à¸šà¸šà¸­à¸²à¸§à¸¸à¸˜ à¹à¸¥à¸°à¸ªà¸²à¸¡à¸²à¸£à¸–à¹€à¸¥à¹ˆà¸™à¹ƒà¸™à¹‚à¸«à¸¡à¸”à¸—à¸µà¸¡à¹„à¸”à¹‰à¹à¸¥à¹‰à¸§
                </span><br>
                <span>â€œà¸«à¸™à¸¶à¹ˆà¸‡à¹ƒà¸™à¸›à¸±à¸à¸«à¸²à¹ƒà¸«à¸à¹ˆà¸—à¸µà¹ˆà¹€à¸£à¸²à¸žà¸šà¹ƒà¸™à¹‚à¸«à¸¡à¸”à¸­à¸­à¸à¸­à¸²à¸§à¸¸à¸˜à¹€à¸”à¸´à¸¡à¸„à¸·à¸­ à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸•à¹‰à¸­à¸‡à¸à¸²à¸£à¹€à¸¥à¹ˆà¸™à¹‚à¸«à¸¡à¸”à¸™à¸µà¹‰à¸à¸±à¸šà¹€à¸žà¸·à¹ˆà¸­à¸™
                  à¹à¸¡à¹‰à¸§à¹ˆà¸²à¹€à¸žà¸·à¹ˆà¸­à¸™à¸ˆà¸°à¹€à¸›à¹‡à¸™à¸—à¸µà¸¡à¸¨à¸±à¸•à¸£à¸¹à¸à¹‡à¸•à¸²à¸¡ à¹€à¸£à¸²à¸ˆà¸¶à¸‡à¹„à¸”à¹‰à¹€à¸žà¸´à¹ˆà¸¡à¹‚à¸«à¸¡à¸”à¸­à¸­à¸à¸­à¸²à¸§à¸¸à¸˜ à¹€à¸‚à¹‰à¸²à¹„à¸›à¹ƒà¸™à¹‚à¸«à¸¡à¸”à¹à¸šà¸šà¸—à¸µà¸¡ 4 à¸„à¸™
                  à¹€à¸žà¸·à¹ˆà¸­à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸ˆà¸°à¹„à¸”à¹‰à¸£à¸§à¸¡à¸—à¸µà¸¡à¸à¸±à¸šà¹€à¸žà¸·à¹ˆà¸­à¸™à¹à¸¥à¸°à¹€à¸¥à¹ˆà¸™à¹‚à¸«à¸¡à¸”à¸­à¸­à¸à¸­à¸²à¸§à¸¸à¸˜à¹„à¸›à¸”à¹‰à¸§à¸¢à¸à¸±à¸™â€</span><br>
                <br>
                <span style="color: #666666;">
                  à¹‚à¸«à¸¡à¸”à¸£à¸­à¸‡à¸£à¸±à¸šà¹à¸šà¸š à¸—à¸µà¸¡ 4 à¸„à¸™ à¹à¸¥à¹‰à¸§ <br>
                  à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸ªà¸²à¸¡à¸²à¸£à¸–à¹€à¸¥à¸·à¸­à¸à¸à¸”à¸‚à¹‰à¸²à¸¡à¸­à¸²à¸§à¸¸à¸˜à¹„à¸”à¹‰ à¸–à¹‰à¸²à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¹à¸žà¹‰à¸•à¹ˆà¸­à¹€à¸™à¸·à¹ˆà¸­à¸‡à¸à¸±à¸™ 3 à¸„à¸£à¸±à¹‰à¸‡ à¸«à¸£à¸·à¸­ <br>
                  à¸­à¸¢à¸¹à¹ˆà¹ƒà¸™à¸ªà¸–à¸²à¸™à¸°à¹€à¸ªà¸µà¸¢à¹€à¸›à¸£à¸µà¸¢à¸šà¸à¹ˆà¸²à¸¢à¸•à¸£à¸‡à¸‚à¹‰à¸²à¸¡à¸­à¸¢à¹ˆà¸²à¸‡à¸¡à¸²à¸ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">à¸•à¸±à¸§à¸¥à¸°à¸„à¸£à¹à¸¥à¸°à¸ªà¸±à¸•à¸§à¹Œà¹€à¸¥à¸µà¹‰à¸¢à¸‡</p>
          <ul>
            <li>
              <span>à¸•à¸±à¸§à¸¥à¸°à¸„à¸£à¹ƒà¸«à¸¡à¹ˆ - à¸¥à¸¹à¸à¸¸à¹€à¸­à¸•à¹‰à¸²<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">à¹€à¸ˆà¸­à¹„à¸”à¹‰à¹à¸¥à¹‰à¸§à¹ƒà¸™à¹€à¸à¸¡ Free Fire</span><br>
                <span>â€œà¸žà¸§à¸à¸™à¸²à¸¢à¸žà¸£à¹‰à¸­à¸¡à¸—à¸µà¹ˆà¸ˆà¸°à¸—à¸³à¹à¸®à¸—à¸—à¸£à¸´à¸„à¸à¸±à¸™à¸«à¸£à¸·à¸­à¸¢à¸±à¸‡..?â€</span><br>
                <br>
                <span style="color: #666666;">
                  à¸—à¸±à¸à¸©à¸°à¸•à¸±à¸§à¸¥à¸°à¸„à¸£ <br>
                  à¹à¸®à¸—à¸—à¸£à¸´à¸„: à¸—à¸¸à¸à¸à¸²à¸£à¸ªà¸±à¸‡à¸«à¸²à¸£à¸ˆà¸°à¹€à¸žà¸´à¹ˆà¸¡à¸„à¹ˆà¸² HP à¸ªà¸¹à¸‡à¸ªà¸¸à¸”à¸•à¸²à¸¡à¸¥à¸³à¸”à¸±à¸š {8/10/12/14/16/18} à¸ªà¸¹à¸‡à¸ªà¸¸à¸” 35 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>à¸ªà¸±à¸•à¸§à¹Œà¹€à¸¥à¸µà¹‰à¸¢à¸‡à¹ƒà¸«à¸¡à¹ˆ - à¸žà¸±à¹Šà¸‡à¸„à¹Œà¸à¸§à¸´à¹‰à¸™<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">à¹€à¸£à¹‡à¸§ à¹† à¸™à¸µà¹‰!</span><br>
                <span>â€œà¹€à¸šà¸·à¹ˆà¸­à¸à¸±à¸™à¸«à¸£à¸·à¸­à¹„à¸¡à¹ˆ à¸«à¸²à¸¢à¸±à¸‡à¹„à¸‡à¸à¹‡à¹„à¸¡à¹ˆà¹€à¸ˆà¸­à¹„à¸­à¸‹à¹Œà¸§à¸­à¸¥à¸¥à¹Œ à¸„à¸¸à¸“à¸žà¸±à¹Šà¸‡à¸„à¹Œà¸à¸§à¸´à¹‰à¸™à¸Šà¹ˆà¸§à¸¢à¹„à¸”à¹‰!
                  à¸£à¸±à¸šà¸£à¸­à¸‡à¸¡à¸µà¹„à¸­à¸‹à¹Œà¸§à¸­à¸¥à¸¥à¹Œà¸•à¸´à¸”à¸à¸£à¸°à¹€à¸›à¹‹à¸²à¹€à¸­à¸²à¹„à¸§à¹‰à¹ƒà¸«à¹‰à¹ƒà¸Šà¹‰à¹„à¸”à¹‰à¸•à¸¥à¸­à¸”à¹€à¸à¸¡ â€</span><br>
                <br>
                <span style="color: #666666;">
                  à¸—à¸±à¸à¸©à¸°à¸ªà¸±à¸•à¸§à¹Œà¹€à¸¥à¸µà¹‰à¸¢à¸‡<br>
                  à¸Ÿà¸±à¸à¹„à¸‚à¹ˆ: à¹€à¸¡à¸·à¹ˆà¸­à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸¡à¸µà¹„à¸­à¸‹à¹Œà¸§à¸­à¸¥à¸™à¹‰à¸­à¸¢à¸à¸§à¹ˆà¸² 1/1/2 à¸žà¸±à¹Šà¸‡à¸„à¹Œà¸à¸§à¸´à¹‰à¸™à¸ˆà¸°à¸œà¸¥à¸´à¸•à¹„à¸­à¸‹à¹Œà¸§à¸­à¸¥à¸­à¸­à¸à¸¡à¸² 1 à¸¥à¸¹à¸ à¹ƒà¸™à¸—à¸¸à¸ à¹† 120/100/80
                  à¸§à¸´à¸™à¸²à¸—à¸µ<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>à¸®à¸²à¸¢à¸²à¹‚à¸•à¸° â€œà¸œà¸¹à¹‰à¸›à¸¥à¸¸à¸à¸£à¸°à¸”à¸¡â€- à¹€à¸£à¹‡à¸§à¹†à¸™à¸µà¹‰!<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">à¹€à¸£à¹‡à¸§à¹†à¸™à¸µà¹‰!</span><br>
                <span>â€œà¸œà¸¹à¹‰à¸–à¸¹à¸à¸›à¸¥à¸¸à¸à¸žà¸¥à¸±à¸‡à¸„à¸™à¸—à¸µà¹ˆ 2</span><br>
                <span>à¸®à¸²à¸¢à¸²à¹‚à¸•à¸° â€œà¸œà¸¹à¹‰à¸›à¸¥à¸¸à¸à¸£à¸°à¸”à¸¡â€ à¹ƒà¸™à¸—à¸µà¹ˆà¸ªà¸¸à¸”à¹€à¸‚à¸²à¸à¹‡à¸¡à¸²!</span><br>
                <span>à¹€à¸‚à¹‰à¸²à¸£à¹ˆà¸§à¸¡à¸‡à¸²à¸™à¸‰à¸¥à¸­à¸‡à¸„à¸£à¸šà¸£à¸­à¸š 3 à¸›à¸µ à¹ƒà¸™à¸§à¸±à¸™à¸—à¸µà¹ˆ 22 à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡à¸™à¸µà¹‰ à¹€à¸žà¸·à¹ˆà¸­à¸£à¸±à¸šà¹€à¸‚à¸²à¹„à¸›à¸Ÿà¸£à¸µ à¹†â€ </span><br><br>
                <span style="color: #666666;">
                  à¸—à¸±à¸à¸©à¸°à¸•à¸±à¸§à¸¥à¸°à¸„à¸£: Art of Blades  <br>
                  à¸ˆà¸°à¸¡à¸µà¸§à¸‡à¹à¸«à¸§à¸™à¸‚à¸¶à¹‰à¸™à¸£à¸­à¸šà¸•à¸±à¸§ à¸Šà¹ˆà¸§à¸¢à¸¥à¸”à¸”à¸²à¹€à¸¡à¸ˆà¹€à¸§à¸¥à¸²à¸–à¸¹à¸à¸¢à¸´à¸‡à¸ˆà¸²à¸à¸”à¹‰à¸²à¸™à¸«à¸™à¹‰à¸² {20/25/30/35/40}% à¹€à¸›à¹‡à¸™à¹€à¸§à¸¥à¸² 3 à¸§à¸´à¸™à¸²à¸—à¸µ à¸„à¸¹à¸¥à¸”à¸²à¸§à¸™à¹Œ 50 à¸§à¸´à¸™à¸²à¸—à¸µ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">à¸£à¸°à¸šà¸šà¹ƒà¸«à¸¡à¹ˆ</p>
          <ul>
            <li>
              <span>à¸£à¸±à¸à¸©à¸²à¸à¸²à¸£à¸«à¸±à¸§à¸«à¸™à¹‰à¸²à¹à¸„à¸¥à¸™<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">à¹€à¸žà¸´à¹ˆà¸¡à¸£à¸°à¸šà¸šà¸à¸²à¸£à¸ˆà¸±à¸”à¸à¸²à¸£à¹à¸šà¸šà¹ƒà¸«à¸¡à¹ˆ</span><br>
                <span>â€œà¸ˆà¸²à¸à¸­à¸±à¸›à¹€à¸”à¸•à¸¥à¹ˆà¸²à¸ªà¸¸à¸” à¹€à¸£à¸²à¹„à¸”à¹‰à¸£à¸±à¸šà¸„à¸³à¸Šà¸¡à¸¡à¸²à¸à¸¡à¸²à¸¢à¸ˆà¸²à¸à¸à¸²à¸£à¹€à¸žà¸´à¹ˆà¸¡à¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡à¸¡à¸·à¸­à¸à¸²à¸£à¸ˆà¸±à¸”à¸à¸²à¸£à¹à¸„à¸¥à¸™à¹€à¸‚à¹‰à¸²à¸¡à¸² à¹€à¸£à¸²à¹„à¸”à¹‰à¸£à¸±à¸šà¹€à¸ªà¸µà¸¢à¸‡à¸•à¸´à¸Šà¸¡à¸—à¸µà¹ˆà¹€à¸ˆà¹‡à¸šà¸›à¸§à¸”à¸—à¸µà¹ˆà¸ªà¸¸à¸”à¸ˆà¸²à¸à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™ à¸„à¸·à¸­à¹€à¸¡à¸·à¹ˆà¸­à¸«à¸±à¸§à¸«à¸™à¹‰à¸²à¹à¸„à¸¥à¸™à¹€à¸¥à¸´à¸à¹€à¸¥à¹ˆà¸™à¹€à¸à¸¡à¹„à¸›à¹à¸¥à¹‰à¸§à¹à¸•à¹ˆà¸¢à¸±à¸‡à¸¡à¸µà¸ªà¸–à¸²à¸™à¸°à¸«à¸±à¸§à¹à¸„à¸¥à¸™à¸­à¸¢à¸¹à¹ˆ à¹€à¸£à¸²à¸ˆà¸¶à¸‡à¸ˆà¸°à¹€à¸žà¸´à¹ˆà¸¡à¸£à¸°à¸šà¸šà¹€à¸žà¸·à¹ˆà¸­à¸—à¸µà¹ˆà¸„à¸™à¸­à¸·à¹ˆà¸™à¹ƒà¸™à¹à¸„à¸¥à¸™à¸ˆà¸°à¹„à¸”à¹‰à¹‚à¸«à¸§à¸•à¹€à¸¥à¸·à¸­à¸à¸«à¸±à¸§à¸«à¸™à¹‰à¸²à¹à¸„à¸¥à¸™à¸Šà¸±à¹ˆà¸§à¸„à¸£à¸²à¸§ à¹€à¸žà¸·à¹ˆà¸­à¹ƒà¸«à¹‰à¹à¸„à¸¥à¸™à¸¢à¸±à¸‡à¸„à¸‡à¹à¸­à¸à¸—à¸µà¸Ÿà¸­à¸¢à¸¹à¹ˆà¹à¸¡à¹‰à¸§à¹ˆà¸²à¸ˆà¸°à¹„à¸¡à¹ˆà¸¡à¸µà¸«à¸±à¸§à¸«à¸™à¹‰à¸²à¹à¸„à¸¥à¸™à¸ˆà¸£à¸´à¸‡ à¹† à¸à¹‡à¸•à¸²à¸¡</span><br>
                <br>
                <span style="color: #666666;">
                  à¹€à¸¡à¸·à¹ˆà¸­à¸«à¸±à¸§à¸«à¸™à¹‰à¸²à¹à¸„à¸¥à¸™à¹„à¸¡à¹ˆà¹à¸­à¸à¸—à¸µà¸Ÿà¹€à¸›à¹‡à¸™à¹€à¸§à¸¥à¸²à¸¡à¸²à¸à¸à¸§à¹ˆà¸² 30 à¸§à¸±à¸™ à¸ªà¸¡à¸²à¸Šà¸´à¸à¹à¸„à¸¥à¸™à¸ˆà¸°à¹„à¸”à¹‰à¸£à¸±à¸šà¸‚à¹‰à¸­à¸„à¸§à¸²à¸¡à¹€à¸žà¸·à¹ˆà¸­à¹‚à¸«à¸§à¸•à¹€à¸¥à¸·à¸­à¸à¸œà¸¹à¹‰à¸£à¸±à¸à¸©à¸²à¸à¸²à¸£à¸«à¸±à¸§à¸«à¸™à¹‰à¸²à¹à¸„à¸¥à¸™ <br>
                  à¹€à¸¡à¸·à¹ˆà¸­à¹‚à¸«à¸§à¸•à¹à¸¥à¹‰à¸§ à¸œà¸¹à¹‰à¸£à¸±à¸à¸©à¸²à¸à¸²à¸£à¸«à¸±à¸§à¸«à¸™à¹‰à¸²à¹à¸„à¸¥à¸™à¸ˆà¸°à¸¡à¸µà¸ªà¸´à¸—à¸˜à¸´à¹Œà¹ƒà¸™à¸à¸²à¸£à¸ˆà¸±à¸”à¸à¸²à¸£à¹à¸„à¸¥à¸™à¸—à¸¸à¸à¸­à¸¢à¹ˆà¸²à¸‡à¸ˆà¸™à¸à¸§à¹ˆà¸²à¸«à¸±à¸§à¸«à¸™à¹‰à¸²à¹à¸„à¸¥à¸™à¸•à¸±à¸§à¸ˆà¸£à¸´à¸‡à¸ˆà¸°à¸à¸¥à¸±à¸šà¸¡à¸² à¸«à¸£à¸·à¸­à¸£à¸±à¸à¸©à¸²à¸à¸²à¸£à¸«à¸±à¸§à¸«à¸™à¹‰à¸²à¹à¸„à¸¥à¸™à¹„à¸¡à¹ˆà¹à¸­à¸à¸—à¸µà¸Ÿà¹€à¸›à¹‡à¸™à¹€à¸§à¸¥à¸²à¸¡à¸²à¸à¸à¸§à¹ˆà¸² 7 à¸§à¸±à¸™ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>à¸­à¸±à¸›à¹€à¸”à¸•à¸­à¸·à¹ˆà¸™à¹†<br></span>
              <span class="m-news-detail-s">
                &nbsp;&nbsp;&nbsp;- à¸›à¸£à¸±à¸šà¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸«à¸™à¹‰à¸²à¸ªà¸£à¸¸à¸›à¸œà¸¥à¸„à¸°à¹à¸™à¸™à¹ƒà¸«à¸¡à¹ˆ à¸ªà¸³à¸«à¸£à¸±à¸šà¹‚à¸«à¸¡à¸” 4v4 à¸«à¸£à¸·à¸­ Clash Squad à¹à¸¥à¸° à¹‚à¸«à¸¡à¸”à¸­à¸­à¸à¸­à¸²à¸§à¸¸à¸˜ <br>
                &nbsp;&nbsp;&nbsp;- à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸ªà¸²à¸¡à¸²à¸£à¸–à¸ªà¹ˆà¸‡à¸„à¸³à¹€à¸Šà¸´à¸à¹€à¸žà¸·à¹ˆà¸­à¸Šà¸§à¸™à¹€à¸žà¸·à¹ˆà¸­à¸™à¹ƒà¸«à¹‰à¹€à¸‚à¹‰à¸²à¸£à¹ˆà¸§à¸¡à¸›à¸²à¸£à¹Œà¸•à¸µà¹‰ <br>
                &nbsp;&nbsp;&nbsp;- à¸›à¸£à¸±à¸šà¸›à¸¸à¹ˆà¸¡ HUD à¸ªà¸³à¸«à¸£à¸±à¸šà¸­à¸²à¸§à¸¸à¸˜à¹ƒà¸™à¹€à¸à¸¡ <br>
                &nbsp;&nbsp;&nbsp;- à¹€à¸›à¹‰à¸²à¹€à¸¥à¹‡à¸‡à¸„à¸§à¸²à¸¡à¸£à¹‰à¸­à¸™à¸ªà¸²à¸¡à¸²à¸£à¸–à¸¡à¸­à¸‡à¸—à¸°à¸¥à¸¸à¸œà¹ˆà¸²à¸™à¸£à¸°à¹€à¸šà¸´à¸”à¸„à¸§à¸±à¸™à¹„à¸”à¹‰ <br>
                &nbsp;&nbsp;&nbsp;- à¸›à¸£à¸±à¸šà¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸«à¸™à¹‰à¸²à¸ˆà¸­à¸à¸²à¸£à¹€à¸Šà¸´à¸à¸Šà¹ˆà¸§à¸¢à¹€à¸žà¸·à¹ˆà¸­à¸™à¹€à¸‚à¹‰à¸²à¸—à¸µà¸¡  <br>
                &nbsp;&nbsp;&nbsp;- à¸­à¸±à¸›à¹€à¸”à¸•à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¹ƒà¸«à¸¡à¹ˆà¹ƒà¸™à¸„à¸¹à¹ˆà¸¡à¸·à¸­à¹€à¸­à¸²à¸•à¸±à¸§à¸£à¸­à¸” <br>
                &nbsp;&nbsp;&nbsp;- à¸›à¸£à¸±à¸šà¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸«à¸™à¹‰à¸²à¸ˆà¸­à¸§à¸µà¸”à¸µà¹‚à¸­à¹à¸™à¸°à¸™à¸³à¹ƒà¸™à¹‚à¸«à¸¡à¸”à¸•à¹ˆà¸­à¸ªà¸¹à¹‰à¸£à¸°à¸¢à¸°à¸›à¸£à¸°à¸Šà¸´à¸” <br>
                &nbsp;&nbsp;&nbsp;- à¸›à¸£à¸±à¸šà¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸§à¸µà¸”à¸µà¹‚à¸­à¸ªà¸³à¸«à¸£à¸±à¸šà¹‚à¸«à¸¡à¸”à¸•à¸²à¸¢à¹€à¸à¸´à¸”à¸£à¸°à¹€à¸šà¸´à¸”à¸„à¸§à¸²à¸¡à¸¡à¸±à¸™à¸ªà¹Œ <br>
                &nbsp;&nbsp;&nbsp;- à¸›à¸£à¸±à¸šà¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸—à¹ˆà¸²à¸—à¸²à¸‡à¸à¸²à¸£à¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¹„à¸«à¸§à¸‚à¸“à¸°à¹‚à¸”à¸”à¸£à¹ˆà¸¡ <br>
                &nbsp;&nbsp;&nbsp;- à¹à¸œà¸™à¸—à¸µà¹ˆà¸—à¸°à¹€à¸¥à¸—à¸£à¸²à¸¢à¹€à¸žà¸´à¹ˆà¸¡à¹à¸¥à¹‰à¸§à¹ƒà¸™à¹‚à¸«à¸¡à¸”à¸—à¸±à¹ˆà¸§à¹„à¸› <br>
                &nbsp;&nbsp;&nbsp;- à¹à¸à¹‰à¹„à¸‚à¸šà¸±à¸„à¹€à¸¡à¸·à¹ˆà¸­à¸œà¸¹à¹‰à¹€à¸¥à¹ˆà¸™à¸•à¹‰à¸­à¸‡à¸à¸²à¸£à¸­à¸­à¸à¸ˆà¸²à¸à¸žà¸·à¹‰à¸™à¸—à¸µà¹ˆà¸à¹ˆà¸­à¸™à¸—à¸µà¹ˆà¸ˆà¸°à¹€à¸£à¸´à¹ˆà¸¡à¹à¸¡à¸—à¸Šà¹Œ  <br>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
        </div>
      </div>
    `,
    pt: `
      <div class="g-detail">
        <h2 class="c-h2">Notas da AtualizaÃ§Ã£o: 3voluÃ§Ã£o</h2>
        <div class="m-detail-time">Jul. 27, 2020</div>
        <div class="m-news-detail">
          <p class="orange">Contra Squad</p>
          <ul>
            <li>
              <span>Temporada 2 da Ranqueada<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Temporada 2 comeÃ§a dia 30 de julho Ã s 06h00</span><br>
                <span>â€œA Temporada 2 do CS Ranqueado estÃ¡ chegando! Chegue atÃ© a patente Ouro III ou mais e ganhe o item especial da ranqueada - a G18 Dourada!â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ajustes na loja do Contra Squad <br>
                  EstatÃ­sticas de carreira do Contra Squad agora podem ser vista no perfil do jogador. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Item - Novo Futuro<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">DisponÃ­vel no Modo ClÃ¡ssico</span><br>
                <span>â€œA maioria dos jogadores tem dificuldades para alcanÃ§ar seus companheiros de equipe e revivÃª-los no meio do campo de batalha. Com isso em mente a Horizontes do Futuro criou um remÃ©dio diferente, o Novo Futuro, que permite que o jogador reviva a si mesmo. O Novo Futuro pode atÃ© ser difÃ­cil, mas tambÃ©m pode ser a definiÃ§Ã£o entre a vitÃ³ria e a derrota.â€</span><br>
                <br>
                <span style="color: #666666;">
                  O Novo Futuro nÃ£o para o dano por sangramento nem o causado pelo ambiente ou por outros jogadores. <br>
                  Ele recupera as habilidades de combate quando o jogador que o uso estiver caÃ­do. <br>
                  Ao ser revivido pelo Novo Futuro, o jogador terÃ¡ 100 de vida. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>AssistÃªncia de mira<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">DisponÃ­vel somente no Contra Squad.</span><br>
                <span>â€œRecebemos reclamaÃ§Ãµes de que a atual assistÃªncia de mira prioriza alvos caÃ­dos ao invÃ©s dos inimigos ainda em combate. Esse problema pode ser muito irritante, especialmente no Contra Squad, em que os jogadores se encontram em combate constante. Estamos ajustando esse mecanismo para que os jogadores possam mirar nos inimigos que ainda constituem ameaÃ§a, antes de finalizÃ¡-los um por um.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Agora a assistÃªncia de mira priorizarÃ¡ jogadores que estÃ£o em combate (apenas no Contra Squad).<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Jogabilidade</p>
          <ul>
            <li>
              <span>Nova ilha de inÃ­cio - â€œA Pistaâ€<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Repaginando</span><br>
                <span>â€œJÃ¡ faz um tempo desde a Ãºltima vez que apresentamos uma nova ilha de inÃ­cio. Chequem essa novidade e nÃ£o deixem de contar sua opiniÃ£o!â€</span><br>
                <br>
                <span style="color: #666666;">
                  Nova ilha de inÃ­cio: â€œA Pistaâ€ disponÃ­vel agora.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Mecanismo de agachar e levantar<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ProteÃ§Ã£o de tiro na cabeÃ§a</span><br>
                <span>â€œDescobrimos recentemente que alguns jogadores utilizam scripts para acertar a cabeÃ§a dos adversÃ¡rios ao se levantar bem rÃ¡pido depois de mirar. Uma vez que essa tÃ©cnica deixa o outro jogador sem chance de reaÃ§Ã£o, nÃ³s estamos enfraquecendo o poder de dano do tiro ao se levantar. Essa mudanÃ§a foi feita focando na exploraÃ§Ã£o que alguns jogadores fazem dessa situaÃ§Ã£o, evitando que afete o jogo justo dos demais.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Dano de tiro na cabeÃ§a reduzido ao sair da posiÃ§Ã£o agachada. (0,85s)<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>AtualizaÃ§Ã£o dos veÃ­culos<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ajuste da velocidade</span><br>
                <span>â€œVocÃªs pediram e nÃ³s ouvimos!â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ajuste do mÃ¡ximo de velocidade para os seguintes veÃ­culos: <br>
                  &nbsp;&nbsp;&nbsp;- Moto: <del>120km/h</del>->130km/h <br>
                  &nbsp;&nbsp;&nbsp;- Jipe: <del>100km/h</del>-> 110km/h <br>
                  &nbsp;&nbsp;&nbsp;- TuTu: <del>90km/h</del>-> 100km/h <br>
                  &nbsp;&nbsp;&nbsp;- VeÃ­culo esportivo: <del>130km/h</del>->120km/h <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Mecanismo de direÃ§Ã£o<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">OtimizaÃ§Ã£o do visor de velocidade e dos efeitos de velocidade mÃ¡xima</span><br>
                <span>â€œAo mesmo tempo que aumentamos a velocidade dos veÃ­culos, tambÃ©m adicionamos uma cÃ¢mera de movimento que tornarÃ¡ a experiÃªncia de dirigir mais confortÃ¡vel. Depois da atualizaÃ§Ã£o, a cÃ¢mera se afastarÃ¡ levemente quando o veÃ­culo atingir a velocidade mÃ¡xima. Esperamos que estÃ¡ mudanÃ§a torne a experiÃªncia de dirigir mais tranquila, jÃ¡ que o jogador poderÃ¡ ver os obstÃ¡culos e objetos no caminho enquanto dirige.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Viro de velocidade mais preciso adicionado. <br>
                  A cÃ¢mera se afastarÃ¡ levemente quando o veÃ­culo atingir a velocidade mÃ¡xima. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Planador<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">A velocidade de queda aumenta a partir de determinada altura</span><br>
                <span>â€œO objetivo das alteraÃ§Ãµes feitas ao planador Ã© evitar que alguns jogadores o usem para alcanÃ§ar Ã¡reas muito altas e impossÃ­veis de chegar por outros meios, ganhando uma vantagem injusta nas partidas.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Os jogadores descerÃ£o mais rÃ¡pido ai atingir 38 metros de altura ou mais.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Limites de vida<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Adicionamos um limite a quantidade de vida que pode ser recuperada por segundo.</span><br>
                <span>â€œCom a introduÃ§Ã£o de novos itens e habilidades de cura, percebemos que alguns jogadores sÃ£o capazes de sobreviver fora da Ã¡rea seguro por mais tempo do que o planejado ao usar todos os itens e habilidades de uma vez. Estamos eliminando essa possibilidade para evitar jogadores que se escondam fora da Ã¡rea segura para evitar combates e conseguir o Booyah.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Os jogadores nÃ£o conseguira mais recuperar mais de 50 de vida por segundo.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Armas e Balanceamento</p>
          <ul>
            <li>
              <span>Nova Arma - AUG<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">DisponÃ­vel no Battle Royale e no Contra Squad (ClÃ¡ssico e Ranqueado).</span><br>
                <span>â€œJÃ¡ faz um tempo desde que lanÃ§amos uma AR em Free Fire. A AUG Ã© uma arma extremamente Ã¡gil e flexÃ­vel em combate. Sua mira 2x prÃ©-acoplada permite que o jogador engaje em combates de mÃ©dia distÃ¢ncia imediatamente e seus 35 tiros podem ser extremamente Ãºteis em combates de curtas distÃ¢ncias. Experimente usar a AUG com uma arma de longa distÃ¢ncia junto para maximizar a eficiÃªncia.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Alcance do Dano: 31 <br>
                  Capacidade do carregador: 35 <br>
                  CadÃªncia de tiro: .147 <br>
                  Vem com uma mira 2x prÃ©-acoplada, que pode ser trocada por outras miras. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>AK47<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">DisponÃ­vel em todos os modos</span><br>
                <span>â€œApesar da AK47 ser uma queridinha de todos, ela vem tendo uma performance bem abaixo das demais AR. Estamos restaurando uma parte do seu poder, aumentando seu poder de parada.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Alcance do Dano: <del>37</del>->38 <br>
                  Dano mÃ­nimo: <del>12</del>->14 <br>
                  CadÃªncia de tiro: -3% <br>
                  PrecisÃ£o dos tiros <del>1</del>->2 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>FAMAS<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">DisponÃ­vel em todos os modos</span><br>
                <span>â€œAtualmente a FAMAS nÃ£o Ã© Ã¡gil o suficiente para ocupar o topo da lista das AR. Estamos aumentando sua velocidade de movimento para que os jogadores tenham mais facilidade de circular durante as trÃªs rodadas de tiro.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Velocidade de movimento enquanto atira: +10%<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>M249<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">DisponÃ­vel em todos os modos</span><br>
                <span>â€œA M249 Ã© definitivamente uma das armas mais fracas do Airdrop atualmente. Estamos melhorando essa arma para que seu poder de supressÃ£o seja mais efetivo.â€</span><br>
                <br>
                <span style="color: #666666;">
                  PrecisÃ£o dos tiros: 4->12 <br>
                  Dano mÃ­nimo: <del>15</del>->21 <br>
                  Recuo mÃ¡ximo: -18% <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>SPAS12<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">DisponÃ­vel em todos os modos</span><br>
                <span>â€œApesar da SPAS ser uma das melhores armas de contenÃ§Ã£o a queima roupa, sua queda de dano Ã© a principal razÃ£o pela qual a SPAS performa tÃ£o pior que a M1887 e a M1014. Melhoramos levemente o poder da SPAS para tornÃ¡-la mais prÃ³xima das demais espingardas.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Dano mÃ­nimo: <del>6</del>->7 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>XM8<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">DisponÃ­vel em todos os modos</span><br>
                <span>â€œJÃ¡ faz algum tempo que a XM8 estÃ¡ no topo das AR. Uma das razÃµes Ã© que essa arma Ã© mais flexÃ­vel que as demais e fÃ¡cil de usar. Fizemos alguns ajustes nestas atualizaÃ§Ã£o para aumentar a curva de aprendizado dessa arma.â€</span><br>
                <br>
                <span style="color: #666666;">
                  PrecisÃ£o dos tiros: 4->3 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Modos de jogo</p>
          <ul>
            <li>
              <span>PredefiniÃ§Ã£o de arma<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">DisponÃ­vel no modo Mata Mata em Equipe, Abate Certificado e RedenÃ§Ã£o</span><br>
                <span>â€œRecentemente soubemos que vocÃªs acham a predefiniÃ§Ã£o de arma muito restritiva, uma vez que sÃ³ se pode escolher 4 armas. Estamos apresentando um novo menu de seleÃ§Ã£o de arma, desta maneira os jogadores poderÃ£o escolher e mudar de equipamento sempre que reviverem.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Os jogadores agora podem comprar armas e equipamentos com crÃ©ditos em todas as rodadas. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Modo CabeÃ§a Grande<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ajuste de paraquedas e mecanismo para reviver </span><br>
                <span>â€œAdicionamos novos mecanismos ao modo CabeÃ§a Grande para que os jogadores possam voltar para a partida mais rÃ¡pido!â€</span><br>
                <br>
                <span style="color: #666666;">
                  Os jogadores agora podem optar por desistir para retornar mais rÃ¡pido ao cair. <br>
                  A altitude do paraquedas diminuiu para que jogadores possam voltar para a batalha mais rÃ¡pido. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Tiro Perfeito (Squad)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Melhora e ajuste nos mecanismos de melhoria das armas e jogos em equipe. </span><br>
                <span>â€œUm dos maiores problemas que percebemos com o Tiro Perfeito original, Ã© que os jogadores queriam jogar com seus amigos, mesmo que fosse enquanto inimigos. Por isso adicionamos a opÃ§Ã£o 4x4, agora os jogadores podem chamar seus squads para quebrar tudo em Tiro Perfeito.â€</span><br>
                <br>
                <span style="color: #666666;">
                  VersÃ£o 4x4. <br>
                  Os jogadores podem usar a opÃ§Ã£o â€œpularâ€ uma arma caso tenham 3 derrotas consecutivas ou se seu progresso estiver consideravelmente pior em relaÃ§Ã£o aos demais jogadores. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Personagens e Pets</p>
          <ul>
            <li>
              <span>Novo Personagem - Luqueta<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Em breve no Free Fire</span><br>
                <span>â€œTÃ¡ pronto pra goleada?â€</span><br>
                <br>
                <span style="color: #666666;">
                  Goleada Cada abate aumenta o mÃ¡ximo de HP em {8/10/12/14/16/18}, mÃ¡ximo de 35.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Novo Pet - Dom Pisante<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Chegando no Free Fire</span><br>
                <span>â€œCansado de ficar sem paredes de gel? O Dom Pisante resolve esse problema!â€</span><br>
                <br>
                <span style="color: #666666;">
                  Gel Agachado: Quando o jogador tiver menos de [1/1/2] Paredes de Gel, Dom Pisante pode produzir 1 Granada de Gel a cada [120/100/100] segundos.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Hayato â€œChama Azulâ€ - Chegando no Free Fire<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Em breve no Free Fire! </span><br>
                <span>â€œÃ‰ hora do nosso segundo personagem despertar - Hayato â€œChama Azulâ€ finalmente chegou! Ele estarÃ¡ na super festa do 3Âº AniversÃ¡rio de Free Fire dia 22 de agosto GRÃTIS!â€</span><br><br>
                <span style="color: #666666;">
                  Goshinjutsu: Reduz dano frontal em {20/25/30/35/40}% por 3s. Tempo de recarga: 50s Atirar irÃ¡ interromper a habilidade.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Sistema de</p>
          <ul>
            <li>
              <span>LÃ­der Interino da Guilda<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Sistema de gerenciamento adicionado</span><br>
                <span>â€œDesde a Ãºltima atualizaÃ§Ã£o, recebemos muitos comentÃ¡rios positivos de vocÃªs sobre as novas ferramentas de gerenciamento de guilda. No entanto, percebemos que ainda resta um problema muito sÃ©rio para a comunidade: lÃ­deres de guilda cujo lÃ­der nÃ£o estÃ¡ mais ativo. Adicionamos um sistema para que membros da guilda votem temporariamente em lÃ­deres interinos, desta forma as guildas poderÃ£o continuar ativas mesmo que seu lÃ­der original nÃ£o esteja mais.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Quando o lÃ­der da guilda estiver inativo por mais de 30 dias, membros da guilda receberÃ£o uma notificaÃ§Ã£o e poderÃ£o votar em um lÃ­der interino. <br>
                  Uma vez definido, o lÃ­der interino da guilda terÃ¡ a mesma autoridade do lÃ­der original atÃ© que este retorne ou o lÃ­der interino fique ausente por mais de 7 dias. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>OtimizaÃ§Ãµes e resoluÃ§Ã£o de bugs<br></span>
              <span class="m-news-detail-s">
                &nbsp;&nbsp;&nbsp;- Nova pÃ¡gina de resumo da partida para Contra Squad e Tiro Perfeito; <br>
                &nbsp;&nbsp;&nbsp;- Agora os jogadores podem enviar um link gerado pelo jogo para convidar amigos para sua equipe; <br>
                &nbsp;&nbsp;&nbsp;- OtimizaÃ§Ã£o da interface de arma; <br>
                &nbsp;&nbsp;&nbsp;- A mira tÃ©rmica agora pode ver atravÃ©s de granadas de fumaÃ§a; <br>
                &nbsp;&nbsp;&nbsp;- OtimizaÃ§Ã£o do convite para equipe; <br>
                &nbsp;&nbsp;&nbsp;- Novos conteÃºdos adicionados ao Jornal FF; <br>
                &nbsp;&nbsp;&nbsp;- OtimizaÃ§Ã£o do vÃ­deo de introduÃ§Ã£o a combates de curta distÃ¢ncia; <br>
                &nbsp;&nbsp;&nbsp;- OtimizaÃ§Ã£o de sinalizaÃ§Ã£o de hora extra no modo Mata Mata em Equipe; <br>
                &nbsp;&nbsp;&nbsp;- OtimizaÃ§Ã£o da animaÃ§Ã£o do paraquedas; <br>
                &nbsp;&nbsp;&nbsp;- Kalahari adicionado Ã s Salas Personalizadas; <br>
                &nbsp;&nbsp;&nbsp;- Resolvemos o bug que permitia que alguns jogadores saÃ­ssem da Ã¡rea de contenÃ§Ã£o antes do inÃ­cio da rodada em alguns modos. <br>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
        </div>
      </div>
    `,
    ar: `
      <div class="g-detail ar" style="direction: rtl; display: block;">
        <h2 class="c-h2" style="text-align: right;">Ù…Ø¯ÙˆÙ†Ø© Ø§Ù„ØªØ­Ø¯ÙŠØ«: Ø§Ù„ØªØ·ÙˆØ±</h2>
        <div class="m-detail-time">Jul. 27, 2020</div>
        <div class="m-news-detail">
          <p class="orange">ÙƒÙ„Ø§Ø´ Ø³ÙƒÙˆØ§Ø¯</p>
          <ul>
            <li>
              <span>Ù…ÙˆØ³Ù… Ø§Ù„Ø±ØªØ¨Ø© 2<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ø§Ø¨ØªØ¯Ø§Ø¡ Ø§Ù„Ù…ÙˆØ³Ù… 7/30 17:00 SGT</span><br>
                <span>"ÙƒÙ„Ø§Ø´ Ø³ÙƒÙˆØ§Ø¯ Ø§Ù„Ù…ÙˆØ³Ù… Ø§Ù„Ø«Ø§Ù†ÙŠ Ù‡Ù†Ø§! Ø¥Ø±ÙØ¹ Ø±ØªØ¨ØªÙƒ Ø¥Ù„Ù‰ Ø°Ù‡Ø¨ III Ø£Ùˆ Ø£Ø¹Ù„Ù‰ Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø¹Ù†ØµØ± ÙƒÙ„Ø§Ø´ Ø³ÙƒÙˆØ§Ø¯ Ø§Ù„Ø­ØµØ±ÙŠ - G18 Ø§Ù„Ø°Ù‡Ø¨ÙŠØ©!"</span><br>
                <br>
                <span style="color: #666666;">
                  ØªØ¹Ø¯ÙŠÙ„ Ù…ØªØ¬Ø± ÙƒÙ„Ø§Ø´ Ø³ÙƒÙˆØ§Ø¯. <br>
                  ÙŠÙ…ÙƒÙ† Ø§Ù„Ø¢Ù† Ø¹Ø±Ø¶ Ø¥Ø­ØµØ§Ø¦ÙŠØ§Øª Ø§Ù„Ù…Ù‡Ù†ÙŠØ© Ù„ÙƒÙ„Ø§Ø´ Ø³ÙƒÙˆØ§Ø¯ ØªØ­Øª Ø§Ù„Ù…Ù„Ù Ø§Ù„Ø´Ø®ØµÙŠ Ù„Ù„Ø§Ø¹Ø¨.     <br>              
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Ø¹Ù†ØµØ± Ø¬Ø¯ÙŠØ¯ - Ø§Ù„Ø£ÙÙ‚ (Ù…Ø¬Ù…ÙˆØ¹Ø© Ø¥Ø­ÙŠØ§Ø¡)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ù…ØªÙˆÙØ± ÙÙŠ Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠ</span><br>
                <span>"Ø¹Ø§Ø¯Ø© Ù„Ø§ ÙŠØªÙ… Ø¥Ø­ÙŠØ§Ø¡ Ø§Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† Ù…Ù† Ø²Ù…Ù„Ø§Ø¦Ù‡Ù… ÙÙŠ ÙƒÙ„Ø§Ø´ Ø³ÙƒÙˆØ§Ø¯ Ø¨Ø³Ø¨Ø¨ Ø§Ù„Ù…Ø¹Ø±ÙƒØ© Ø§Ù„Ù…Ø³ØªÙ…Ø±Ø© Ø§Ù„ØªÙŠ ØªØ­Ø¯Ø« Ø­ÙˆÙ„ Ø§Ù„Ø®Ø±ÙŠØ·Ø©. Ù…Ø¹ ØªÙ‚Ø¯ÙŠÙ… Ø§Ù„Ø£ÙÙ‚ØŒ ÙŠØ­ØµÙ„ÙˆØ§ Ø§Ù„Ù„Ø§Ø¹Ø¨ÙˆÙ† Ø¹Ù„Ù‰ ÙØ±ØµØ© Ø£Ø®Ø±Ù‰ Ù„Ù„Ø§Ù†Ø¶Ù…Ø§Ù… Ø¥Ù„Ù‰ Ø§Ù„Ù…Ø¹Ø±ÙƒØ© Ø¨Ø¹Ø¯ Ø¥Ø³Ù‚Ø§Ø·Ù‡Ù…. ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠÙƒÙˆÙ† Ø§Ù„Ø£ÙÙ‚ Ù…ÙƒÙ„ÙÙ‹Ø§ Ù„Ù„ØºØ§ÙŠØ© ÙˆÙ„ÙƒÙ†Ù‡ Ø¨Ø§Ù„ØªØ£ÙƒÙŠØ¯ ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠØ¯ÙŠØ± Ø§Ù„Ø¬ÙˆÙ„Ø© Ù„ØµØ§Ù„Ø­Ùƒ"</span><br>
                <br>
                <span style="color: #666666;">
                  Ø§Ù„Ø£ÙÙ‚ Ù„Ù† ÙŠÙˆÙ‚Ù Ø§Ù„Ù†Ø²ÙŠÙ Ø£Ùˆ Ø§Ù„Ø¶Ø±Ø± Ù…Ù† Ø§Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† Ø£Ùˆ Ù…Ù†Ø·Ù‚Ø© Ø§Ù„Ù„Ø¹Ø¨. <br>
                  ÙŠÙ…ÙƒÙ† Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† Ø§Ø³ØªØ¹Ø§Ø¯Ø© Ø§Ù„Ù‚Ø¯Ø±Ø© Ø§Ù„Ù‚ØªØ§Ù„ÙŠØ© Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ù…Ø¬Ù…ÙˆØ¹Ø© Ø¥Ø­ÙŠØ§Ø¡ Ø£Ø«Ù†Ø§Ø¡ Ø³Ù‚ÙˆØ·Ù‡Ù…. <br>
                  Ø³ÙŠØªÙ… Ø¥Ø­ÙŠØ§Ø¡ Ø§Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† Ø¨Ù‚ÙˆØ© 100 HP Ø¨Ø¹Ø¯ Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ø£ÙÙ‚. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Ù…Ø³Ø§Ø¹Ø¯Ø© Ø§Ù„ØªØµÙˆÙŠØ¨<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ØªØ¹Ø¯ÙŠÙ„ Ù…Ø³Ø§Ø¹Ø¯Ø© Ø§Ù„ØªØµÙˆÙŠØ¨ ÙÙŠ ÙƒÙ„Ø§Ø´ Ø³ÙƒÙˆØ§Ø¯</span><br>
                <span>"Ù„Ù‚Ø¯ ØªÙ„Ù‚ÙŠÙ†Ø§ Ø´ÙƒØ§ÙˆÙ‰ Ø¨Ø£Ù† Ù…Ø³Ø§Ø¹Ø¯Ø© ØªØµÙˆÙŠØ¨ Ø§Ù„Ø£Ù‡Ø¯Ø§Ù Ø§Ù„ØªÙŠ ØªÙ… Ø¥Ø³Ù‚Ø§Ø·Ù‡Ù… Ø¨Ø¯Ù„Ø§Ù‹ Ù…Ù† Ø§Ù„Ø£Ù‡Ø¯Ø§Ù Ø§Ù„ØªÙŠ Ù…Ø§ Ø²Ø§Ù„Øª ÙÙŠ Ø§Ù„Ù‚ØªØ§Ù„. Ù‚Ø¯ ØªÙƒÙˆÙ† Ù‡Ø°Ù‡ Ø§Ù„Ù…Ø´ÙƒÙ„Ø© Ù…Ø²Ø¹Ø¬Ø© Ù„Ù„ØºØ§ÙŠØ© ÙÙŠ ÙƒÙ„Ø§Ø´ Ø³ÙƒÙˆØ§Ø¯ Ø­ÙŠØ« ÙŠÙ†Ø®Ø±Ø· Ø§Ù„Ù„Ø§Ø¹Ø¨ÙˆÙ† Ø¨Ø§Ø³ØªÙ…Ø±Ø§Ø± ÙÙŠ Ø§Ù„Ù…Ø¹Ø§Ø±Ùƒ. Ù†Ù‚ÙˆÙ… Ø¨ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ø¢Ù„ÙŠØ© Ø­ØªÙ‰ ÙŠØªÙ…ÙƒÙ† Ø§Ù„Ù„Ø§Ø¹Ø¨ÙˆÙ† Ù…Ù† Ø§Ø³ØªÙ‡Ø¯Ø§Ù Ø§Ù„Ø£Ø¹Ø¯Ø§Ø¡ Ø§Ù„Ø°ÙŠÙ† ÙŠØ´ÙƒÙ„ÙˆÙ† ØªÙ‡Ø¯ÙŠØ¯Ø§Øª Ù‚Ø¨Ù„ Ø§Ù„Ù‚Ø¶Ø§Ø¡ Ø¹Ù„ÙŠÙ‡Ù… ÙˆØ§Ø­Ø¯Ù‹Ø§ ØªÙ„Ùˆ Ø§Ù„Ø¢Ø®Ø±."</span><br>
                <br>
                <span style="color: #666666;">
                  Ù…Ø³Ø§Ø¹Ø¯Ø© Ø§Ù„ØµÙˆÙŠØ¨ Ø§Ù„Ø¢Ù† ÙŠØ¹Ø·ÙŠ Ø§Ù„Ø£ÙˆÙ„ÙˆÙŠØ© Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† Ø§Ù„Ø°ÙŠÙ† Ù‡Ù… ÙÙŠ Ø§Ù„Ù‚ØªØ§Ù„ (ÙƒÙ„Ø§Ø´ Ø³ÙƒÙˆØ§Ø¯ ÙÙ‚Ø·).<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Ø§Ù„Ù„Ø¹Ø¨</p>
          <ul>
            <li>
              <span>Ø¬Ø²ÙŠØ±Ø© Ø¨Ø¯Ø§ÙŠØ© Ø¬Ø¯ÙŠØ¯Ø© - "Ø§Ù„Ù…Ø¯Ø±Ø¬"<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ø§Ø¹Ø§Ø¯Ø© Ø§Ù„Ø¹Ù…Ù„ Ù„Ø¬Ø²ÙŠØ±Ø© Ø§Ù„Ø¨Ø¯Ø§ÙŠØ©</span><br>
                <span>"Ù„Ù‚Ø¯ Ù…Ø±Øª ÙØªØ±Ø© Ù…Ù† Ø§Ù„ÙˆÙ‚Øª Ù…Ù†Ø° Ø£Ù† Ø£Ø·Ù„Ù‚Ù†Ø§ Ø¬Ø²ÙŠØ±Ø© Ø¨Ø¯Ø§ÙŠØ© Ø¬Ø¯ÙŠØ¯Ø©. Ø£Ù„Ù‚ Ù†Ø¸Ø±Ø© ÙˆØ£Ø®Ø¨Ø±Ù†Ø§ Ø¨Ù…Ø§ ØªØ´Ø¹Ø±! "</span><br>
                <br>
                <span style="color: #666666;">
                  Ø¬Ø²ÙŠØ±Ø© ØªÙØ±Ø® Ø¬Ø¯ÙŠØ¯Ø©: "Ø§Ù„Ù…Ø¯Ø±Ø¬" Ù…ØªØ§Ø­ Ø§Ù„Ø¢Ù†<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Ø¢Ù„ÙŠØ© Ø§Ù„Ø§Ù†Ø­Ù†Ø§Ø¡ ÙˆØ¹Ø¯Ù… Ø§Ù„Ø§Ù†Ø­Ù†Ø§Ø¡<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ø­Ù…Ø§ÙŠØ© Ø§Ù„Ø±Ø£Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø¥Ù†Ø­Ù†Ø§Ø¡</span><br>
                <span>"Ù„Ù‚Ø¯ Ù„ÙØª Ø§Ù†ØªØ¨Ø§Ù‡Ù†Ø§ Ø¥Ù„Ù‰ Ø£Ù† Ø¨Ø¹Ø¶ Ø§Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† ÙŠÙ‚ÙˆÙ…ÙˆÙ† Ø¨Ø¥Ø¹Ø¯Ø§Ø¯ Ø§Ù„Ø¨Ø±Ø§Ù…Ø¬ Ø§Ù„Ù†ØµÙŠØ© Ù„Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ ØªØ³Ø¯ÙŠØ¯ Ø§Ù„Ø±Ø£Ø³ Ø¨Ø´ÙƒÙ„ ÙÙˆØ±ÙŠ Ù…Ù† Ø®Ù„Ø§Ù„ Ø¹Ø¯Ù… Ø§Ù„Ø§Ù†Ø­Ù†Ø§Ø¡ Ø¨Ø³Ø±Ø¹Ø© ÙƒØ¨ÙŠØ±Ø© Ø¨Ø¹Ø¯ Ø§Ù„ØªØ­Ø¯ÙŠØ¯. Ù†Ø¸Ø±Ù‹Ø§ Ø¨Ø£Ù† Ù‡Ø°Ø§ Ø§Ù„Ø¥Ø¬Ø±Ø§Ø¡ ÙŠØªØ±Ùƒ Ø§Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† ÙÙŠ Ø§Ù„Ø·Ø±Ù Ø§Ù„Ù…Ø³ØªÙ„Ù… Ù…Ù† Ø¯ÙˆÙ† ÙØ±ØµØ© Ù„Ù„Ù…ÙˆØ§Ø¬Ù‡Ø©ØŒ ÙØ³ÙˆÙ Ù†Ø¶ÙŠÙ ØªØµØ­ÙŠØ­Ù‹Ø§ Ø¨Ø³ÙŠØ·Ù‹Ø§ ØªØ¬Ø§Ù‡ Ø¶Ø±Ø± Ø§ØµØ§Ø¨Ø© Ø§Ù„Ø±Ø£Ø³ Ø¹Ù†Ø¯ Ø¹Ø¯Ù… Ø§Ù„Ø§Ù†Ø­Ù†Ø§Ø¡. Ù‡Ø°Ø§ Ø§Ù„ØªØºÙŠÙŠØ± Ù…ÙˆØ¬Ù‡ ÙÙ‚Ø· Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† Ø§Ù„Ø°ÙŠÙ† ÙŠØ³ØªØºÙ„ÙˆÙ† Ù‡Ø°Ø§ Ø§Ù„Ù…ÙˆÙ‚ÙØŒ ÙˆÙ„Ø§ ÙŠÙ†Ø¨ØºÙŠ Ø£Ù† ÙŠØ¤Ø«Ø± Ø¹Ù„Ù‰ Ø§Ù„Ù„Ø¹Ø¨ Ø§Ù„Ø¹Ø§Ø¯ÙŠ".</span><br>
                <br>
                <span style="color: #666666;">
                  Ø³ØªØ¤Ø¯ÙŠ Ø¥ØµØ§Ø¨Ø© Ø§Ù„Ø±Ø£Ø³ Ø¥Ù„Ù‰ ØªÙ‚Ù„ÙŠÙ„ Ø§Ù„Ø¶Ø±Ø± Ø¨Ø¹Ø¯ ÙˆÙ‚Øª Ù‚ØµÙŠØ± Ù…Ù† Ø¹Ø¯Ù… Ø§Ù„Ø§Ù†Ø­Ù†Ø§Ø¡. (0.85 Ø«Ø§Ù†ÙŠØ©)<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ØªØ­Ø¯ÙŠØ« Ø§Ù„Ù…Ø±ÙƒØ¨Ø§Øª<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ØªØ¹Ø¯ÙŠÙ„ Ø³Ø±Ø¹Ø© Ø§Ù„Ù…Ø±ÙƒØ¨Ø§Øª</span><br>
                <span>â€œØ·Ù„Ø¨ØªÙ… ÙˆÙ‚Ù…Ù†Ø§ Ø¨ØªØ³Ù„ÙŠÙ…Ù‡Ø§.â€</span><br>
                <br>
                <span style="color: #666666;">
                  ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ø³Ø±Ø¹Ø© Ø§Ù„Ù‚ØµÙˆÙ‰ Ù„Ù„Ù…Ø±ÙƒØ¨Ø§Øª Ø§Ù„ØªØ§Ù„ÙŠØ©: <br>
                  &nbsp;&nbsp;&nbsp;- ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ø³Ø±Ø¹Ø© Ø§Ù„Ù‚ØµÙˆÙ‰ Ù„Ù„Ù…Ø±ÙƒØ¨Ø§Øª Ø§Ù„ØªØ§Ù„ÙŠØ©: <br>
                  &nbsp;&nbsp;&nbsp;- Ø¯Ø±Ø§Ø¬Ø© Ù†Ø§Ø±ÙŠØ©: 120 ÙƒÙ… / Ø³Ø§Ø¹Ø©-> 130 ÙƒÙ… / Ø³Ø§Ø¹Ø© <br>
                  &nbsp;&nbsp;&nbsp;- Ø¬ÙŠØ¨: 100 ÙƒÙ… / Ø³Ø§Ø¹Ø©-> 110 ÙƒÙ… / Ø³Ø§Ø¹Ø© <br>
                  &nbsp;&nbsp;&nbsp;- ØªÙˆØªÙˆ: 90 ÙƒÙ… / Ø³Ø§Ø¹Ø©-> 100 ÙƒÙ… / Ø³Ø§Ø¹Ø© <br>
                  &nbsp;&nbsp;&nbsp;- Ø³ÙŠØ§Ø±Ø§Øª Ø§Ù„Ø¯ÙØ¹ Ø§Ù„Ø±Ø¨Ø§Ø¹ÙŠ: 130 ÙƒÙ… / Ø³Ø§Ø¹Ø©-> 120 ÙƒÙ… / Ø³Ø§Ø¹Ø© <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Ø¢Ù„ÙŠØ© Ø§Ù„Ù‚ÙŠØ§Ø¯Ø©<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ø¹Ø±Ø¶ Ø³Ø±Ø¹Ø© Ù…Ø­Ø³Ù‘Ù† ÙˆØªØ£Ø«ÙŠØ±Ø§Øª Ø§Ù„Ø³Ø±Ø¹Ø© Ø§Ù„Ù‚ØµÙˆÙ‰</span><br>
                <span>"Ù†Ø¸Ø±Ù‹Ø§ Ù„Ø²ÙŠØ§Ø¯Ø© Ø³Ø±Ø¹Ø© Ù…Ø¹Ø¸Ù… Ø§Ù„Ù…Ø±ÙƒØ¨Ø§Øª ØŒ ÙØ¥Ù†Ù†Ø§ Ù†Ø¶ÙŠÙ Ø£ÙŠØ¶Ù‹Ø§ Ø­Ø±ÙƒØ© ÙƒØ§Ù…ÙŠØ±Ø§ ØªØ¬Ø¹Ù„ Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ù…Ø±ÙŠØ­Ø© Ø§ÙƒØ«Ø±.Ø¨Ø¹Ø¯ Ø§Ù„ØªØ­Ø¯ÙŠØ« ØŒ Ø³ÙŠØªÙ… ØªØµØºÙŠØ± Ø§Ù„ÙƒØ§Ù…ÙŠØ±Ø§ Ù‚Ù„ÙŠÙ„Ø§Ù‹ Ø¹Ù†Ø¯Ù…Ø§ ÙŠØµÙ„ Ø§Ù„Ù„Ø§Ø¹Ø¨ÙˆÙ† Ø¥Ù„Ù‰ Ø§Ù„Ø³Ø±Ø¹Ø© Ø§Ù„Ù‚ØµÙˆÙ‰ Ù„Ù„Ù…Ø±ÙƒØ¨Ø©. ÙˆÙ‡Ø°Ø§ Ø³ÙŠØ¬Ø¹Ù„ ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ø£ÙƒØ«Ø± Ø³Ù„Ø§Ø³Ø© Ø­ÙŠØ« Ø³ÙŠØªÙ…ÙƒÙ† Ø§Ù„Ø³Ø§Ø¦Ù‚ Ù…Ù† Ø±Ø¤ÙŠØ© Ø§Ù„Ù…Ø²ÙŠØ¯ Ù…Ù† Ø§Ù„Ø£Ø´ÙŠØ§Ø¡ ÙˆØ§Ù„Ø¹Ù‚Ø¨Ø§Øª Ø§Ù„Ù‚Ø§Ø¯Ù…Ø© Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„Ù‚ÙŠØ§Ø¯Ø©."</span><br>
                <br>
                <span style="color: #666666;">
                  ØªÙ…Øª Ø¥Ø¶Ø§ÙØ© Ø¹Ø±Ø¶ Ø£ÙƒØ«Ø± Ø¯Ù‚Ø© Ù„Ø³Ø±Ø¹Ø© Ø§Ù„Ø³ÙŠØ§Ø±Ø©. <br>
                  Ø³ØªÙ‚ÙˆÙ… Ø§Ù„ÙƒØ§Ù…ÙŠØ±Ø§ Ø§Ù„Ø¢Ù† Ø¨Ø§Ù„ØªØµØºÙŠØ± Ù‚Ù„ÙŠÙ„Ø§Ù‹ Ø¹Ù†Ø¯Ù…Ø§ ØªÙƒÙˆÙ† Ø§Ù„Ù…Ø±ÙƒØ¨Ø© Ø¨Ø£Ù‚ØµÙ‰ Ø³Ø±Ø¹Ø©. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Ø·Ø§Ø¦Ø±Ø© Ø´Ø±Ø§Ø¹ÙŠØ©<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ØªØ²Ø¯Ø§Ø¯ Ø³Ø±Ø¹Ø© Ø§Ù„Ù‡Ø¨ÙˆØ· Ø¹Ù†Ø¯Ù…Ø§ ØªÙƒÙˆÙ† ÙÙˆÙ‚ Ø§Ø±ØªÙØ§Ø¹ Ù…Ø¹ÙŠÙ†</span><br>
                <span>"Ù†Ø¬Ø±ÙŠ Ø¨Ø¹Ø¶ Ø§Ù„ØªØºÙŠÙŠØ±Ø§Øª Ø¹Ù„Ù‰ Ø§Ù„Ø·Ø§Ø¦Ø±Ø§Øª Ø§Ù„Ø´Ø±Ø§Ø¹ÙŠØ© Ù„Ø£Ù† Ø§Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† ÙŠØ³ØªØ®Ø¯Ù…ÙˆÙ†Ù‡Ø§ ÙƒØ¹Ù†ØµØ± Ù„Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ Ø¨Ø¹Ø¶ Ø§Ù„Ù…ÙˆØ§Ù‚Ø¹ Ø§Ù„ØªÙŠ Ù„Ø§ ÙŠÙ…ÙƒÙ† Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„ÙŠÙ‡Ø§ Ø¨Ø¯Ù„Ø§Ù‹ Ù…Ù† Ø§Ø³ØªØ®Ø¯Ø§Ù…Ù‡Ø§ ÙƒØ£Ø¯Ø§Ø© Ù„Ù„Ù‡Ø¨ÙˆØ· Ø¨Ø£Ù…Ø§Ù† Ù…Ù† Ø§Ø±ØªÙØ§Ø¹Ø§Øª Ø¹Ø§Ù„ÙŠØ©."</span><br>
                <br>
                <span style="color: #666666;">
                  Ø³ÙŠÙ†Ø²Ù„ÙˆÙ† Ø§Ù„Ù„Ø§Ø¹Ø¨ÙˆÙ† Ø§Ù„Ø¢Ù† Ø¨Ø´ÙƒÙ„ Ø£Ø³Ø±Ø¹ Ø¹Ù†Ø¯Ù…Ø§ ÙŠØªØ¬Ø§ÙˆØ² Ø§Ø±ØªÙØ§Ø¹Ù‡Ù… Ø¹Ù† 38 Ù…ØªØ±Ù‹Ø§. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ØªØ¬Ø¯ÙŠØ¯ Ø§Ù„ØµØ­Ø©<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ØªÙ…Øª Ø¥Ø¶Ø§ÙØ© Ø­Ø¯ Ù„Ù…Ù‚Ø¯Ø§Ø± Ø§Ù„ØµØ­Ø© Ø§Ù„ØªÙŠ ÙŠÙ…ÙƒÙ† Ø§Ø³ØªØ¹Ø§Ø¯ØªÙ‡Ø§ ÙÙŠ Ø§Ù„Ø«Ø§Ù†ÙŠØ©.</span><br>
                <span>â€œÙ…Ø¹ Ù‚Ø¯ÙˆÙ… Ø¢Ù„ÙŠØ§Øª ÙˆÙ…Ù‡Ø§Ø±Ø§Øª Ø¬Ø¯ÙŠØ¯Ø© Ù„ØªØ¬Ø¯ÙŠØ¯ Ø§Ù„ØµØ­Ø© ØŒ Ù„ÙØª Ø§Ù†ØªØ¨Ø§Ù‡Ù†Ø§ Ø£Ù† Ø¨Ø¹Ø¶ Ø§Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† ÙŠÙ…ÙƒÙ†Ù‡Ù… Ø§Ù„Ø¨Ù‚Ø§Ø¡ Ø®Ø§Ø±Ø¬ Ù…Ù†Ø·Ù‚Ø© Ø§Ù„Ù„Ø¹Ø¨ Ù„ÙØªØ±Ø© Ø£Ø·ÙˆÙ„ Ù…Ù…Ø§ Ù‡Ùˆ Ù…Ù‚ØµÙˆØ¯ Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù‚Ø¯Ø±Ø§Øª ÙˆØ§Ù„Ø¹Ù†Ø§ØµØ± Ø§Ù„Ø¹Ù„Ø§Ø¬ÙŠØ© ÙÙŠ ÙˆÙ‚Øª ÙˆØ§Ø­Ø¯. Ù†Ø­Ù† Ù†Ù‚ÙˆÙ… Ø¨Ø¥Ø²Ø§Ù„Ø© Ø¨Ø¹Ø¶ Ù…Ù† Ù‡Ø°Ù‡ Ø§Ù„Ù‚ÙˆØ© Ù„ØªØ¬Ù†Ø¨ Ø­ØµÙˆÙ„ Ø§Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† Ø¹Ù„Ù‰ Ø¨ÙˆÙŠØ§Ù‡ Ù…Ù† Ø®Ù„Ø§Ù„ Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø¡ Ø®Ø§Ø±Ø¬ Ù…Ù†Ø·Ù‚Ø© Ø§Ù„Ù„Ø¹Ø¨.â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ù„Ù… ÙŠØ¹Ø¯ Ø¨Ø¥Ù…ÙƒØ§Ù† Ø§Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† ØªÙ„Ù‚ÙŠ Ø¹Ù„Ø§Ø¬ Ø£ÙƒØ«Ø± Ù…Ù† 50 HP / Ø«Ø§Ù†ÙŠØ©.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Ø§Ù„Ø³Ù„Ø§Ø­ ÙˆØ§Ù„ØªÙˆØ§Ø²Ù†</p>
          <ul>
            <li>
              <span>Ø³Ù„Ø§Ø­ Ø¬Ø¯ÙŠØ¯ - AUG<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ù…ØªÙˆÙØ± ÙÙŠ Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠ Ùˆ ÙƒÙ„Ø§Ø´ Ø³ÙƒÙˆØ§Ø¯ (Ù…ØµÙ†ÙØ© Ùˆ ÙƒÙ„Ø§Ø³ÙŠÙƒÙŠØ©)</span><br>
                <span>"Ù„Ù‚Ø¯ Ù…Ø±Øª ÙØªØ±Ø© Ù…Ù† Ø§Ù„ÙˆÙ‚Øª Ù…Ù†Ø° Ø£Ø·Ù„Ù‚Ù†Ø§ Ø¨Ù†Ø¯Ù‚ÙŠØ© ÙÙŠ ÙØ±ÙŠ ÙØ§ÙŠØ±.Ø¥Ù† AUG Ù‡Ùˆ Ø®ÙŠØ§Ø± Ø®ÙÙŠÙ Ùˆ Ù…Ø±Ù† Ù„Ù„ØºØ§ÙŠØ©  Ø§Ù„Ø°ÙŠ ÙŠÙ…ÙƒÙ† Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† Ø§Ø®ØªÙŠØ§Ø±Ù‡  ÙÙŠ Ø§Ù„Ù„Ø¹Ø¨Ø©. ÙŠØ³Ù…Ø­ Ù…Ø¬Ù‡Ø± 2x Ø§Ù„Ù…Ø±ÙÙ‚ Ù…Ø³Ø¨Ù‚Ù‹Ø§ Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† Ø¨Ø§Ù„Ø§Ù†Ø®Ø±Ø§Ø· Ø¹Ù„Ù‰ Ø§Ù„ÙÙˆØ± ÙÙŠ Ù…Ø¹Ø§Ø±Ùƒ Ù…ØªÙˆØ³Ø·Ø© Ø§Ù„Ø¨Ø¹Ø¯ØŒ ÙˆÙ…Ø®Ø²Ù† 35 Ø¬ÙˆÙ„Ø© Ù…ÙÙŠØ¯Ø© Ù„Ù„ØºØ§ÙŠØ© ÙÙŠ Ø§Ù„Ù…ÙˆØ§Ù‚Ù Ø§Ù„Ù‚Ø±ÙŠØ¨Ø©. Ø¬Ø±Ø¨ AUG Ø¨Ø³Ù„Ø§Ø­ Ø·ÙˆÙŠÙ„ Ø§Ù„Ø¨Ø¹Ø¯ Ù„Ø²ÙŠØ§Ø¯Ø© ÙƒÙØ§Ø¡ØªÙ‡ Ø¥Ù„Ù‰ Ø£Ù‚ØµÙ‰ Ø­Ø¯."</span><br>
                <br>
                <span style="color: #666666;">
                  Ù†Ø³Ø¨Ø© Ø§Ù„Ø¶Ø±Ø±: 31 <br>
                  Ø³Ø¹Ø© Ø§Ù„Ù…Ø®Ø²Ù†: 35 <br>
                  Ù…Ø¹Ø¯Ù„ Ø³Ø±Ø¹Ø© Ø§Ø·Ù„Ø§Ù‚ Ø§Ù„Ù†Ø§Ø±: 147 <br>
                  ÙŠØ£ØªÙŠ Ù…Ø¹ Ù…Ø¬Ù‡Ø± 2x Ù…Ø±ÙÙ‚ Ù…Ø³Ø¨Ù‚Ù‹Ø§ Ù‚Ø§Ø¨Ù„ Ù„Ù„ØªØ¨Ø¯ÙŠÙ„ Ù…Ø¹ Ù…Ø¬Ø§Ù‡Ø± Ø£Ø®Ø±Ù‰. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>AK<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ù…ØªÙˆÙØ± ÙÙŠ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø£ÙˆØ¶Ø§Ø¹</span><br>
                <span>â€œØ¹Ù„Ù‰ Ø§Ù„Ø±ØºÙ… Ù…Ù† Ø£Ù† AK Ù‡Ùˆ ÙˆØ§Ø­Ø¯ Ù…Ù† Ø§Ù„Ø£Ø³Ù„Ø­Ø© Ø§Ù„Ù…ÙØ¶Ù„Ø© Ø¹Ù„Ù‰ Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚ØŒ Ø£Ù† Ø£Ø¯Ø§Ø¤Ù‡ Ø¨Ø§Ù„ØªØ£ÙƒÙŠØ¯ ÙŠØ¶Ø¹Ù Ù…Ù‚Ø§Ø±Ù†Ø© Ø¨Ø£Ù‡Ù… Ø§Ù„Ø¨Ù†Ø§Ø¯Ù‚ ÙÙŠ Ø§Ù„Ù„Ø¹Ø¨Ø©. Ù†Ø­Ù† Ù†Ø³ØªØ¹ÙŠØ¯ Ù‚ÙˆØ© AK Ù‚Ù„ÙŠÙ„Ø§Ù‹ Ø¹Ù† Ø·Ø±ÙŠÙ‚ Ø²ÙŠØ§Ø¯Ø© Ù‚ÙˆØªÙ‡ Ø§Ù„Ø¶Ø¦ÙŠÙ„Ø© Ø¨Ø´ÙƒÙ„ Ø¨Ø³ÙŠØ·."</span><br>
                <br>
                <span style="color: #666666;">
                  Ù†Ø³Ø¨Ø© Ø§Ù„Ø¶Ø±Ø±: 37-> 38 <br>
                  Ø§Ù„Ø­Ø¯ Ø§Ù„Ø£Ø¯Ù†Ù‰ Ù…Ù† Ø§Ù„Ø¶Ø±Ø±: 12-> 14 <br>
                  Ù…Ø¹Ø¯Ù„ Ø³Ø±Ø¹Ø© Ø§Ø·Ù„Ø§Ù‚ Ø§Ù„Ù†Ø§Ø±: -3Ùª <br>
                  Ø·Ù„Ù‚Ø§Øª Ø¯Ù‚ÙŠÙ‚Ø©: 1-> 2 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>FAMAS<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ù…ØªÙˆÙØ± ÙÙŠ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø£ÙˆØ¶Ø§Ø¹</span><br>
                <span>"ÙÙŠ Ø§Ù„ÙˆÙ‚Øª Ø§Ù„Ø­Ø§Ù„ÙŠØŒ Ø¥Ù† FAMAS Ù„ÙŠØ³Øª Ø®ÙÙŠÙØ© Ø¨Ù…Ø§ ÙŠÙƒÙÙŠ Ù„ØªÙƒÙˆÙ† ÙÙŠ Ù‚Ø§Ø¦Ù…Ø© Ø£ÙØ¶Ù„ Ø¨Ù†Ø¯Ù‚ÙŠØ©. Ù†Ø­Ù† Ù†Ù…Ù†Ø­Ù‡Ø§ Ø¨Ø¹Ø¶ Ø³Ø±Ø¹Ø© Ø§Ù„Ø­Ø±ÙƒØ© Ø§Ù„Ø¥Ø¶Ø§ÙÙŠØ© Ø¨Ø­ÙŠØ« ÙŠÙ…ÙƒÙ† Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ ÙˆÙ‚Øª Ø£Ø³Ù‡Ù„ Ù„Ù„ØªÙ†Ù‚Ù„ Ø¨ÙŠÙ† Ø±Ø´Ù‚Ø§Øª Ø§Ù„Ù†Ø§Ø±ÙŠØ© Ø§Ù„Ø«Ù„Ø§Ø«ÙŠØ©"</span><br>
                <br>
                <span style="color: #666666;">
                  Ø³Ø±Ø¹Ø© Ø§Ù„Ø­Ø±ÙƒØ© Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚: + 10Ùª <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>M249<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ù…ØªÙˆÙØ± ÙÙŠ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø£ÙˆØ¶Ø§Ø¹</span><br>
                <span>â€œÙ„Ø§ Ø´Ùƒ Ø¨Ø£Ù† M249 Ù‡ÙŠ ÙˆØ§Ø­Ø¯Ø© Ù…Ù† Ø£Ø¶Ø¹Ù Ø£Ø³Ù„Ø­Ø© Ø§Ù„Ø¥Ø³Ù‚Ø§Ø· Ù…Ù† Ø§Ù„Ù‡ÙˆØ§Ø¡ Ø­Ø§Ù„ÙŠÙ‹Ø§. Ù†Ù…Ù†Ø­ Ù„Ù‡Ø§ ØªØ¹Ø¯ÙŠÙ„ ÙƒØ¨ÙŠØ± Ù„Ù‡Ø°Ø§ Ø§Ù„ØªØµØ­ÙŠØ­ Ø­ØªÙ‰ ÙŠØªÙ…ÙƒÙ† Ù…Ù† ÙƒØªÙ… Ø§Ù„Ù†Ø§Ø± Ø¨Ø´ÙƒÙ„ ÙØ¹Ø§Ù„.</span><br>
                <br>
                <span style="color: #666666;">
                  Ø·Ù„Ù‚Ø§Øª Ø¯Ù‚ÙŠÙ‚Ø©: 4-> 12 <br>
                  Ø§Ù„Ø­Ø¯ Ø§Ù„Ø£Ø¯Ù†Ù‰ Ù…Ù† Ø§Ù„Ø¶Ø±Ø±: 15-> 21 <br>
                  Ø§Ù„Ø§Ø±ØªØ¯Ø§Ø¯ Ø§Ù„Ø£Ù‚ØµÙ‰: -18Ùª <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>SPAS12<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ù…ØªÙˆÙØ± ÙÙŠ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø£ÙˆØ¶Ø§Ø¹</span><br>
                <span>"Ø¹Ù„Ù‰ Ø§Ù„Ø±ØºÙ… Ù…Ù† Ø£Ù† SPAS Ù‡Ùˆ Ø£ÙØ¶Ù„ Ù…Ù†Ø§ÙØ³ ÙÙŠ Ø¥Ø®Ø±Ø§Ø¬ Ø§Ù„Ø¶Ø±Ø± ÙÙŠ Ù†Ø·Ø§Ù‚ Ø§Ù„Ù†Ù‚Ø·Ø© Ø§Ù„Ø³ÙˆØ¯Ø§Ø¡ØŒ Ø¥Ù„Ø§ Ø£Ù† Ø§Ù†Ø®ÙØ§Ø¶ Ø§Ù„Ø¶Ø±Ø± Ù‡Ùˆ Ø§Ù„Ø³Ø¨Ø¨ ÙÙŠ Ø£Ø¯Ø§Ø¡ SPAS Ø¨Ø´ÙƒÙ„ Ø£Ø³ÙˆØ£ Ø¨ÙƒØ«ÙŠØ± Ù…Ù† Ø£Ø¯Ø§Ø¡ M1887 Ùˆ M1014. Ù†Ù…Ù†Ø­ SPAS Ù…Ø¬Ù…ÙˆØ¹Ø© ØµØºÙŠØ±Ø© Ù…Ù† Ù‡Ø°Ø§ Ø§Ù„ØªØµØ­ÙŠØ­ Ù„Ø¥ØºÙ„Ø§Ù‚ Ø§Ù„ÙØ¬ÙˆØ© Ù…Ø¹ Ø§Ù„Ø¨Ù†Ø§Ø¯Ù‚ Ø§Ù„Ø¢Ø®Ø±ÙŠÙ†."</span><br>
                <br>
                <span style="color: #666666;">
                  Ø§Ù„Ø­Ø¯ Ø§Ù„Ø£Ø¯Ù†Ù‰ Ù…Ù† Ø§Ù„Ø¶Ø±Ø±: 6-> 7 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>XM8<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ù…ØªÙˆÙØ± ÙÙŠ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø£ÙˆØ¶Ø§Ø¹</span><br>
                <span>"XM8 Ø¹Ù„Ù‰ Ø±Ø£Ø³ Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„Ø¨Ù†Ø¯Ù‚ÙŠØ© Ù…Ù†Ø° ÙØªØ±Ø©. Ø£Ø­Ø¯ Ø§Ù„Ø£Ø³Ø¨Ø§Ø¨ Ù‡Ùˆ Ø£Ù† Ù‡Ø°Ø§ Ø§Ù„Ø³Ù„Ø§Ø­ Ù…Ø±Ù† Ù„Ù„ØºØ§ÙŠØ© ÙˆØ³Ù‡Ù„ Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù…. Ø§Ù†Ù†Ø§ Ù†Ø¬Ø±ÙŠ Ø¨Ø¹Ø¶ Ø§Ù„ØªØ¹Ø¯ÙŠÙ„Ø§Øª Ø¹Ù„Ù‰ XM8 ÙÙŠ Ù‡Ø°Ø§ Ø§Ù„ØªØµØ­ÙŠØ­ Ø¨Ø­ÙŠØ« ÙŠÙƒÙˆÙ† Ù„Ù‡Ø§ Ù…Ù†Ø­Ù†Ù‰ ØªØ¹Ù„ÙŠÙ…ÙŠ Ø£Ø¹Ù…Ù‚."</span><br>
                <br>
                <span style="color: #666666;">
                  Ø¯Ù‚Ø© Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚: 4->3 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">ÙˆØ¶Ø¹ Ø§Ù„Ù„Ø¹Ø¨Ø©</p>
          <ul>
            <li>
              <span>Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ù…Ø³Ø¨Ù‚Ø© Ù„Ù„Ø£Ø³Ù„Ø­Ø©<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ù…ØªÙˆÙØ± ÙÙŠ Ø§Ù„ÙØ±ÙŠÙ‚ Ø§Ù„Ù…ØªÙØ¬Ø± Ùˆ Ø§Ù„Ù‚ØªÙ„ Ø§Ù„Ù…Ø¶Ù…ÙˆÙ† ÙˆØ§Ù„Ø¥Ø¨Ø§Ø¯Ø©</span><br>
                <span>"ØªÙ„Ù‚ÙŠÙ†Ø§ Ù…Ù„Ø§Ø­Ø¸Ø§Øª Ù…Ù† Ø§Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† Ø¨Ø£Ù† Ø§Ù„Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ù…Ø³Ø¨Ù‚Ø© Ù„Ù„Ø£Ø³Ù„Ø­Ø© Ù…Ù‚ÙŠØ¯Ø© Ù„Ù„ØºØ§ÙŠØ© Ù„Ø£Ù†Ù‡Ø§ Ù‚Ø¯Ù…Øª 4 Ù…Ø¬Ù…ÙˆØ¹Ø§Øª Ù…Ù† Ø§Ù„Ø£Ø³Ù„Ø­Ø© ÙÙ‚Ø·. Ù†Ù…Ù†Ø­ Ù‚Ø§Ø¦Ù…Ø© Ø§Ø®ØªÙŠØ§Ø± Ø³Ù„Ø§Ø­ Ø¬Ø¯ÙŠØ¯Ø© Ø­ØªÙ‰ ÙŠØªÙ…ÙƒÙ† Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† Ù…Ù† Ø§Ù„Ø¥Ø®ØªÙŠØ§Ø± ÙˆØªØºÙŠÙŠØ± Ø§Ù„Ù…Ø¹Ø¯Ø§Øª Ø§Ù„ØªÙŠ ÙŠØ±ÙŠØ¯ÙˆÙ†Ù‡Ø§ ÙÙŠ ÙƒÙ„ Ù…Ø±Ø© ÙŠØ­ÙŠÙˆÙ† ÙÙŠÙ‡Ø§."</span><br>
                <br>
                <span style="color: #666666;">
                  ÙŠÙ…ÙƒÙ† Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† Ø§Ù„Ø¢Ù† Ø´Ø±Ø§Ø¡ Ø§Ù„Ø£Ø³Ù„Ø­Ø© Ùˆ Ø§Ù„Ø¹Ø¯Ø© Ø¨Ø§Ù„Ø±ØµÙŠØ¯ Ø§Ù„Ø°ÙŠ ÙŠÙ‚Ø¯Ù… ÙÙŠ ÙƒÙ„ Ø¬ÙˆÙ„Ø©.  <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ÙˆØ¶Ø¹ Ø§Ù„Ø±Ø£Ø³ Ø§Ù„ÙƒØ¨ÙŠØ±<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ØªØ¹Ø¯ÙŠÙ„ Ø¢Ù„ÙŠØ© Ø§Ù„Ù…Ø¸Ù„Ø© ÙˆØ§Ù„Ø¥Ø­ÙŠØ§Ø¡. </span><br>
                <span>"Ù†Ø­Ù† Ù†Ø¶ÙŠÙ Ø¢Ù„ÙŠØ§Øª Ø¬Ø¯ÙŠØ¯Ø© Ø¥Ù„Ù‰ ÙˆØ¶Ø¹ Ø§Ù„Ø±Ø£Ø³ Ø§Ù„ÙƒØ¨ÙŠØ± Ø­ØªÙ‰ ÙŠØªÙ…ÙƒÙ† Ø§Ù„Ù„Ø§Ø¹Ø¨ÙˆÙ† Ù…Ù† Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ø¥Ù†ØªØ´Ø§Ø± ÙˆØ§Ù†Ø¶Ù…Ø§Ù… Ø§Ù„Ù…Ø¹Ø±ÙƒØ© Ø¨Ø´ÙƒÙ„ Ø£Ø³Ø±Ø¹!"</span><br>
                <br>
                <span style="color: #666666;">
                  Ù„Ø¯Ù‰ Ø§Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† Ø§Ù„Ø¢Ù† Ø®ÙŠØ§Ø± Ø§Ù„Ø§Ø³ØªØ³Ù„Ø§Ù… ÙˆØ¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ø§Ù†ØªØ´Ø§Ø± Ø¹Ù†Ø¯ Ø³Ù‚ÙˆØ·Ù‡Ù…. <br>
                  Ø®ÙØ¶Ù†Ø§ Ø§Ø±ØªÙØ§Ø¹ Ø§Ù„Ù…Ø¸Ù„Ø© Ø­ØªÙ‰ ÙŠØªÙ…ÙƒÙ† Ø§Ù„Ù„Ø§Ø¹Ø¨ÙˆÙ† Ù…Ù† Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ø¯Ø®ÙˆÙ„ Ø¥Ù„Ù‰ Ø§Ù„Ù…Ø¹Ø±ÙƒØ© Ø¨Ø´ÙƒÙ„ Ø£Ø³Ø±Ø¹.  <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Ù…Ù„Ùƒ Ø§Ù„Ø³Ù„Ø§Ø­ (ÙØ±Ù‚Ø©)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ØªØ¹Ø¯ÙŠÙ„ Ø¢Ù„ÙŠØ© ØªØ±Ù‚ÙŠØ© Ø§Ù„Ø£Ø³Ù„Ø­Ø© Ùˆ Ø§Ù„Ø¢Ù† ÙŠØ¯Ø¹Ù… 4v4.  </span><br>
                <span>"ÙƒØ§Ù†Øª Ø¥Ø­Ø¯Ù‰ Ø£ÙƒØ¨Ø± Ø§Ù„Ù…Ø´ÙƒÙ„Ø§Øª Ø§Ù„ØªÙŠ ÙˆØ¬Ø¯Ù†Ø§Ù‡Ø§ Ù…Ø¹ Ù…Ù„Ùƒ Ø§Ù„Ø³Ù„Ø§Ø­ Ù‡ÙŠ Ø£Ù† Ø§Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† Ø£Ø±Ø§Ø¯ÙˆØ§ Ø§Ù„Ù„Ø¹Ø¨ Ù…Ø¹ Ø£ØµØ¯Ù‚Ø§Ø¦Ù‡Ù…ØŒ Ø­ØªÙ‰ Ù„Ùˆ ÙƒØ§Ù†ÙˆØ§ ÙÙŠ ÙØ±ÙŠÙ‚ Ø§Ù„Ø¹Ø¯Ùˆ. Ù†Ø¶ÙŠÙ 4v4 Ø¥Ù„Ù‰ Ù…Ù„Ùƒ Ø§Ù„Ø³Ù„Ø§Ø­ Ø­ØªÙ‰ ÙŠØªÙ…ÙƒÙ† Ø§Ù„Ù„Ø§Ø¹Ø¨ÙˆÙ† Ø§Ù„Ø¢Ù† Ù…Ù† Ø§Ù„Ø¯Ø®ÙˆÙ„ ÙÙŠ Ø´Ø±Ø§ÙƒØ© Ù…Ø¹ ÙØ±ÙŠÙ‚Ù‡Ù… Ù„Ù…ÙˆØ§Ø¬Ù‡Ø© 4v4!"</span><br>
                <br>
                <span style="color: #666666;">
                  4v4 Ù…Ø¯Ø¹ÙˆÙ… Ø§Ù„Ø¢Ù†. <br>
                  ÙŠÙ…ÙƒÙ† Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† Ø§Ù„Ø¢Ù† Ø§Ø®ØªÙŠØ§Ø± "ØªØ®Ø·ÙŠ" Ø³Ù„Ø§Ø­ Ø¥Ø°Ø§ Ø®Ø³Ø±ÙˆØ§ 3 Ù…Ø¹Ø§Ø±Ùƒ Ù…ØªØªØ§Ù„ÙŠØ© Ø£Ùˆ Ø¥Ø°Ø§ ÙƒØ§Ù† ØªÙ‚Ø¯Ù…Ù‡Ù… Ù…ØªØ£Ø®Ø±Ù‹Ø§ Ø¨Ø´ÙƒÙ„ ÙƒØ¨ÙŠØ± Ù…Ù‚Ø§Ø±Ù†Ø© Ø¨Ø§Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† Ø§Ù„Ø¢Ø®Ø±ÙŠÙ†. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Ø§Ù„Ø´Ø®ØµÙŠØ§Øª ÙˆØ§Ù„Ø­ÙŠÙˆØ§Ù†Ø§Øª Ø§Ù„Ø£Ù„ÙŠÙØ©</p>
          <ul>
            <li>
              <span>Ø´Ø®ØµÙŠØ© Ø¬Ø¯ÙŠØ¯Ø© - Ù„ÙˆÙƒÙˆØ«Ø§<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ù…ØªÙˆÙØ± ÙÙŠ Ù…ØªØ¬Ø± ÙØ±ÙŠ ÙØ§ÙŠØ±</span><br>
                <span>"Ù‡Ù„ Ø£Ù†Øª Ù…Ø³ØªØ¹Ø¯ Ù„Ø§Ù†ØªØµØ§Ø± Ø«Ù„Ø§Ø«ÙŠØŸ"</span><br>
                <br>
                <span style="color: #666666;">
                  Ø§Ù„Ø¥Ù†ØªØµØ§Ø± Ø§Ù„Ø«Ù„Ø§Ø«ÙŠ: ÙƒÙ„ Ù‚ØªÙ„ ÙŠØ²ÙŠØ¯ Ø§Ù„Ø­Ø¯ Ø§Ù„Ø£Ù‚ØµÙ‰ Ù„Ù„ØµØ­Ø© Ø¨Ù…Ù‚Ø¯Ø§Ø± {8/10/12/14/16/18}ØŒ Ø­ØªÙ‰ 35. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Ø­ÙŠÙˆØ§Ù†Ø§Øª Ø£Ù„ÙŠÙØ© Ø¬Ø¯ÙŠØ¯Ø© - Ø§Ù„Ø³ÙŠØ¯ ÙˆØ§Ø¬Ø±<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ù‚Ø±ÙŠØ¨Ø§Ù‹! </span><br>
                <span>â€œÙ‡Ù„ Ø³Ø¦Ù…Øª ÙˆØªØ¹Ø¨Øª Ù…Ù† Ø¹Ø¯Ù… ÙˆØ¬ÙˆØ¯ Ø­Ø§Ø¦Ø· Ø¬Ù„ÙˆØŸ Ø³ÙŠØ­Ø±Øµ Ø§Ù„Ø³ÙŠØ¯ ÙˆØ§Ø¬Ø± Ø¹Ù„Ù‰ Ø£Ù† ÙŠÙƒÙˆÙ† Ù„Ø¯ÙŠÙƒ Ø¯Ø§Ø¦Ù…Ù‹Ø§ Ø­Ø§Ø¦Ø· Ø¬Ù„Ùˆ ÙÙŠ Ø¬ÙŠØ¨Ùƒ!â€</span><br>
                <br>
                <span style="color: #666666;">
                  Ù„Ù…Ø¹Ø§Ù† Ø¬Ù„Ùˆ: Ø¹Ù†Ø¯Ù…Ø§ ÙŠÙƒÙˆÙ† Ù„Ø¯Ù‰ Ø§Ù„Ù„Ø§Ø¹Ø¨ Ø£Ù‚Ù„ Ù…Ù† [1/1/2] Ø­Ø§Ø¦Ø· Ù‚Ù„ÙˆØŒ ÙŠÙ…ÙƒÙ† Ù„Ù„Ø³ÙŠØ¯ ÙˆØ§Ø¬Ø± Ø¥Ù†ØªØ§Ø¬ Ù‚Ù†Ø¨Ù„Ø© ÙŠØ¯ÙˆÙŠØ© ÙˆØ§Ø­Ø¯Ø© Ù…Ù† ÙƒÙ„ [120/100/100] Ø«Ø§Ù†ÙŠØ©. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Ù‡Ø§ÙŠØ§ØªÙˆ "Ø§Ù„Ø¬Ù…Ø±" - Ù‚Ø±ÙŠØ¨Ø§Ù‹!<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ù‚Ø±ÙŠØ¨Ø§Ù‹!  </span><br>
                <span>"Ø´Ø®ØµÙŠØªÙ†Ø§ Ø§Ù„ØµØ­ÙˆØ© Ø§Ù„Ø«Ø§Ù†ÙŠØ© - Ù‡Ø§ÙŠØ§ØªÙˆ "Ø§Ù„Ø¬Ù…Ø±" Ø£ØµØ¨Ø­Øª Ù‡Ù†Ø§ Ø§Ø®ÙŠØ±Ø§Ù‹! Ø§Ù†Ø¶Ù… Ø¥Ù„Ù‰ Ø­Ø¯Ø« Ø§Ù„Ø°ÙƒØ±Ù‰ Ø§Ù„Ø«Ø§Ù„Ø«Ø© ÙŠÙˆÙ… 08/22 Ù„ØªØ­ØµÙ„ Ø¹Ù„ÙŠÙ‡ Ù…Ø¬Ø§Ù†Ù‹Ø§!"</span><br><br>
                <span style="color: #666666;">
                  ÙÙ† Ø§Ù„Ù…Ø³Ø§ÙŠÙ: ØªÙ‚Ù„ÙŠÙ„ Ø§Ù„Ø¶Ø±Ø± Ø§Ù„Ø£Ù…Ø§Ù…ÙŠ Ø¨Ù†Ø³Ø¨Ø© {20/25/30/35/40}Ùª Ù„Ù…Ø¯Ø© 3 Ø«ÙˆØ§Ù†ÙŠ. ÙØªØ±Ø© ØªÙ‡Ø¯Ø¦Ø©: 50 Ø«Ø§Ù†ÙŠØ©. Ø¥Ø·Ù„Ø§Ù‚ Ø§Ù„Ù†Ø§Ø± ÙŠÙ‚Ø§Ø·Ø¹ Ù‡Ø°Ù‡ Ø§Ù„Ù‚Ø¯Ø±Ø©.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Ø§Ù„Ù†Ø¸Ø§Ù…</p>
          <ul>
            <li>
              <span>Ù‚Ø§Ø¦Ù… Ø¨Ø£Ø¹Ù…Ø§Ù„ Ù‚Ø§Ø¦Ø¯ Ø§Ù„Ø±Ø§Ø¨Ø·Ø©<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ØªÙ…Øª Ø¥Ø¶Ø§ÙØ© Ù†Ø¸Ø§Ù… Ø¥Ø¯Ø§Ø±Ø© Ø¬Ø¯ÙŠØ¯</span><br>
                <span>"Ù…Ù† Ø§Ù„ØªØ­Ø¯ÙŠØ« Ø§Ù„Ø£Ø®ÙŠØ± ØŒ ØªÙ„Ù‚ÙŠÙ†Ø§ Ø§Ù„ÙƒØ«ÙŠØ± Ù…Ù† Ø§Ù„ØªØ¹Ù„ÙŠÙ‚Ø§Øª Ø§Ù„Ø¥ÙŠØ¬Ø§Ø¨ÙŠØ© Ø­ÙˆÙ„ Ø£Ø¯ÙˆØ§Øª Ø§Ù„Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¥Ø¶Ø§ÙÙŠØ© Ø§Ù„ØªÙŠ Ø§Ø¶ÙÙ†Ø§Ù‡Ø§ Ø¥Ù„Ù‰ Ø§Ù„Ø±Ø§Ø¨Ø·Ø©. ÙˆÙ…Ø¹ Ø°Ù„Ùƒ ØŒ ØªÙ„Ù‚ÙŠÙ†Ø§ Ù…Ù„Ø§Ø­Ø¸Ø§Øª ØªÙÙŠØ¯ Ø¨Ø£Ù† Ø£ÙƒØ¨Ø± Ù†Ù‚Ø·Ø© Ø£Ù„Ù… ÙÙŠ Ø¨Ø¹Ø¶ Ø§Ù„Ù†Ù‚Ø§Ø¨Ø§Øª Ù‡ÙŠ Ø¹Ù†Ø¯Ù…Ø§ Ù„Ø§ ÙŠÙƒÙˆÙ† Ù‚Ø§Ø¦Ø¯ Ø§Ù„Ù†Ù‚Ø§Ø¨Ø© Ù†Ø´Ø·Ù‹Ø§. Ø³Ù†Ø¶ÙŠÙ Ù†Ø¸Ø§Ù…Ù‹Ø§ Ù„Ø£Ø¹Ø¶Ø§Ø¡ Ø§Ù„Ù†Ù‚Ø§Ø¨Ø© Ù„Ù„ØªØµÙˆÙŠØª Ù„Ù‚Ø§Ø¦Ø¯ Ø§Ù„Ø±Ø§Ø¨Ø·Ø© Ù…Ø¤Ù‚Øª Ø­ØªÙ‰ ØªØ¨Ù‚Ù‰ Ø§Ù„Ù†Ù‚Ø§Ø¨Ø© Ù†Ø´Ø·Ø© Ø­ØªÙ‰ Ø¨Ø¯ÙˆÙ† Ù‚Ø§Ø¦Ø¯Ù‡Ø§ Ø§Ù„Ø£ØµÙ„ÙŠ."</span><br>
                <br>
                <span style="color: #666666;">
                  Ø¹Ù†Ø¯Ù…Ø§ ÙŠÙƒÙˆÙ† Ù‚Ø§Ø¦Ø¯ Ø§Ù„Ù†Ù‚Ø§Ø¨Ø© ØºÙŠØ± Ù†Ø´Ø· Ù„Ø£ÙƒØ«Ø± Ù…Ù† 30 ÙŠÙˆÙ…Ù‹Ø§ ØŒ Ø³ÙŠØªÙ„Ù‚ÙˆØ§ Ø£Ø¹Ø¶Ø§Ø¡ Ø§Ù„Ø±Ø§Ø¨Ø·Ø© ØªÙ†Ø¨ÙŠÙ‡ Ø¨Ø§Ù„ØªØµÙˆÙŠØª Ù„Ù‚Ø§Ø¦Ø¯ Ù†Ù‚Ø§Ø¨ÙŠ Ø¬Ø¯ÙŠØ¯. <br>
                  Ø¨Ø¹Ø¯ Ø§Ù„ØªØµÙˆÙŠØªØŒ Ø³ÙŠÙƒÙˆÙ† Ù„Ù‚Ø§Ø¦Ø¯ Ø§Ù„Ù†Ù‚Ø§Ø¨Ø© ÙƒÙ„ Ø§Ù„Ø³Ù„Ø·Ø§Øª ÙƒÙ‚Ø§Ø¦Ø¯ Ø§Ù„Ø±Ø§Ø¨Ø·Ø©  Ø­ØªÙ‰ ÙŠØ¹ÙˆØ¯ Ø§Ù„Ù‚Ø§Ø¦Ø¯ Ø§Ù„Ø£ØµÙ„ÙŠ Ø£Ùˆ Ø¥Ø°Ø§ ÙƒØ§Ù† Ù‚Ø§Ø¦Ø¯ Ø§Ù„Ø±Ø§Ø¨Ø·Ø© ØºÙŠØ± Ù†Ø´Ø· Ù„Ø£ÙƒØ«Ø± Ù…Ù† 7 Ø£ÙŠØ§Ù…. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Ø¥ØµÙ„Ø§Ø­ Ø§Ù„Ø£Ø®Ø·Ø§Ø¡ ÙˆØ§Ù„ØªØ­Ø³ÙŠÙ†Ø§Øª<br></span>
              <span class="m-news-detail-s">
                &nbsp;&nbsp;&nbsp;- ØµÙØ­Ø© Ù…Ù„Ø®Øµ Ù…Ø¨Ø§Ø±Ø§Ø© Ø¬Ø¯ÙŠØ¯Ø© Ù„ÙƒÙ„Ø§Ø´ Ø³ÙƒÙˆØ§Ø¯ Ùˆ Ù…Ù„Ùƒ Ø§Ù„Ø³Ù„Ø§Ø­. <br>
                &nbsp;&nbsp;&nbsp;- ÙŠÙ…ÙƒÙ† Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† Ø§Ù„Ø¢Ù† Ø¥Ø±Ø³Ø§Ù„ Ø±Ø§Ø¨Ø· Ø£Ù†Ø´Ø£Ù‡ Ø§Ù„Ù†Ø¸Ø§Ù… Ù„Ø¯Ø¹ÙˆØ© Ø§Ù„Ø§ØµØ¯Ù‚Ø§Ø¡ Ù„Ù„Ø§Ù†Ø¶Ù…Ø§Ù… Ø¥Ù„Ù‰ Ø­ÙÙ„Ø§ØªÙ‡Ù…. <br>
                &nbsp;&nbsp;&nbsp;-  ÙˆØ§Ø¬Ù‡Ø© Ø³Ù„Ø§Ø­ Ø£Ù…Ø«Ù„ Ø¯Ø§Ø®Ù„ Ø§Ù„Ù„Ø¹Ø¨Ø©. <br>
                &nbsp;&nbsp;&nbsp;- ÙŠÙ…ÙƒÙ† Ø§Ù„Ø¢Ù† Ù„Ù„Ù…Ø¬Ù‡Ø± Ø§Ù„Ø­Ø±Ø§Ø±ÙŠ Ø£Ù† ÙŠØ±Ù‰ Ù…Ù† Ø®Ù„Ø§Ù„ Ù‚Ù†Ø§Ø¨Ù„ Ø§Ù„Ø¯Ø®Ø§Ù†. <br>
                &nbsp;&nbsp;&nbsp;- ØªØ­Ø³ÙŠÙ† Ø¹Ø±Ø¶ Ø¯Ø¹ÙˆØ© Ø§Ù„Ø­Ø²Ø¨. <br>
                &nbsp;&nbsp;&nbsp;- ØªØ­Ø¯ÙŠØ« Ù…Ø­ØªÙˆÙŠØ§Øª Ø¬Ø¯ÙŠØ¯Ø© ÙÙŠ Ù…Ø¬Ù„Ø© ÙØ±ÙŠ ÙØ§ÙŠØ±. <br>
                &nbsp;&nbsp;&nbsp;- Ù…Ù‚Ø¯Ù…Ø© ÙˆØ¶Ø¹ Ø§Ù„Ù‚ØªØ§Ù„ Ø§Ù„Ù‚Ø±ÙŠØ¨ ØªØ­Ø³ÙŠÙ† Ø¹Ø±Ø¶ Ø§Ù„ÙÙŠØ¯ÙŠÙˆ. <br>
                &nbsp;&nbsp;&nbsp;- ØªØ­Ø³ÙŠÙ† Ø¹Ø±Ø¶ Ø§Ù„Ø¹Ù…Ù„ Ø§Ù„Ø¥Ø¶Ø§ÙÙŠ Ù„ÙˆØ¶Ø¹ Ø§Ù„ÙØ±ÙŠÙ‚ Ø§Ù„Ù…ØªÙØ¬Ø±. <br>
                &nbsp;&nbsp;&nbsp;- ØªØ­Ø³ÙŠÙ† Ø§Ù„Ø±Ø³ÙˆÙ… Ø§Ù„Ù…ØªØ­Ø±ÙƒØ© Ø¨Ø§Ù„Ù…Ø¸Ù„Ø§Øª. <br>
                &nbsp;&nbsp;&nbsp;- ØªÙ…Øª Ø¥Ø¶Ø§ÙØ© ÙƒØ§Ù„Ø§Ù‡Ø§Ø±ÙŠ Ø§Ù„Ø¢Ù† Ø¥Ù„Ù‰ Ø§Ù„ØºØ±Ù Ø§Ù„Ù…Ø®ØµØµØ©. <br>
                &nbsp;&nbsp;&nbsp;- ØªÙ… Ø¥ØµÙ„Ø§Ø­ Ø§Ù„Ø®Ù„Ù„ Ø­ÙŠØ« ÙŠÙ…ÙƒÙ† Ù„Ù„Ø§Ø¹Ø¨ÙŠÙ† Ù…ØºØ§Ø¯Ø±Ø© Ù…Ù†Ø·Ù‚Ø© Ø§Ù„ØªØ­Ø¶ÙŠØ± ÙÙŠ Ø¨Ø¹Ø¶ Ø§Ù„Ø£ÙˆØ¶Ø§Ø¹ Ù‚Ø¨Ù„ Ø§Ù†ØªÙ‡Ø§Ø¡ ÙˆÙ‚Øª Ø§Ù„ØªØ¬Ù…ÙŠØ¯. <br>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
        </div>
      </div>
    `,
    fr: `
      <div class="g-detail">
        <h2 class="c-h2">Notes de mise Ã  jour: Ã‰volution</h2>
        <div class="m-detail-time">Jul. 27, 2020</div>
        <div class="m-news-detail">
          <p class="orange">Clash Squad</p>
          <ul>
            <li>
              <span>Saison de Classement 2<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">DÃ©but de la saison 30/07 Ã  12h00 GMT +2</span><br>
                <span>Â«La saison 2 de Clash Squad est arrivÃ©e! Classez-vous jusqu'Ã  Or III ou plus pour recevoir le
                  cadeau exclusif de Clash Squad: le Golden G18! Â»</span><br>
                <br>
                <span style="color: #666666;">
                  Ajustement du magasin Clash Squad. <br>
                  Les statistiques de carriÃ¨re de Clash Squad peuvent dÃ©sormais Ãªtre consultÃ©es sous le profil personnel
                  du joueur.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Nouvel Ã©lÃ©ment - Horizaline (Kit de RÃ©animation)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Disponible en mode classique</span><br>
                <span>Â«Les joueurs ne sont gÃ©nÃ©ralement pas relancÃ©s par leurs coÃ©quipiers dans Clash Squad Ã  cause de
                  la bataille constante qui se dÃ©roule autour de la carte. Avec l'introduction de l'Horizaline, les
                  joueurs ont une autre chance de rejoindre la bataille une fois qu'ils ont Ã©tÃ© abattus. L'Horizaline
                  peut Ãªtre assez coÃ»teuse, mais elle peut certainement tourner en votre faveur. "</span><br>
                <br>
                <span style="color: #666666;">
                  L'Horizaline n'arrÃªtera pas le saignement ou les dÃ©gÃ¢ts des joueurs ou de la zone de jeu. <br>
                  Les joueurs peuvent restaurer la capacitÃ© de combat en utilisant le kit de rÃ©animation lorsqu'ils sont
                  abattus. <br>
                  Les joueurs seront ravivÃ©s avec 100 HP aprÃ¨s avoir utilisÃ© l'Horizaline. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Aide de la visÃ©e<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">RÃ©glage de l'aide de la visÃ©e dans Clash
                  Squad</span><br>
                <span>Â«Nous avons reÃ§u des plaintes selon lesque l'aide Ã  la visÃ©e donne actuellement la prioritÃ© aux
                  cibles qui sont abattues au lieu de celles qui sont encore en combat. Ce problÃ¨me peut Ãªtre
                  extrÃªmement ennuyeux dans Clash Squad oÃ¹ les joueurs s'engagent constamment dans des batailles. Nous
                  ajustons le mÃ©canisme pour que les joueurs puissent cibler les ennemis qui restent des menaces avant
                  de les Ã©liminer un par un. "</span><br>
                <br>
                <span style="color: #666666;">
                  L'aide de la visÃ©e donnera dÃ©sormais la prioritÃ© aux joueurs en combat (Clash Squad uniquement). <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">JouabilitÃ©</p>
          <ul>
            <li>
              <span>nouvelle Ã®le de dÃ©part- Â«La pisteÂ»<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Refonte de l'Ã®le de dÃ©part</span><br>
                <span>Â«Cela fait un moment que nous n'avons pas sorti une toute nouvelle Ã®le de dÃ©part. Jetez un Å“il et
                  dites-nous ce que vous ressentez! Â»</span><br>
                <br>
                <span style="color: #666666;">
                  Nouvelle Ã®le de dÃ©part: "La piste" maintenant disponible.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>MÃ©canisme accroupi et dÃ©tendu<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Protection contre les coups de tÃªte en
                  accroupi</span><br>
                <span>Â«Nous avons remarquÃ© que certains joueurs mettent en place des scripts pour frapper un tir Ã  la
                  tÃªte instantanÃ© en ne s'accroupissant pas trÃ¨s rapidement aprÃ¨s avoir pris la mesure. Puisque cette
                  action laisse les joueurs du cÃ´tÃ© rÃ©cepteur sans aucune chance de contre-jouer, nous allons ajouter un
                  affaiblissement mineur vers les dÃ©gÃ¢ts de tÃªte en ne s'accroupissant pas. Ce changement ne vise que
                  les joueurs qui abusent de cet exploit, il ne devrait pas affecter le jeu normal. Â»</span><br>
                <br>
                <span style="color: #666666;">
                  Headshot infligera des dÃ©gÃ¢ts rÃ©duits peu de temps aprÃ¨s s'Ãªtre rÃ©tractÃ© (0,85 s)<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Mise Ã  jour des vÃ©hicules<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">RÃ©glage de la vitesse du vÃ©hicule</span><br>
                <span>"Vous l'avez demandÃ© et nous le vous avons livrÃ©."</span><br>
                <br>
                <span style="color: #666666;">
                  RÃ©glage de la vitesse maximale pour les vÃ©hicules suivants: <br>
                  &nbsp;&nbsp;&nbsp;- Moto: 130 km / h <br>
                  &nbsp;&nbsp;&nbsp;- Jeep: 110 km / h <br>
                  &nbsp;&nbsp;&nbsp;- TuTu: 100 km / h <br>
                  &nbsp;&nbsp;&nbsp;- SUV: 120 km / h <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>MÃ©canisme de conduite<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Affichage de la vitesse optimisÃ© et effets de vitesse
                  maximale</span><br>
                <span>Â«Ã€ mesure que nous augmentons la vitesse de la plupart des vÃ©hicules, nous ajoutons Ã©galement un
                  mouvement de camÃ©ra qui rendra la conduite plus confortable. AprÃ¨s la mise Ã  jour, la camÃ©ra sera
                  lÃ©gÃ¨rement agrandie lorsque les joueurs atteindront la vitesse maximale du vÃ©hicule. Cela devrait
                  rendre l'expÃ©rience de conduite plus fluide puisque le conducteur pourra voir plus d'objets et
                  d'obstacles Ã  venir pendant la conduite. Â»</span><br>
                <br>
                <span style="color: #666666;">
                  Ajout d'un affichage plus prÃ©cis de la vitesse du vÃ©hicule. <br>
                  La camÃ©ra effectuera maintenant un lÃ©ger zoom arriÃ¨re lorsque le vÃ©hicule est Ã  la vitesse maximale.
                  <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Planeur<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">La vitesse de descente augmente au-dessus d'une
                  certaine hauteur</span><br>
                <span>"Nous apportons des modifications aux planeurs, car les joueurs les utilisent comme un objet pour
                  se rendre Ã  des endroits inaccessibles au lieu de les utiliser comme un outil pour atterrir de haute
                  altitude en toute sÃ©curitÃ©."</span><br>
                <br>
                <span style="color: #666666;">
                  Les joueurs descendront dÃ©sormais plus vite lorsqu'ils auront plus de 38 m d'altitude.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>RÃ©gÃ©nÃ©ration de la santÃ©<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ajout d'une limite sur la quantitÃ© de santÃ© qui peut
                  Ãªtre restaurÃ©e par seconde.</span><br>
                <span>Â«Avec l'introduction de nouveaux mÃ©canismes et compÃ©tences de rÃ©gÃ©nÃ©ration de la santÃ©, il est
                  venu Ã  notre attention que certains joueurs peuvent survivre en dehors de la zone de jeu bien plus
                  longtemps que prÃ©vu en utilisant toutes les capacitÃ©s et objets de guÃ©rison Ã  la fois. Nous supprimons
                  une partie de ce pouvoir pour Ã©viter que les joueurs n'attrapent des BOOYAH en se cachant en dehors de
                  la zone de jeu. "</span><br>
                <br>
                <span style="color: #666666;">
                  Les joueurs ne peuvent plus recevoir de soins Ã  plus de 50 HP / s.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Arme et Ã©quilibre</p>
          <ul>
            <li>
              <span>Nouvelle arme - AUG<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Disponible en Classique et Clash Squad (Classement &
                  Classique)</span><br>
                <span>Â«Cela fait un moment que nous n'avons pas sorti une RA dans Free Fire. L'AUG est une option
                  extrÃªmement agile et flexible que les joueurs peuvent choisir dans le jeu. La lunette 2x prÃ©-attachÃ©e
                  permet aux joueurs de s'engager immÃ©diatement dans des combats de milieu de gamme et le chargeur de 35
                  coups est extrÃªmement utile dans des situations Ã  courte portÃ©e. Essayez l'AUG avec une arme Ã  longue
                  portÃ©e pour maximiser son efficacitÃ©. Â»</span><br>
                <br>
                <span style="color: #666666;">
                  Rapport de dÃ©gÃ¢ts: 31 <br>
                  CapacitÃ© du chargeur: 35 <br>
                  Cadence de tir: .147 <br>
                  LivrÃ© avec une lunette 2x prÃ©-attachÃ©e qui est interchangeable avec d'autres lunettes. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>AK<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Disponible dans tous les modes</span><br>
                <span>Â«Bien que l'AK soit l'une des armes prÃ©fÃ©rÃ©es de tous les temps, elle est certainement
                  sous-performante par rapport aux meilleurs AR du jeu. Nous rÃ©tablissons un peu la puissance de l'AK en
                  augmentant lÃ©gÃ¨rement sa puissance d'arrÃªt.</span><br>
                <br>
                <span style="color: #666666;">
                  Ratio de dÃ©gÃ¢ts: 38 <br>
                  DÃ©gÃ¢ts minimum: 14 <br>
                  Cadence de tir: -3% <br>
                  Coups prÃ©cis: 2 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>FAMAS<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Disponible dans tous les modes</span><br>
                <span>Â«Actuellement, le FAMAS n'est pas assez agile pour Ãªtre dans la premiÃ¨re liste des AR. Nous lui
                  donnons une vitesse de dÃ©placement supplÃ©mentaire pour que les joueurs puissent se dÃ©placer plus
                  facilement entre les rafales de 3 rounds. "</span><br>
                <br>
                <span style="color: #666666;">
                  Vitesse de dÃ©placement pendant le tir: + 10%<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>M249<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Disponible dans tous les modes</span><br>
                <span>plus faibles actuellement. Nous lui donnons un buff majeur avec ce patch afin qu'il puisse
                  supprimer efficacement le feu. "</span><br>
                <br>
                <span style="color: #666666;">
                  Tirs prÃ©cis: 12 <br>
                  DÃ©gÃ¢ts minimum: 21 <br>
                  Recul maximum: -18% <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>SPAS12<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Disponible dans tous les modes</span><br>
                <span>Â«Bien que le SPAS soit l'un des principaux prÃ©tendants en termes de dÃ©gÃ¢ts dans la plage de points
                  noirs, la forte diminution des dÃ©gÃ¢ts est la raison pour laquelle le SPAS fonctionne bien moins bien
                  que les M1887 et M1014. Nous donnons au SPAS un petit buff ce patch pour combler son Ã©cart avec les
                  autres SG. Â»</span><br>
                <br>
                <span style="color: #666666;">
                  DÃ©gÃ¢ts minimum: 7<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>XM8<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Disponible dans tous les modes</span><br>
                <span>Â«Le XM8 est en tÃªte de liste AR depuis un certain temps dÃ©jÃ . L'une des raisons est que cette arme
                  est si flexible et facile Ã  utiliser. Nous apportons quelques ajustements au XM8 ce patch afin qu'il
                  ait une courbe d'apprentissage plus approfondie. "</span><br>
                <br>
                <span style="color: #666666;">
                  Coups prÃ©cis: 3 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Mode de jeu</p>
          <ul>
            <li>
              <span>PrÃ©rÃ©glages d'armes<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Disponible en TDM, Kill ConfirmÃ© et
                  RÃ©volution</span><br>
                <span>Â«Nous avons reÃ§u des commentaires des joueurs selon lesquels les prÃ©rÃ©glages d'armes sont trop
                  restrictifs car ils ne fournissent que 4 ensembles d'armes. Nous introduisons un nouveau menu de
                  sÃ©lection d'armes afin que tous les joueurs puissent choisir et changer l'Ã©quipement qu'ils veulent Ã 
                  chaque fois qu'ils reviennent. "</span><br>
                <br>
                <span style="color: #666666;">
                  Les joueurs peuvent dÃ©sormais acheter des armes et des Ã©quipements avec des crÃ©dits fournis Ã  chaque
                  tour. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Mode grosse tÃªte<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Parachute et rÃ©glage du mÃ©canisme de
                  relance.</span><br>
                <span>"Nous ajoutons de nouveaux mÃ©canismes au mode Big Head afin que les joueurs puissent se redÃ©ployer
                  et rejoindre la bataille plus rapidement!"</span><br>
                <br>
                <span style="color: #666666;">
                  Les joueurs ont dÃ©sormais la possibilitÃ© d'abandonner et de se redÃ©ployer lorsqu'ils sont abattus.<br>
                  Abaissement de l'altitude du parachutisme pour que les joueurs puissent reprendre la bataille plus
                  rapidement. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Roi Des Armes (Squad)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Ajustement du mÃ©canisme de mise Ã  niveau des armes et
                  prend dÃ©sormais en charge 4v4.</span><br>
                <span>Â«L'un des plus gros problÃ¨mes que nous ayons rencontrÃ©s Ã©tait que les joueurs voulaient jouer avec
                  leurs amis, mÃªme s'ils faisaient partie de l'Ã©quipe ennemie. Nous ajoutons une touche 4v4 Ã  Gun King
                  afin que les joueurs puissent dÃ©sormais s'associer Ã  leur Ã©quipe pour une confrontation 4v4!
                  "</span><br>
                <br>
                <span style="color: #666666;">
                  4v4 est dÃ©sormais pris en charge. <br>
                  Les joueurs peuvent dÃ©sormais choisir de Â«sauterÂ» une arme s'ils perdent 3 batailles consÃ©cutives
                  d'affilÃ©e ou si leur progression est significativement en retard par rapport aux autres joueurs. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">Personnages et animaux de compagnie</p>
          <ul>
            <li>
              <span>Nouveau personnage - Luqueta<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;"> Disponible dans Free Fire Store.</span><br>
                <span>Â«ÃŠtes-vous prÃªt pour un hat trick?â€</span><br>
                <br>
                <span style="color: #666666;">
                  Hat Trick: chaque kill augmente le maximum de HP de {8/10/12/14/16/18}, jusqu'Ã  35.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Nouvel animal de compagnie - Mr. Waggor<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">BientÃ´t disponible!</span><br>
                <span>Â«ÃŠtes-vous fatiguÃ© de ne pas avoir de murs de gloo? Mr. Waggor veillera Ã  ce que vous ayez
                  toujours un mur gloo dans votre poche!</span><br>
                <br>
                <span style="color: #666666;">
                  Smooth Gloo: Lorsqu'un joueur possÃ¨de moins de [1/1/2] grenades Gloo Wall, M. Waggor peut produire 1
                  grenade Gloo Wall toutes les [120/100/80] secondes. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Hayato Â«EveilÂ» - BientÃ´t!<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">BientÃ´t disponible!</span><br>
                <span>Â«Notre deuxiÃ¨me personnage d'Ã©veil- Hayato est enfin lÃ ! Rejoignez l'Ã©vÃ©nement du 3e anniversaire
                  le 22/08 pour l'obtenir GRATUITEMENT! Â»</span><br><br>
                <span style="color: #666666;">
                  Art des lames: rÃ©duit les dÃ©gÃ¢ts frontaux de {40/45/50/55/60}% pendant 6s. CD: 50s. Le tir interrompra
                  cette capacitÃ©.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">SystÃ¨me</p>
          <ul>
            <li>
              <span>Chef de guilde par intÃ©rim<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Nouveau systÃ¨me de gestion ajoutÃ© </span><br>
                <span>Â«Depuis la derniÃ¨re mise Ã  jour, nous avons reÃ§u de nombreux retours positifs sur les outils de
                  gestion supplÃ©mentaires que nous avons ajoutÃ©s Ã  la guilde. Cependant, nous avons reÃ§u des
                  commentaires selon lesquels le plus gros problÃ¨me de certaines guildes est lorsque le chef de guilde
                  n'est plus actif. Nous allons ajouter un systÃ¨me permettant aux membres de la guilde de voter pour un
                  chef de guilde temporaire afin que la guilde puisse rester active mÃªme sans son chef d'origine.
                  "</span><br>
                <br>
                <span style="color: #666666;">
                  Lorsque le chef de guilde est inactif pendant plus de 30 jours, les membres de la guilde recevront une
                  notification pour voter pour un nouveau chef de guilde par intÃ©rim. <br>
                  Une fois votÃ©, le chef de guilde par intÃ©rim aura toute l'autoritÃ© du chef de guilde jusqu'au retour
                  du chef d'origine ou si le chef de guilde par intÃ©rim est inactif pendant plus de 7 jours. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>Correction des porblemes et optimisations<br></span>
              <span class="m-news-detail-s">
                &nbsp;&nbsp;&nbsp;- Nouvelle page de rÃ©sumÃ© de match pour Clash Squad et Rois des Armes. <br>
                &nbsp;&nbsp;&nbsp;- Les joueurs peuvent dÃ©sormais envoyer un lien gÃ©nÃ©rÃ© par le systÃ¨me pour inviter des
                amis Ã  rejoindre leur groupe. <br>
                &nbsp;&nbsp;&nbsp;- HUD d'arme optimisÃ© dans le jeu. <br>
                &nbsp;&nbsp;&nbsp;- La lunette thermique peut dÃ©sormais voir Ã  travers les grenades fumigÃ¨nes. <br>
                &nbsp;&nbsp;&nbsp;- Optimisation de l'affichage des invitations Ã  une fÃªte. <br>
                &nbsp;&nbsp;&nbsp;- Mise Ã  jour du nouveau contenu dans le FF Journal. <br>
                &nbsp;&nbsp;&nbsp;- Optimisation de l'affichage vidÃ©o d'introduction au mode combat rapprochÃ©. <br>
                &nbsp;&nbsp;&nbsp;- Optimisation de l'affichage des heures supplÃ©mentaires pour le mode TDM. <br>
                &nbsp;&nbsp;&nbsp;- Optimisation de l'animation de parachutisme. <br>
                &nbsp;&nbsp;&nbsp;- Kalahari a maintenant Ã©tÃ© ajoutÃ© aux rooms personnalisÃ©es. <br>
                &nbsp;&nbsp;&nbsp;- Correction d'un bug oÃ¹ les joueurs pouvaient quitter la zone de prÃ©paration dans
                certains modes avant la fin du temps. <br>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
        </div>
      </div>
    `,
    zh: `
      <div class="g-detail">
        <h2 class="c-h2">æ›´æ–°æ—¥èªŒ: ä¸‰å‘¨å¹´é€²åŒ–</h2>
        <div class="m-detail-time">Jul. 27, 2020</div>
        <div class="m-news-detail">
          <p class="orange">åœ˜éšŠçªè¥²</p>
          <ul>
            <li>
              <span>ç¬¬äºŒè³½å­£æŽ’ä½è³½å³å°‡é–‹æˆ°<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">è³½å­£é–‹å§‹æ™‚é–“ 08/01èµ· æ¯å‘¨å…­æ—¥æ—©ä¸Š 10:00 ~ éš”æ—¥å‡Œæ™¨ 01:59</span><br>
                <span>åœ˜éšŠçªè¥²æŽ’ä½è³½ç¬¬äºŒè³½å­£æ­£å¼å±•é–‹ï¼ä¸¦ä¸”å¸¶ä¾†äº†å…¨æ–°çš„è³½å­£çŽå‹µï¼Œè³½å­£å…§é”åˆ°é‡‘ç‰ŒIIIå³å¯å¸¶å›žå°ˆå±¬çŽå‹µ - é»ƒé‡‘G18ï¼</span><br>
                <br>
                <span style="color: #666666;">
                  åœ˜éšŠçªè¥²å•†åº—èª¿æ•´ <br>
                  å€‹äººè³‡æ–™ä¸­å¯æŸ¥çœ‹åœ˜éšŠçªè¥²çš„ç”Ÿæ¶¯ç´€éŒ„ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>æ–°é“å…· - å¼·å¿ƒé‡ (è‡ªæ•‘ç‰©å“)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">åœ˜éšŠçªè¥²ä¼‘é–’æ¨¡å¼ç™»å ´</span><br>
                <span>ç”±æ–¼åœ˜éšŠçªè¥²æ˜¯é«˜å¼·åº¦çš„æˆ°é¬¥ç¢°æ’žï¼ŒçŽ©å®¶é€šå¸¸åœ¨å€’åœ°å¾Œå¾ˆé›£é‡åˆ°æœ‰éšŠå‹æ‹¯æ•‘çš„ç‹€æ³ç™¼ç”Ÿã€‚éš¨è‘—å¼·å¿ƒé‡çš„æŽ¨å‡ºï¼ŒçŽ©å®¶ä¸€æ—¦è¢«æ“Šåˆ°å¾Œä»æœ‰æ©Ÿæœƒèƒ½å¤ è‡ªæˆ‘æ•‘åŠ©ã€‚å¼·å¿ƒé‡çš„åƒ¹æ ¼é›–ç„¶ä¸ä½Žï¼Œä½†è‚¯å®šå¯ä»¥ä½¿ä½ å—ç›Šã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  ä½¿ç”¨å¼·å¿ƒé‡çš„éŽç¨‹ä¸­ä»æœƒå—åˆ°æµè¡€å‚·å®³ã€æ¯’åœˆå‚·å®³ä»¥åŠæ”»æ“Šå‚·å®³ <br>
                  å€’åœ°æ™‚ï¼Œå¯é€éŽå¼·å¿ƒé‡è‡ªæˆ‘æ•‘åŠ©ï¼Œè¿”å›žæˆ°å ´ <br>
                  ä½¿ç”¨å¼·å¿ƒé‡å¾Œï¼ŒçŽ©å®¶å¯ä»¥ä»¥100HPçš„ç‹€æ…‹é‡å›žæˆ°å ´ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>è¼”åŠ©çž„æº–<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">åœ˜éšŠçªè¥²è¼”åŠ©çž„æº–åŠŸèƒ½èª¿æ•´</span><br>
                <span>æˆ‘å€‘ä¸æ–·çš„æ”¶åˆ°çŽ©å®¶çš„æŠ±æ€¨ï¼Œç”±æ–¼è¼”åŠ©çž„æº–ç³»çµ±ç›®å‰ç‚ºå„ªå…ˆçž„æº–å·²å€’åœ°çš„ç›®æ¨™ï¼Œè€Œä¸æ˜¯äººåœ¨æˆ°é¬¥ä¸­çš„ç›®æ¨™ã€‚ç”±æ–¼åœ˜éšŠçªè¥²ç‚ºå¿«é€Ÿçš„æ•™æˆ°æ¨¡å¼ï¼Œé€™æ¨£çš„ç‹€æ³æœ‰å¯èƒ½æœƒéžå¸¸çš„ç…©äººï¼Œå› æ­¤æˆ‘å€‘å°‡èª¿æ•´æ©Ÿåˆ¶ï¼Œä½¿å¾—çŽ©å®¶å¯ä»¥å°‡ä»æœ‰å¨è„…æ€§çš„æ•µäººä½œç‚ºç›®æ¨™ï¼Œç„¶å¾Œé€ä¸€è§£æ±ºã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  iè¼”åŠ©çž„æº–åŠŸèƒ½å°‡å„ªå…ˆçž„æº–è™•æ–¼æˆ°é¬¥ç‹€æ…‹ä¸­çš„çŽ©å®¶(åœ˜éšŠçªè¥²é™å®š)<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">éŠæˆ²å…§å®¹æ›´æ–°</p>
          <ul>
            <li>
              <span>å‡ºç”Ÿå³¶æ–°å ´æ™¯ - è·‘é“<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">å‡ºç”Ÿå³¶æ›´æ–°</span><br>
                <span>å…¨æ–°çš„å‡ºç”Ÿå³¶å ´æ™¯å‹•ç™»å ´ï¼Œå¿«ä¾†çœ‹çœ‹æ›´æ–°å¾Œçš„å‡ºç”Ÿå³¶æ˜¯å¦æ›´åŠ çš„æœ‰è¶£å§ï¼ä¹Ÿè®“æˆ‘å€‘çŸ¥é“ä½ çš„æ„Ÿæƒ³å–”ï¼</span><br>
                <br>
                <span style="color: #666666;">
                  å‡ºç”Ÿå³¶: è·‘é“ç™»å ´<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>è¹²ä¸‹èµ·ç«‹çˆ†é ­æ©Ÿåˆ¶èª¿æ•´<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">è¹²ä¸‹çˆ†é ­ä¿è­·æ©Ÿåˆ¶</span><br>
                <span>æˆ‘å€‘ç™¼ç¾æœ‰éƒ¨åˆ†çŽ©å®¶åˆ©ç”¨éŠæˆ²å…§è¼”åŠ©çž„æº–çš„æ©Ÿåˆ¶ï¼Œé€éŽè¹²ä¸‹å¾Œèµ·ç«‹çš„æº–å¿ƒæ™ƒå‹•æ™‚é–“è½å·®ï¼ŒåŠ ä¸Šå…¶ä»–è¼”åŠ©çš„æ–¹å¼å¿«é€Ÿé€²è¡Œé ­éƒ¨å°„æ“Šï¼Œç”±æ–¼é€™æ¨£çš„ç‹€æ³æœƒä½¿å¾—å°æ‰‹å®Œå…¨æ²’æœ‰åæ“Šçš„æ©Ÿæœƒã€‚å› æ­¤æˆ‘å€‘å°‡ç•¥ç‚ºèª¿æ•´è¹²ä¸‹å¾Œç«™ç«‹æ¥µçŸ­æ™‚é–“å…§çš„çˆ†é ­å‚·å®³ã€‚æ­¤é …èª¿æ•´åƒ…é‡å°æ¿«ç”¨æ­¤æ¼æ´žçš„çŽ©å®¶ï¼Œä¸å½±éŸ¿æ­£å¸¸éŠçŽ©çš„çŽ©å®¶ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  è¹²ä¸‹å¾Œç«™ç«‹å°„æ“Šï¼Œ0.85 ç§’å…§çˆ†é ­å°„æ“Šå‚·å®³é™ä½Ž<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>è¼‰å…·èª¿æ•´<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">è¼‰å…·ç§»å‹•é€Ÿåº¦èª¿æ•´</span><br>
                <span>ä½ å€‘çš„å¿ƒè²æˆ‘å€‘è½åˆ°äº†ï¼</span><br>
                <br>
                <span style="color: #666666;">
                  ä»¥ä¸‹è¼‰å…·çš„æœ€é«˜é€Ÿåº¦å°‡æœƒèª¿æ•´<br>
                  &nbsp;&nbsp;&nbsp;- é‡æ©Ÿ: <del>120km/h</del>->130km/h <br>
                  &nbsp;&nbsp;&nbsp;- å‰æ™®è»Š: <del>100km/h</del>-> 110km/h <br>
                  &nbsp;&nbsp;&nbsp;- å˜Ÿå˜Ÿè»Š: <del>90km/h</del>-> 100km/h <br>
                  &nbsp;&nbsp;&nbsp;- æ°´é™¸å…©ç”¨è»Š: <del>130km/h</del>->120km/h <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>é§•é§›æ©Ÿåˆ¶<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">å„ªåŒ–è¼‰å…·é”åˆ°æœ€é«˜é€Ÿåº¦æ™‚çš„ç‰¹æ•ˆ</span><br>
                <span>é™¤äº†å¤§å¤šæ•¸è¼‰å…·çš„æœ€é«˜é€Ÿåº¦å¢žåŠ ï¼Œæˆ‘å€‘é‚„å¦å¤–èª¿æ•´äº†è¼‰å…·çš„è¦–è§’é‹ä½œï¼Œé€™æ¨£çš„æ”¹å‹•å¯ä»¥è®“ä½¿ç”¨è¼‰å…·æ™‚èƒ½å¤ æ›´åŠ çš„èˆ’é©ã€‚å¦å¤–ç•¶è»Šè¼›é”åˆ°æœ€é«˜é€Ÿåº¦æ™‚ï¼Œè¦–è§’å°‡æœƒç¨å¾®æ”¾å¤§ï¼Œé€™å°‡ä½¿å¾—é§•é§›é«”é©—æ›´ä½³çš„é †æš¢ï¼Œä¸¦ä¸”èƒ½å¤ æ›´æ¸…æ¥šçš„çœ‹åˆ°çœ¼å‰çš„éšœç¤™ç‰©ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  å¢žåŠ æ›´æº–ç¢ºçš„è»Šè¼›é€Ÿåº¦é¡¯ç¤º <br>
                  ç•¶åŠ é€Ÿåˆ°æœ€é«˜é€Ÿåº¦æ™‚ï¼Œè¦–è§’æœƒç¨å¾®æ”¾å¤§ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>æ»‘ç¿”ç¿¼<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">è¶…éŽä¸€å®šé«˜åº¦ï¼Œä¸‹é™çš„é€Ÿåº¦å¢žåŠ </span><br>
                <span>æ»‘ç¿”ç¿¼çš„è¨­è¨ˆä½œç”¨æ˜¯è®“çŽ©å®¶èƒ½å¤ å®‰å…¨çš„å¾žé«˜ç©ºä¸­é™è½ï¼Œä»¥åŠä½œç‚ºå¿«é€Ÿç§»å‹•çš„æ‰‹æ®µï¼Œä½†ç”±æ–¼éŠæˆ²ä¸­å‡ºç¾åˆ©ç”¨æ»‘ç¿”ç¿¼åˆ°é”ä¸€äº›ç„¡æ³•æ­£å¸¸æŠµé”çš„åœ°é»žï¼Œå› æ­¤æˆ‘å€‘é‡å°æ»‘ç¿”ç¿¼é€²è¡Œä¸€äº›èª¿æ•´ï¼Œè®“éŠæˆ²æ›´ä½³çš„å…¬å¹³ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  ç•¶æµ·æ‹”é«˜åº¦è¶…éŽ 38 å…¬å°ºæ™‚ä½¿ç”¨æ»‘ç¿”ç¿¼ï¼Œæ»‘ç¿”ç¿¼ä¸‹é™çš„é€Ÿåº¦æœƒåŠ å¿« <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ç”Ÿå‘½å›žå¾©æ©Ÿåˆ¶ <br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">æ¯ç§’å¯æ¢å¾©çš„ç”Ÿå‘½å€¼é™åˆ¶ </span><br>
                <span>éš¨è‘—éŠæˆ²ä¸­æ¢å¾©ç”Ÿå‘½å€¼çš„é“å…·ä»¥åŠæŠ€èƒ½ä¸æ–·å¢žåŠ ï¼Œæˆ‘å€‘ç™¼ç¾æœ‰äº›å®¶é€éŽåŒæ™‚ä½¿ç”¨æ‰€æœ‰çš„æ²»ç™‚èƒ½åŠ›ä»¥åŠç‰©å“ï¼Œé€²è€Œå‡ºç¾æ¯”é æœŸä¸­é‚„è¦é•·çš„ç”Ÿå­˜æ™‚é–“ï¼Œå› æ­¤æˆ‘å€‘é€éŽå°‡å›žå¾©é€Ÿåº¦ä¸Šé™çš„é™åˆ¶ï¼Œé¿å…çŽ©å®¶èº²åœ¨å®‰å…¨å€å¤–è€Œç²å‹çš„ç‹€æ³</span><br>
                <br>
                <span style="color: #666666;">
                  çŽ©å®¶çš„ç”Ÿå‘½å›žå¾©é€Ÿåº¦æ¯ç§’ç„¡æ³•è¶…éŽå›žå¾© 50 ç”Ÿå‘½ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">æ­¦å™¨å¹³è¡¡èª¿æ•´</p>
          <ul>
            <li>
              <span>æ–°æ­¦å™¨ - AUG<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ç¶“å…¸æ¨¡å¼ä»¥åŠåœ˜éšŠçªè¥²ã€åœ˜éšŠçªè¥²æŽ’ä½è³½æŽ¨å‡º</span><br>
                <span>è·é›¢ä¸Šä¸€æ¬¡ Free Fire æŽ¨å‡ºçš„çªæ“Šæ­¥æ§å·²ç¶“æœ‰ä¸€æ®µçš„æ™‚é–“ï¼ŒAUGæ˜¯å–œå¥½éˆæ´»ç§»å‹•é¢¨æ ¼çŽ©å®¶çš„å„ªè³ªé¸æ“‡ã€‚è‡ªå¸¶ 2 å€çž„æº–é¡ï¼Œå¯ç«‹å³é€²è¡Œä¸­è·é›¢çš„æˆ°é¬¥ï¼Œæ­¤å¤– 35 ç™¼æ”œå½ˆé‡åœ¨è¿‘è·é›¢çš„ç‹€æ³ä¸‹éžå¸¸å¯é ï¼Œå–œå¥½éˆå·§é¢¨æ ¼çš„çŽ©å®¶å¯ä»¥å˜—è©¦çœ‹çœ‹ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  å‚·å®³: 31 <br>
                  å½ˆåŒ£å®¹é‡: 35 <br>
                  å°„é€Ÿ: 0.147 <br>
                  è‡ªå¸¶ 2 å€çž„æº–é¡ï¼Œä¹Ÿå¯æ›´æ›å…¶ä»–çž„æº–é¡ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>AK47<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">å…¨æ¨¡å¼é€šç”¨</span><br>
                <span>é›–ç„¶ AK47 æ˜¯éŠæˆ²ä¸­æœ€å—æ­¡è¿Žçš„æ§æ¢°ä¹‹ä¸€ï¼Œä½†èˆ‡ä¸€äº›é ‚ç´šçš„çªæ“Šæ­¥æ§ç›¸æ¯”ä»æœ‰ä¸è¶³çš„åœ°æ–¹ï¼Œå› æ­¤æˆ‘å€‘å°‡é€éŽèª¿æ•´å…¶åˆ¶å‹•åŠ›ï¼Œå¦ AK47 æœ‰æ›´å¥½çš„æˆ°è¡“ç™¼æ®</span><br>
                <br>
                <span style="color: #666666;">
                  å‚·å®³: <del>37</del>->38 <br>
                  æœ€ä½Žå‚·å®³: <del>12</del>->14 <br>
                  å°„é€Ÿ: -3% <br>
                  ç²¾æº–å°„æ“Š: <del>1ç™¼</del>->2ç™¼ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>FAMAS<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">å…¨æ¨¡å¼é€šç”¨</span><br>
                <span>ç›®å‰ FAMAS èˆ‡å…¶ä»–é ‚ç´šçªæ“Šæ­¥æ§ç›¸æ¯”ï¼Œå®šä½ä¸å¤ æ˜Žç¢ºï¼Œå› æ­¤æˆ‘å€‘å°‡å¢žåŠ å…¶å°„æ“Šé–“ç§»å‹•é€Ÿåº¦ï¼Œä»¤å…¶ä¸‰é€£ç™¼ä¹‹å¾Œå¯ä»¥å¿«é€Ÿç§»å‹•è‡³ä¸‹ä¸€å€‹é–‹ç«é»žã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  å°„æ“Šé–“ç§»å‹•é€Ÿåº¦: +10%<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>M249<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">å…¨æ¨¡å¼é€šç”¨</span><br>
                <span>M249 ç„¡ç–‘æ˜¯ç›®å‰ç©ºæŠ•é™å®šçš„æ­¦å™¨ä¸­æœ€å¼±çš„æ­¦å™¨ä¹‹ä¸€ï¼Œå› æ¬¡æˆ‘å€‘å°å…¶æ€§èƒ½åŠ å¼·ï¼Œè®“ M249 æˆç‚ºå¯é çš„ç«åŠ›å£“åˆ¶æ­¦å™¨ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  ç²¾æº–å°„æ“Š: <del>4ç™¼</del>->12ç™¼ <br>
                  æœ€å°å‚·å®³: <del>15</del>->21 <br>
                  æœ€å¤§å¾Œåº§åŠ›: -18% <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>SPAS12<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">å…¨æ¨¡å¼é€šç”¨</span><br>
                <span>é›–ç„¶ SPAS12 æ˜¯ç›®å‰è¿‘è·é›¢çš„æœ€é«˜å‚·å®³çš„æ§æ¢°ä¹‹ä¸€ï¼Œä½†å…¶å°„ç¨‹å‚·å®³éžæ¸›çŽ‡è¼ƒé«˜ï¼Œä½¿å…¶èˆ‡ M1887 æˆ– M1014 ç›¸æ¯”è¼ƒç„¡ç«¶çˆ­åŠ›ã€‚å› æ­¤æˆ‘å€‘å°‡æå‡å…¶æœ€ä½Žå‚·å®³ï¼Œæ¸›å°‘èˆ‡å…¶ä»–éœ°å½ˆæ§çš„å·®è·ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  æœ€å°å‚·å®³: <del>6</del>->7 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>XM8<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">å…¨æ¨¡å¼é€šç”¨</span><br>
                <span>XM8 ç›®å‰åœ¨å…ˆå‰çš„å¹³è¡¡èª¿æ•´ä¸­çµ¦äºˆäº†å…¶å¼·å¤§çš„ç«¶çˆ­åŠ›ï¼Œä¸»è¦åŽŸå› æ˜¯è©²æ­¦å™¨çš„éˆæ´»æ€§ä»¥åŠå®¹æ˜“ä¸Šæ‰‹ï¼Œå› æ­¤æˆ‘å€‘é‡å°XM8é€²è¡Œè¼•å¾®çš„èª¿æ•´ï¼Œä½¿å…¶å…·æœ‰æ›´æ·±çš„å­¸ç¿’æ›²ç·šã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  ç²¾æº–å°„æ“Š: <del>4ç™¼</del>->3ç™¼<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">éŠæˆ²æ¨¡å¼èª¿æ•´</p>
          <ul>
            <li>
              <span>æ¨¡å¼é è¨­æ­¦å™¨èª¿æ•´<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">åœ˜éšŠæ­»é¬¥ã€ç‹—ç‰Œæ”¶é›†è€…å’Œæ®ºæˆ®ç‹‚æ­¡</span><br>
                <span>æˆ‘å€‘æ”¶åˆ°å¤§é‡çš„çŽ©å®¶åé¥‹ï¼Œé€™äº›æ¨¡å¼åªæä¾› 4 å¥—é è¨­è£å‚™ï¼Œä½¿å¾—åœ¨é€²è¡ŒéŠæˆ²æ™‚æ­¦å™¨å¤ªéŽå–®ä¸€ï¼Œå› ç‚ºæˆ‘å€‘æ–°å¢žäº†å…¨æ–°çš„æ­¦å™¨é¸æ“‡é¸å–®ï¼Œä»¥ä¾¿æ‰€æœ‰çŽ©å®¶åœ¨æ¯æ¬¡å¾©æ´»æ™‚éƒ½å¯ä»¥é¸æ“‡å’Œæ›´æ”¹æƒ³ä½¿ç”¨çš„è£å‚™ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  çŽ©å®¶åœ¨æ¯å›žåˆé–“å¯ä»¥ä½¿ç”¨ç©åˆ†è³¼è²·æ­¦å™¨æˆ–è£å‚™<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>è›‹ç³•å¤§é ­<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">è·³å‚˜èˆ‡å¾©æ´»æ©Ÿåˆ¶çš„èª¿æ•´  </span><br>
                <span>æˆ‘å€‘åœ¨è›‹ç³•å¤§é ­æ¨¡å¼ä¸­æ·»åŠ æ–°çš„æ©Ÿåˆ¶ï¼Œä»¥ä¾¿çŽ©å®¶å¯ä»¥æ›´å¿«é€Ÿçš„é‡æ–°éƒ¨ç½²ä¸¦åŠ å…¥æˆ°é¬¥ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  çŽ©å®¶è¢«æ“Šå€’æ™‚ï¼Œå¯ä»¥é¸æ“‡æ”¾æ£„ï¼ŒåŠ å¿«é‡æ–°ä½ˆç½²çš„æ™‚é–“ <br>
                  é™ä½Žäº†è·³å‚˜çš„é«˜åº¦ï¼ŒçŽ©å®¶å¯ä»¥æ›´å¿«é€Ÿçš„é‡æ–°é€²å…¥æˆ°é¬¥ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>æ§æ¢°å¤§å¸« (åœ˜éšŠæˆ°)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">æ­¦å™¨å‡ç´šæ©Ÿåˆ¶èª¿æ•´ã€é–‹æ”¾ 4V4 åœ˜éšŠæˆ° </span><br>
                <span>æˆ‘å€‘ç™¼ç¾æ§æ¢°å¤§å¸«çš„æœ€å¤§å•é¡Œä¹‹ä¸€ï¼Œåœ¨æ–¼çŽ©å®¶å€‘å¸Œæœ›èƒ½å¤ èˆ‡æœ‹å‹ä¸€èµ·æˆ°é¬¥ï¼Œå› æ­¤æˆ‘å€‘å°éŠæˆ²å¢žåŠ äº† 4V4 çš„åœ˜éšŠæ©Ÿåˆ¶ï¼Œé€™æ¨£å¯ä»¥èˆ‡å…¶ä»–çš„å¥½å‹å€‘ä¸€èµ·åˆä½œã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  é–‹æ”¾ 4V4 åœ˜éšŠæˆ° <br>
                  çŽ©å®¶å¦‚æžœé€£çºŒæ­»äº¡ 3 æ¬¡ï¼Œæˆ–æ˜¯è½å¾Œå…¶ä»–çŽ©å®¶çš„é€²åº¦å¤ªå¤šï¼Œå‰‡å¯ä»¥é¸æ“‡ã€Œè·³éŽã€ç›®å‰çš„æ­¦å™¨ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">è§’è‰²èˆ‡å¯µç‰©</p>
          <ul>
            <li>
              <span>æ–°è§’è‰² - ç›§å‡±é”<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">éŠæˆ²å…§ç™»å ´. </span><br>
                <span>ã€Œä½ æ˜¯å¦æº–å‚™è¦‹è­˜å¸½å­æˆ²æ³•ï¼Ÿã€</span><br>
                <br>
                <span style="color: #666666;">
                  å¸½å­æˆ²æ³•:æ¯æ¬¡æ“Šæ®ºæ•µäººï¼Œå¯å¢žåŠ è¡€é‡ä¸Šé™(8/10/12/14/16/18)ï¼Œæœ€é«˜å¯å¢žåŠ è‡³35<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>æ–°å¯µç‰© - ä¼éµç“¦å“¥<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">å³å°‡ç•¶å ´</span><br>
                <span>ä½ æ˜¯å¦æ“”å¿ƒåœ¨äº¤æˆ°æ™‚æ²’æœ‰ä»»ä½•çš„å‡è† è­·ç›¾ï¼Ÿåˆ¥æ“”å¿ƒï¼Œä¼éµç“¦å“¥å°‡æœƒç¢ºä¿ä½ æ°¸é ä¸æœƒæ²’æœ‰å‡è† è­·ç›¾ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  å£åå‡è† ï¼šç•¶èº«ä¸Šçš„å‡è† è­·ç›¾ä½Žæ–¼(1/1/2) å€‹æ™‚ï¼Œç“¦å“¥æ¯éš” (120/100/100) ç§’å°‡æœƒæä¾›ä¸€å€‹å‡è† è­·ç›¾  <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>å³¶ç”°éš¼-ç«å°è¦ºé†’<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">å³å°‡ç•¶å ´</span><br>
                <span>Free Fire ä¸–ç•Œä¸­ç¬¬äºŒå€‹è¦ºé†’è§’è‰²çµ‚æ–¼å³å°‡ç™»å ´ï¼ŒåƒåŠ  8/22 ä¸‰å‘¨å¹´é€²åŒ–ç‹‚æ­¡æ…¶æ´»å‹•ï¼Œå…è²»ç²å¾—å³¶ç”°éš¼-ç«å°è¦ºé†’ï¼</span><br><br>
                <span style="color: #666666;">
                  æ‹”åˆ€æ ¼æ“‹: æ¸›å…(40/45/50/55/60)%æ­£é¢æ‰€å—åˆ°çš„å‚·å®³ï¼ŒæŒçºŒ 6 ç§’ï¼Œå†·å»æ™‚é–“ 50ç§’ï¼Œé–‹ç«å¾Œæ•ˆæžœå°‡ä¸­æ–·<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">ç³»çµ±æ›´æ–°</p>
          <ul>
            <li>
              <span>ä»£ç†æˆ°éšŠé•·<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">å…¨æ–°æˆ°éšŠç®¡ç†æ©Ÿåˆ¶</span><br>
                <span>ä¸Šæ¬¡çš„ç‰ˆæœ¬æ›´æ–°æ™‚æˆ‘å€‘æ–°å¢žäº†ä¸€äº›æˆ°éšŠç®¡ç†åŠŸèƒ½ï¼Œä¸¦ä¸”ç²å¾—çŽ©å®¶å€‘ç©æ¥µçš„åé¥‹ã€‚ç›®å‰ç®¡ç†æˆ°éšŠæ™‚æœ€å¤§çš„ç—›é»žæ˜¯ç•¶æˆ°éšŠé•·å› æ•…ç„¡æ³•æŒçºŒä¸Šé™æ™‚æˆ°éšŠçš„ç®¡ç†è¼ƒé›£ç¶­æŒã€‚å› æ­¤æˆ‘å€‘æ–°å¢žæˆ°éšŠæˆå“¡å¯é€éŽæŠ•ç¥¨é¸å‡ºä»£ç†æˆ°éšŠé•·çš„æ©Ÿåˆ¶ï¼Œå³ä½¿æˆ°éšŠé•·å› æ•…ç¼ºå¸­ï¼Œæˆ°éšŠä»å¯ä¿æŒæ­£å¸¸é‹ä½œã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  ç•¶æˆ°éšŠé•·è¶…éŽ 30 æ—¥æœªä¸Šç·šï¼Œæˆ°éšŠæˆå“¡å°‡æœƒæ”¶åˆ°æŠ•ç¥¨é¸æ“‡ä»£ç†æˆ°éšŠé•·çš„é€šçŸ¥ <br>
                  æŠ•ç¥¨å®Œæˆå¾Œï¼Œä»£ç†æˆ°éšŠé•·å°‡æ“æœ‰æˆ°éšŠé•·æ‰€æœ‰çš„åŠŸèƒ½ï¼Œç›´åˆ°æˆ°éšŠé•·è¿”å›žæˆ–ä»£ç†æˆ°éšŠé•·é›¢ç·šè¶…éŽ 7 æ—¥ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ç³»çµ±å„ªåŒ–åŠ Bug ä¿®å¾©<br></span>
              <span class="m-news-detail-s">
                &nbsp;&nbsp;&nbsp;- åœ˜éšŠçªè¥²èˆ‡æ§æ¢°å¤§å¸«çµç®—ç•«é¢èª¿æ•´ <br>
                &nbsp;&nbsp;&nbsp;- çŽ©å®¶å¯ä»¥ç™¼é€ç³»çµ±æ‰€æä¾›çš„é€£çµï¼Œæ–¹ä¾¿é‚€è«‹æœ‹å‹åŠ å…¥çµ„éšŠã€‚ <br>
                &nbsp;&nbsp;&nbsp;- å„ªåŒ–éŠæˆ²å…§æ­¦å™¨HUD <br>
                &nbsp;&nbsp;&nbsp;- ç†±æˆåƒçž„æº–é¡ä¸æœƒå†è¢«ç…™éœ§å½ˆçµ¦é®è”½ <br>
                &nbsp;&nbsp;&nbsp;- çµ„éšŠé‚€è«‹é¡¯ç¤ºå„ªåŒ– <br>
                &nbsp;&nbsp;&nbsp;- Free Fire å†’éšªæ‰‹å†Šæ›´æ–°å…§å®¹Updated new contents into the FF Journal. <br>
                &nbsp;&nbsp;&nbsp;- å°è¦æ¨¡éŠæˆ²æ¨¡å¼ä»‹ç´¹å½±ç‰‡å„ªåŒ– <br>
                &nbsp;&nbsp;&nbsp;- å„ªåŒ–åœ˜éšŠæ­»é¬¥æ¨¡å¼å»¶é•·è³½çš„æç¤º <br>
                &nbsp;&nbsp;&nbsp;- è·³å‚˜åº¦åŒ–å„ªåŒ– <br>
                &nbsp;&nbsp;&nbsp;- è‡ªè¨‚æˆ¿é–“å…§æ–°å¢žå–€æ‹‰å“ˆé‡Œåœ°åœ– <br>
                &nbsp;&nbsp;&nbsp;- ä¿®æ­£éƒ¨åˆ†æ¨¡å¼åœ¨æº–å‚™éšŽæ®µæ™‚é€éŽç‰¹å®šæ–¹æ³•é›¢é–‹æº–å‚™å€åŸŸ <br>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
        </div>
      </div>
    `,
    ko: `
      <div class="g-detail">
        <h2 class="c-h2">íŒ¨ì¹˜ë…¸íŠ¸: 3ì£¼ë…„ ì—ë³¼ë£¨ì…˜</h2>
        <div class="m-detail-time">Jul. 27, 2020</div>
        <div class="m-news-detail">
          <p class="orange">í´ëž˜ì‹œ ìŠ¤ì¿¼ë“œ </p>
          <ul>
            <li>
              <span>ëž­í¬ ê²½ê¸° ì‹œì¦Œ 2<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">07/30 17:00 ë¶€í„° ë§¤ ì£¼ í† ,ì¼ ì•„ì¹¨ 10:00 ~ ë‹¤ìŒë‚  ìƒˆë²½ 01:59
                  (GMT+8)</span><br>
                <span>â€œí´ëž˜ì‹œ ìŠ¤ì¿¼ë“œ ëž­í¬ ê²½ê¸° ì‹œì¦Œ 2ê°€ ì‹œìž‘ë©ë‹ˆë‹¤! ê·¸ë¦¬ê³  ìƒˆë¡œìš´ ì‹œì¦Œ ë³´ìƒì€ ì‹œì¦Œ ê¸°ê°„ ë‚´ ê³¨ë“œlllì— ë‹¬ì„±í•˜ë©´ ë…ì  ë³´ìƒ ê³¨ë“œ G18ì´ ì£¼ì–´ì§‘ë‹ˆë‹¤!â€</span><br>
                <br>
                <span style="color: #666666;">
                  í´ëž˜ì‹œ ìŠ¤ì¿¼ë“œ ìƒì  ìµœì í™” <br>
                  í´ëž˜ì‹œ ìŠ¤ì¿¼ë“œì˜ ê²½ë ¥ì€ ê°œì¸ í”„ë¡œí•„ì—ì„œ ì—´ëžŒ ê°€ëŠ¥ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ì‹ ê·œ ì•„ì´í…œ - í˜¸ë¥´ëª¬ ì£¼ì‚¬(ì…€í”„ êµ¬ì¡°)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">í´ëž˜ì‹œ ìŠ¤ì¿¼ë“œ ëª¨ë“œì—ì„œë§Œ ì œê³µ</span><br>
                <span>â€œíŒ€ì›ë“¤ì€ ì ì„ ìž¬ë¹¨ë¦¬ ì²˜ì¹˜í•´ì•¼ í•˜ê¸° ë•Œë¬¸ì— íŒ€ì›ì„ êµ¬ì¡°í•˜ì§€ ëª»í•˜ëŠ” ìƒí™©ì´ ëŒ€ë‹¤ìˆ˜ìž…ë‹ˆë‹¤. ì´ëŸ° ìƒí™©ì„ ëŒ€ë¹„í•´ í˜¸ë¥´ëª¬ ì£¼ì‚¬ë¥¼ ìƒì ì— ë„ìž…í•˜ì—¬ ê°€ê²©ì´ ë†’ì§€ë§Œ ì´ ì•„ì´í…œì„ êµ¬ë§¤ í›„
                  ì…€í”„ë¡œ ìžì‹ ì˜ ëª©ìˆ¨ì„ êµ¬í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤.â€</span><br>
                <br>
                <span style="color: #666666;">
                  í˜¸ë¥´ëª¬ ì£¼ì‚¬ ì‚¬ìš© ì‹œ ì¶œí˜ˆì€ ì§€ì†ë˜ë©° ìžê¸°ìž¥ê³¼ ê³µê²© ë°ë¯¸ì§€ë„ ì–»ìŠµë‹ˆë‹¤. <br>
                  í”Œë ˆì´ì–´ëŠ” ì“°ëŸ¬ì§„ ìƒíƒœì—ì„œ ì…€í”„ êµ¬ì¡° í‚¤íŠ¸ë¥¼ ì‚¬ìš©í•´ ì „íˆ¬ë ¥ì„ íšŒë³µì‹œí‚¬ ìˆ˜ ìžˆìŠµë‹ˆë‹¤. <br>
                  í˜¸ë¥´ëª¬ ì£¼ì‚¬ ì‚¬ìš© í›„ 100HPê°€ íšŒë³µë©ë‹ˆë‹¤. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ë³´ì¡° ì—ìž„<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">í´ëž˜ì‹œ ìŠ¤ì¿¼ë“œì— ë³´ì¡° ì—ìž„ ì¡°ì •</span><br>
                <span>â€œí˜„ìž¬ì˜ ë³´ì¡° ì—ìž„ì€ ì‚´ì•„ìžˆëŠ” ì ì´ ì•„ë‹Œ ì“°ëŸ¬ì§„ ì ì„ ìš°ì„  ìƒëŒ€ë¡œ ì¡°ì¤€í•˜ì—¬ ë§Žì€ í”Œë ˆì´ì–´ë¶„ë“¤ì˜ ì§€ì†ì ì¸ ì»´í”Œë ˆì¸ì„ ë°›ì•„ì™”ìŠµë‹ˆë‹¤. ê·¸ëž˜ì„œ ìœ„í˜‘ì´ ìžˆëŠ” ì ì„ ìš°ì„  ì—ìž„ í•˜ëŠ”
                  ì‹œìŠ¤í…œìœ¼ë¡œ ìµœì í™”í•˜ì˜€ìŠµë‹ˆë‹¤. â€</span><br>
                <br>
                <span style="color: #666666;">
                  ë³´ì¡° ì—ìž„ì€ ì‚´ì•„ìžˆëŠ” ì ì„ ìš°ì„ ì‹œ ì¡°ì¤€í•˜ë„ë¡ ìµœì í™” (í´ëž˜ì‹œ ìŠ¤ì¿¼ë“œ í•œì •). <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">ê²Œìž„ ì—…ë°ì´íŠ¸</p>
          <ul>
            <li>
              <span>ì‹ ê·œ ì‹œìž‘ì„¬ - â€œëŸ°ì›¨ì´â€<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ìƒˆë¡œìš´ ì‹œìž‘ì„¬ ì¶œì‹œ</span><br>
                <span>â€œìƒˆë¡œìš´ ì‹œìž‘ì„¬ì´ ì¶œì‹œëìŠµë‹ˆë‹¤. ê³µí•­ ëŸ°ì›¨ì´ ì‹œìž‘ì„¬ì—ì„œ ìƒˆë¡œìš´ ëª¨í—˜ì´ ì´ë¥™í•©ë‹ˆë‹¤!â€</span><br>
                <br>
                <span style="color: #666666;">
                  ì‹ ê·œ ì‹œìž‘ì„¬: â€œëŸ°ì›¨ì´â€ ì˜¤í”ˆ!<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ì•‰ì•˜ë‹¤ ì¼ì–´ì„œì„œ í—¤ë“œìƒ· ì¡°ì •<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ì í•œí…Œ ì•‰ì•˜ë‹¤ ì¼ì–´ì„œì„œ í—¤ë“œìƒ· ë‹¹í•  ë•Œ ë³´í˜¸ ê¸°ì œ</span><br>
                <span>â€œì¼ë¶€ í”Œë ˆì´ì–´ë“¤ì´ ê²Œìž„ ë‚´ ë³´ì¡° ì—ìž„ë¥¼ ì´ìš©í•´ ì•‰ì•˜ë‹¤ ì¼ì–´ì„¤ ë•Œ ì¤‘ì‹¬ì´ ì›€ì§ì´ëŠ” ê²©ì°¨, ê·¸ë¦¬ê³  ë‹¤ë¥¸ ë³´ì¡°ì ì¸ ë°©ì‹ìœ¼ë¡œ ë¹ ë¥´ê²Œ í—¤ë“œìƒ·ì„ í•˜ëŠ” ìƒí™©ìœ¼ë¡œ ì¸í•´ ìƒëŒ€ê°€ ë°˜ê²©í•  ê¸°íšŒê°€
                  ì—†ë‹¤ëŠ” ê²ƒì„ ë°œê²¬í–ˆìŠµë‹ˆë‹¤. ë”°ë¼ì„œ ì´ ë°©ë²•ì˜ í—¤ë“œìƒ· ë°ë¯¸ì§€ë¥¼ ì¡°ì •í•˜ê¸°ë¡œ í•˜ì˜€ìŠµë‹ˆë‹¤. ì´ ì¡°ì •ì€ ì•…ìš© í”Œë ˆì´ì–´ì—ê²Œë§Œ ëŒ€ìƒìœ¼ë¡œ í•  ë¿ ì •ìƒì ì¸ í”Œë ˆì´ì–´ì—ê²ŒëŠ” ì˜í–¥ì„ ì£¼ì§€ ì•Šì„
                  ê²ƒìž…ë‹ˆë‹¤.â€</span><br>
                <br>
                <span style="color: #666666;">
                  ì•‰ì•„ì„œ ì¼ì–´ë‚  ë•Œ ì‚¬ê²© ì‹œ â€œ0.85ì´ˆ ì´ë‚´â€ í—¤ë“œìƒ· ë°ë¯¸ì§€ í•˜í–¥<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ì°¨ëŸ‰ ì¡°ì •<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ì°¨ëŸ‰ ì†ë„ ìµœì í™”</span><br>
                <span>â€œìš°ë¦¬ëŠ” ë‹¹ì‹ ì˜ í”¼ë“œë°± ë°˜ì˜í•˜ê³  ìžˆìŠµë‹ˆë‹¤.â€</span><br>
                <br>
                <span style="color: #666666;">
                  ì°¨ëŸ‰ ìµœê³  ì‹œì† ì¡°ì •:<br>
                  &nbsp;&nbsp;&nbsp;- ì˜¤í† ë°”ì´: <del>120km/h</del>->130km/h<br>
                  &nbsp;&nbsp;&nbsp;- ì§€í”„ì°¨: <del>100km/h</del>-> 110km/h<br>
                  &nbsp;&nbsp;&nbsp;- íˆ­íˆ­ì´: <del>90km/h</del>-> 100km/h<br>
                  &nbsp;&nbsp;&nbsp;- ìˆ˜ë¥™ì–‘ìš©ì°¨: <del>130km/h</del>->120km/h <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ë“œë¼ì´ë¹™ ë©”ì»¤ë‹ˆì¦˜<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ìµœì í™”ëœ ì†ë„ ë””ìŠ¤í”Œë ˆì´ ë° ìµœëŒ€ ì†ë„ íš¨ê³¼</span><br>
                <span>â€œëŒ€ë¶€ë¶„ì˜ ì°¨ëŸ‰ì˜ ì†ë„ë¥¼ ë†’ì´ë©´ì„œ ìš´ì „ì´ ë”ìš± íŽ¸ì•ˆí•´ì§ˆ ìˆ˜ ìžˆëŠ” ì¹´ë©”ë¼ ì›€ì§ìž„ë„ ì¶”ê°€ë˜ê³  ìžˆìŠµë‹ˆë‹¤. ì—…ë°ì´íŠ¸ í›„ í”Œë ˆì´ì–´ê°€ ì°¨ëŸ‰ì˜ ìµœëŒ€ ì†ë„ì— ë„ë‹¬í•˜ë©´ ì¶©ëŒ ë°ë¯¸ì§€ê°€
                  ë†’ì•„ì§‘ë‹ˆë‹¤. ì‹œì•¼ê°€ ë„“ì–´ì§„ í™”ë©´ì€ ìš´ì „ ì¤‘ ë‹¤ê°€ì˜¤ëŠ” ë¬¼ì²´ì™€ ìž¥ì• ë¬¼ì„ ë” ë§Žì´ ë³¼ ìˆ˜ ìžˆê¸° ë•Œë¬¸ì— ìš´ì „ì´ ë” ìˆ˜ì›”í•´ì§ˆ ê²ƒìž…ë‹ˆë‹¤. â€</span><br>
                <br>
                <span style="color: #666666;">
                  ì •í™•í•œ ì‹œì† í‘œì‹œ ì¶”ê°€ <br>
                  ìµœê³  ì‹œì† ë„ë‹¬ ì‹œ ì‹œì•¼ê°€ ë„“ì–´ì§. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ê¸€ë¼ì´ë”<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">íŠ¹ì • ë†’ì´ ì´ìƒ ë‚´ë¦¼ ì†ë„ ì¦ê°€</span><br>
                <span>â€œê¸€ë¼ì´ë”ë¥¼ ì¶”ê°€í•œ ì´ìœ ëŠ” í”Œë ˆì´ì–´ë“¤ì´ ë†’ì€ ê³³ì—ì„œ ì•ˆì „í•˜ê²Œ ì°©ë¥™ì„ ë„ìš°ëŠ” ì•„ì´í…œìœ¼ë¡œ ë§Œë“¤ì—ˆì§€ë§Œ, ì´ ì ì„ ì´ìš©í•˜ì—¬ ì ‘ê·¼í•  ìˆ˜ ì—†ëŠ” ìž¥ì†Œì— ë„ì°©í•˜ëŠ” ìœ ì €ë“¤ì´ ìžˆì–´ ë” ê³µí‰í•œ
                  í”Œë ˆì´ë¥¼ ìœ„í•´ ê¸€ë¼ì´ë”ë¥¼ ì¡°ì •í•˜ì˜€ìŠµë‹ˆë‹¤.â€</span><br>
                <br>
                <span style="color: #666666;">
                  ê³ ë„ 38m ì´ìƒì¼ ë•Œ ë” ë¹¨ë¦¬ í•˜ê°•í•©ë‹ˆë‹¤. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>HP íšŒë³µ ì†ë„ <br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ì´ˆë‹¹ íšŒë³µí•˜ëŠ” HP ì†ë„ ì œí•œ</span><br>
                <span>â€œìƒˆë¡œìš´ HP íšŒë³µ ì•„ì´í…œê³¼ ìŠ¤í‚¬ì´ ë§Žì•„ì§€ë©´ì„œ ë™ì‹œì— ëª¨ë“  ê¸°ìˆ ì„ ë™ì›í•˜ì—¬ ê¸°ì¡´ ìƒì¡´ ì‹œê°„ë³´ë‹¤ ë” ì˜¤ëž˜ ë²„í‹¸ ìˆ˜ ìžˆë‹¤ëŠ” ì ì„ ë°œê²¬í•´ HP íšŒë³µì¹˜ë¥¼ ì œí•œí•˜ì—¬ ì•ˆì „ êµ¬ì—­ ë°–ì—ì„œ
                  ìš°ìŠ¹í•˜ëŠ” ìƒí™©ì„ ë°©ì§€í•  ê²ƒìž…ë‹ˆë‹¤.â€</span><br>
                <br>
                <span style="color: #666666;">
                  í”Œë ˆì´ì–´ì˜ HP íšŒë³µì¹˜ëŠ” ì´ˆë‹¹ 50ì„ ë„˜ê¸¸ ìˆ˜ ì—†ìŒ.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">ë¬´ê¸° ë°¸ëŸ°ìŠ¤</p>
          <ul>
            <li>
              <span>ì‹ ê·œ ë¬´ê¸° - AUG<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ì¼ë°˜ ëª¨ë“œ í´ëž˜ì‹œ ìŠ¤ì¿¼ë“œ, ëž­í¬ ê²½ê¸°ì— ì¶”ê°€ </span><br>
                <span>â€œFree Fireì—ì„œ ì†Œì´ì„ ì¶œì‹œí•œ ì§€ ê½¤ ë§Žì€ ì‹œê°„ì´ í˜ë €ìŠµë‹ˆë‹¤. ì†Œì´ì€ í™œë°œí•˜ê²Œ ì›€ì§ì´ëŠ” í”Œë ˆì´ì–´ì˜ ìµœì„  ì„ íƒìž…ë‹ˆë‹¤. ê³ ì •ì‹ 2 ë°°ìœ¨ ìŠ¤ì½”í”„ê°€ ìžˆìœ¼ë©° ì¤‘ê±°ë¦¬ ì „íˆ¬ë¥¼ ë²Œì¼
                  ìˆ˜ ìžˆìŠµë‹ˆë‹¤. ì´ì•Œì€ 35ë°œì´ ìžˆì–´ ê·¼ê±°ë¦¬ ì „íˆ¬ì—ë„ ë§¤ìš° ìœ ìš©í•©ë‹ˆë‹¤. ì†Œì´ì„ ì¢‹ì•„í•˜ì‹œë©´ ê¼­ ì¨ë´ì•¼ í•˜ëŠ” ë¬´ê¸° ì¤‘ í•˜ë‚˜ìž…ë‹ˆë‹¤.â€</span><br>
                <br>
                <span style="color: #666666;">
                  ë°ë¯¸ì§€: 31 <br>
                  íƒ„ì°½: 35 <br>
                  íƒ„ì†: .147 <br>
                  2ë°°ìœ¨ ê³ ì •ì‹ ìŠ¤ì½”í”„ê°€ ìžˆìœ¼ë©° ë‹¤ë¥¸ ìŠ¤ì½”í”„ë¡œ êµì²´ ê°€ëŠ¥. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>AK47<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ëª¨ë“  ëª¨ë“œì— ì ìš©</span><br>
                <span>â€œAK47ëŠ” ì—­ëŒ€ ìµœê³  ì¸ê¸° ë¬´ê¸° ì¤‘ í•˜ë‚˜ì§€ë§Œ ìƒìœ„ ì†Œì´ì— ë¹„í•´ ì„±ëŠ¥ì´ ë–¨ì–´ì§‘ë‹ˆë‹¤. ìš°ë¦¬ëŠ” AK47ê°€ ì „íˆ¬ìž¥ì—ì„œ ë” ìœ ìš©í•œ ë¬´ê¸°ë¡œ ì‚¬ìš©ë  ìˆ˜ ìžˆê²Œë” ì„±ëŠ¥ì„ ìƒí–¥
                  ì¡°ì •í•˜ì˜€ìŠµë‹ˆë‹¤.â€</span><br>
                <br>
                <span style="color: #666666;">
                  ë°ë¯¸ì§€: <del>37</del>->38 <br>
                  ìµœì†Œ ë°ë¯¸ì§€: <del>12</del>->14 <br>
                  íƒ„ì†: -3% <br>
                  ì •í™•ë„: <del>1</del>->2 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>FAMAS<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ëª¨ë“  ëª¨ë“œì— ì ìš©</span><br>
                <span>â€œí˜„ìž¬ FAMASëŠ” ì†Œì´ 1ìœ„ì— ì˜¤ë¥¼ ë§Œí¼ ë¯¼ì²©í•˜ì§€ ëª»í•©ë‹ˆë‹¤. 3ì—°ì† ì‚¬ê²© í›„ ë¹ ë¥´ê²Œ ì›€ì§ì¼ ìˆ˜ ìžˆë„ë¡ ì•½ê°„ì˜ ì´ë™ ì†ë„ë¥¼ ì¦ê°€í•˜ì˜€ìŠµë‹ˆë‹¤..â€</span><br>
                <br>
                <span style="color: #666666;">
                  ì‚¬ê²© ì¤‘ ì´ë™ ì†ë„: +10%<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>M249<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ëª¨ë“  ëª¨ë“œì— ì ìš©</span><br>
                <span>â€œM249ëŠ” ì—ì–´ë“œëž í•œì • ë¬´ê¸° ì¤‘ ì œì¼ ì•½í•œ ë¬´ê¸°ìž…ë‹ˆë‹¤. ê·¸ëž˜ì„œ M249ë¥¼ ë”ìš± ìœ ìš©í•œ ë¬´ê¸°ê°€ ë˜ê²Œë” ì„±ëŠ¥ì„ ìƒí–¥í–ˆìŠµë‹ˆë‹¤.â€</span><br>
                <br>
                <span style="color: #666666;">
                  ì •í™•ë„: <del>4</del>->12 <br>
                  ìµœì†Œ ë°ë¯¸ì§€: <del>15</del>->21 <br>
                  ìµœëŒ€ ë°˜ë™: -18% <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>SPAS12<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ëª¨ë“  ëª¨ë“œì— ì ìš©</span><br>
                <span>â€œSPAS12ëŠ” í˜„ìž¬ ê·¼ì ‘ ê±°ë¦¬ì¤‘ ë°ë¯¸ì§€ê°€ ì œì¼ ë†’ì€ ë¬´ê¸°ì§€ë§Œ ê±°ë¦¬ê°€ ë©€ì–´ì§ˆìˆ˜ë¡ ë°ë¯¸ì§€ê°€ ë‚®ì•„ì ¸ M1887 M1014ì— ë¹„í•´ ê²½ìŸë ¥ì´ ë–¨ì–´ì§‘ë‹ˆë‹¤. ê·¸ëž˜ì„œ ìµœì†Œ ë°ë¯¸ì§€ë¥¼ ì¡°ì •í•˜ì—¬
                  ë‹¤ë¥¸ ì‚°íƒ„ì´ê³¼ì˜ ê²©ì°¨ë¥¼ ì¤„ì˜€ìŠµë‹ˆë‹¤.â€</span><br>
                <br>
                <span style="color: #666666;">
                  ìµœì†Œ ë°ë¯¸ì§€: <del>6</del>->7 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>XM8<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ëª¨ë“  ëª¨ë“œì— ì ìš©</span><br>
                <span>â€œXM8ëŠ” ëª¨ë“  ë¬´ê¸° ë°¸ëŸ°ìŠ¤ì¤‘ ì œì¼ íƒì›”í•´ ì†Œì´ì˜ ì™•ì´ë¼ê³  í•  ë§Œí¼ ìš°ìˆ˜í•©ë‹ˆë‹¤. ê·¸ ì´ìœ ëŠ” ë¬´ê¸° ì‚¬ìš©ì´ ë§¤ìš° ìœ ì—°í•˜ê³  ì†ì‰½ê²Œ ì‚¬ìš©í•  ìˆ˜ ìžˆê¸° ë•Œë¬¸ìž…ë‹ˆë‹¤. ê·¸ëŸ¬ë¯€ë¡œ XM8
                  ì‚¬ìš©ê°ì„ ì¢€ ë” ë„ì „ì ì´ê²Œ ì¡°ì •í•˜ì˜€ìŠµë‹ˆë‹¤.â€</span><br>
                <br>
                <span style="color: #666666;">
                  ì •í™•ë„: <del>4</del>->3 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">ê²Œìž„ëª¨ë“œ ì¡°ì •</p>
          <ul>
            <li>
              <span>ë¬´ê¸° ì„ íƒ ì„¤ì •<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">íŒ€ ë°ìŠ¤ë§¤ì¹˜, ì‹ ë¶„ì¦ ìˆ˜ì§‘ìž, í‚¬ ìž”ì¹˜ ëª¨ë“œ</span><br>
                <span>â€œìš°ë¦¬ëŠ” í”Œë ˆì´ì–´ë¶„ë“¤ì´ ë¬´ê¸° ì„ íƒì´ 4ì„¸íŠ¸ë§Œ ìžˆì–´ì„œ ë„ˆë¬´ ì œí•œì ì´ë¼ëŠ” í”¼ë“œë°±ì„ ë°›ì•˜ìŠµë‹ˆë‹¤. ì´ì œ ëª¨ë“  í”Œë ˆì´ì–´ë“¤ì´ ë¶€í™œí•  ë•Œë§ˆë‹¤ ìžì‹ ì´ ì›í•˜ëŠ” ìž¥ë¹„ë¥¼ ì„ íƒí•˜ê³  ë°”ê¿€ ìˆ˜ ìžˆë„ë¡
                  ìƒˆë¡œìš´ ë¬´ê¸° ì„ íƒ ë©”ë‰´ë¥¼ ë„ìž…í–ˆìŠµë‹ˆë‹¤.â€</span><br>
                <br>
                <span style="color: #666666;">
                  í”Œë ˆì´ì–´ëŠ” ì´ì œ ë§¤ ë¼ìš´ë“œë§ˆë‹¤ ëˆ„ì ëœ ì ìˆ˜ë¡œ ë¬´ê¸°ì™€ ìž¥ë¹„ë¥¼ êµ¬ë§¤í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ë¹…-í—¤ë“œ ëª¨ë“œ<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ë‚™í•˜ì‚° ë° ë¶€í™œ ë©”ì»¤ë‹ˆì¦˜ ì¡°ì • </span><br>
                <span>â€œë¹…-í—¤ë“œ ëª¨ë“œì— ìƒˆë¡œìš´ ë©”ì»¤ë‹ˆì¦˜ì„ ì¶”ê°€í•˜ì—¬ í”Œë ˆì´ì–´ë“¤ì´ ë” ë¹¨ë¦¬ ë°°ì¹˜í•˜ê³  ì „íˆ¬ì— ì°¸ì—¬í•  ìˆ˜ ìžˆë„ë¡ ìµœì í™”í–ˆìŠµë‹ˆë‹¤â€</span><br>
                <br>
                <span style="color: #666666;">
                  í”Œë ˆì´ì–´ê°€ ì²˜ì¹˜ ë‹¹í–ˆì„ ì‹œ í¬ê¸°ë¥¼ í•˜ì—¬ ë¹ ë¥¸ ìž¬ í”Œë ˆì´ë¥¼ í•  ìˆ˜ ìžˆê²Œë” ì¡°ì •í•˜ì˜€ìŠµë‹ˆë‹¤ <br>
                  ìž¬ë¹¨ë¦¬ ì „íˆ¬ì— ì°¸ì—¬í•  ìˆ˜ ìžˆê²Œ ë‚™í•˜ì‚° ê³ ë„ë¥¼ ë‚®ì·„ìŠµë‹ˆë‹¤ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ê±´ í‚¹ (ìŠ¤ì¿¼ë“œ)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ë¬´ê¸° ì—…ê·¸ë ˆì´ë“œ ë©”ì»¤ë‹ˆì¦˜ ì¡°ì • ë° 4V4 ì „íˆ¬</span><br>
                <span>â€œê±´ í‚¹ì˜ ì œì¼ í° ë¬¸ì œëŠ” í”Œë ˆì´ì–´ë¶„ë“¤ì´ ì¹œêµ¬ë“¤ê³¼ ê°™ì´ ê²Œìž„ì„ ì§„í–‰í•˜ê³  ì‹¶ë‹¤ëŠ” ì ì´ì—ˆìŠµë‹ˆë‹¤. ê·¸ëž˜ì„œ ìš°ë¦¬ëŠ” í”Œë ˆì´ì–´ë¶„ë“¤ì´ ì¹œêµ¬ë“¤ê³¼ í•¨ê»˜ í”Œë ˆì´í•  ìˆ˜ ìžˆê²Œë” ëª¨ë“œì— 4V4
                  ìŠ¤ì¿¼ë“œë¥¼ ì¶”ê°€í–ˆìŠµë‹ˆë‹¤.â€</span><br>
                <br>
                <span style="color: #666666;">
                  4v4 ìŠ¤ì¿¼ë“œ ì˜¤í”ˆ. <br>
                  ì´ì œ ì„ ìˆ˜ë“¤ì€ 3ì—°íŒ¨ë¥¼ ë‹¹í•˜ê±°ë‚˜ ë‹¤ë¥¸ ì„ ìˆ˜ë“¤ì— ë¹„í•´ ì§„ë„ê°€ ë’¤ì²˜ì§ˆ ê²½ìš° ë¬´ê¸°ë¥¼ 'ìŠ¤í‚µ'í•˜ëŠ” ì„ íƒì„ í•  ìˆ˜ ìžˆê²Œ ëìŠµë‹ˆë‹¤. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">ìºë¦­í„° ë° íŽ«</p>
          <ul>
            <li>
              <span>ì‹ ê·œ ìºë¦­í„° - ë£¨ì¼€íƒ€<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Free Fire ìƒì ì— ë“±ìž¥. </span><br>
                <span>â€œí•´íŠ¸ íŠ¸ë¦­ì„ ë³¸ ì  ìžˆë‚˜?â€</span><br>
                <br>
                <span style="color: #666666;">
                  í•´íŠ¸ íŠ¸ë¦­: í‚¬ë§ˆë‹¤ ìµœëŒ€ HP {8/10/12/14/16/18} ì¦ê°€í•©ë‹ˆë‹¤, ìµœëŒ€ 35. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ì‹ ê·œ íŽ« - íž™íŽ­<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Coming Soon! </span><br>
                <span>â€œì–¼ìŒë²½ì´ ì—†ì„ê¹Œ ë´ ê±±ì •ì´ë¼ê³ ìš”? ê±±ì • ë§ˆì„¸ìš”~ íŽ­ê·„ íž™íŽ­ì´ ì–¼ìŒë²½ì„ ë§Œë“¤ì–´ ì¤„ê±°ì—ìš”!â€</span><br>
                <br>
                <span style="color: #666666;">
                  ì–¼ìŒë²½ ë©”ì´í‚¹: ì–¼ìŒë²½ [1/1/2] ê°œ ì´í•˜ ë³´ìœ  ì‹œ, íž™íŽ­ì´ [120/100/80] ì´ˆë§ˆë‹¤ ì–¼ìŒë²½ì„ ë“œë¦½ë‹ˆë‹¤. <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>í•˜ì•¼í† -ë¶ˆíƒ€ëŠ” ê°ì„±<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Coming Soon! </span><br>
                <span>â€œFree Fire ì„¸ê³„ ì¤‘ ë‘ ë²ˆì§¸ë¡œ ê°ì„±í•œ ìºë¦­í„°ê°€ ë‚˜íƒ€ë‚©ë‹ˆë‹¤. 8/22 3ì£¼ë…„ ì—ë³¼ë£¨ì…˜ ì´ë²¤íŠ¸ ì¤‘ ë¬´ë£Œ í•˜ì•¼í† -ë¶ˆíƒ€ëŠ” ê°ì„±ì„ ì–»ìœ¼ì„¸ìš”!â€</span><br>
                <br>
                <span style="color: #666666;">
                  ì˜ˆìˆ ì˜ ì¹¼ë‚ : ì „ë°© ì†ìƒ {40/45/50/55/60}% ì¤„ìž…ë‹ˆë‹¤. 6ì´ˆ ì§€ì†, ì¿¨íƒ€ìž„: 50ì´ˆ. ì‚¬ê²©ì„ ì‹œìž‘í•˜ë©´ ìŠ¤í‚¬ì´ ì¤‘ë‹¨ë©ë‹ˆë‹¤.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">ì‹œìŠ¤í…œ ì—…ë°ì´íŠ¸</p>
          <ul>
            <li>
              <span>ê¸¸ë“œìž¥ ëŒ€ë¦¬ ê¸°ëŠ¥ ì¶”ê°€<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ìƒˆë¡œìš´ ê¸¸ë“œ ê´€ë¦¬ ì‹œìŠ¤í…œ </span><br>
                <span>â€œì „ ì—…ë°ì´íŠ¸ ë•Œ ê¸¸ë“œ ê´€ë¦¬ ì‹œìŠ¤í…œì„ ì¶”ê°€í–ˆê³  ì—¬ëŸ¬ë¶„ì˜ "ê¸ì •ì ì¸" í”¼ë“œë°±ë„ ë°›ì•˜ìŠµë‹ˆë‹¤.
                  í˜„ìž¬ ê¸¸ë“œ ê´€ë¦¬ ì¤‘ ê°€ìž¥ í° ë‹¨ì ì´ ë°”ë¡œ ê¸¸ë“œìž¥ì˜ ìž¥ê¸° ë¶€ìž¬ë¡œ ì¸í•´ ê¸¸ë“œ ìš´ì˜ì´ íž˜ë“¤ ë•Œìž…ë‹ˆë‹¤.
                  ê·¸ëž˜ì„œ ê¸¸ë“œìž¥ì´ ìž¥ê¸° ë¶€ìž¬ì—¬ë„, ê¸¸ë“œê°€ ì›í™œí•˜ê²Œ ìš´ì˜ì´ ë  ìˆ˜ ìžˆë„ë¡ ê¸¸ë“œì›ì´ íˆ¬í‘œë¡œ ëŒ€ë¦¬ ê¸¸ë“œìž¥ì„ ì„ ì¶œí•˜ëŠ” ê¸°ëŠ¥ì´ ì¶”ê°€ë©ë‹ˆë‹¤.â€</span><br>
                <br>
                <span style="color: #666666;">
                  ê¸¸ë“œìž¥ì´ 30ì¼ ìž¥ê¸° ë¶€ìž¬í•  ê²½ìš°, ê¸¸ë“œì›ë“¤ì€ ëŒ€ë¦¬ ê¸¸ë“œìž¥ì„ ì„ ì •í•˜ë¼ëŠ” íˆ¬í‘œ í†µì§€ë¥¼ ë°›ê²Œ ë©ë‹ˆë‹¤.<br>
                  íˆ¬í‘œê°€ ì™„ë£Œë˜ë©´, ëŒ€ë¦¬ ê¸¸ë“œìž¥ì€ ëª¨ë“  ê¶Œí•œì„ ëŒ€í–‰í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤. í•˜ì§€ë§Œ ê¸¸ë“œìž¥ì´ ë³µê·€ í˜¹ì€ ëŒ€ë¦¬ ê¸¸ë“œìž¥ì´ 7ì¼ ë™ì•ˆ ë¶€ìž¬ì¼ ê²½ìš°ì—ëŠ” ê¸¸ë“œìž¥ ê¶Œí•œì´ ì‚¬ë¼ì§‘ë‹ˆë‹¤.<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ì‹œìŠ¤í…œ ìµœì í™” ë° ë²„ê·¸ ìˆ˜ì •<br></span>
              <span class="m-news-detail-s">
                &nbsp;&nbsp;&nbsp;- í´ëž˜ì‹œ ìŠ¤ì¿¼ë“œ ë° ê±´-í‚¹ ê²°ì‚° í™”ë©´ ì¡°ì • <br>
                &nbsp;&nbsp;&nbsp;- í”Œë ˆì´ì–´ëŠ” ì‹œìŠ¤í…œì´ ì œê³µí•´ ì£¼ëŠ” ë§í¬ë¡œ ì¹œêµ¬ ì´ˆì²­ ê°€ëŠ¥ <br>
                &nbsp;&nbsp;&nbsp;- ê²Œìž„ ë‚´ ë¬´ê¸° ìµœì í™” HUD <br>
                &nbsp;&nbsp;&nbsp;- ì—´ê°ì§€ ìŠ¤ì½”í”„ ì—°ë§‰íƒ„ íˆ¬ì‹œ ë¶ˆê°€ ìˆ˜ì • <br>
                &nbsp;&nbsp;&nbsp;- ìŠ¤ì¿¼ë“œ ì´ˆëŒ€ ë””ìŠ¤í”Œë ˆì´ ìµœì í™” <br>
                &nbsp;&nbsp;&nbsp;- Free Fire ëª¨í—˜ ë§¤ë‰´ì–¼ ë‚´ìš© ì—…ë°ì´íŠ¸ <br>
                &nbsp;&nbsp;&nbsp;- ì†Œê·œëª¨ ê²Œìž„ ëª¨ë“œ ì†Œê°œ ì˜ìƒ ì—…ê·¸ë ˆì´ë“œ <br>
                &nbsp;&nbsp;&nbsp;- íŒ€ ë°ìŠ¤ë§¤ì¹˜ ì—°ìž¥ì „ ì•Œë¦¼ ì—…ê·¸ë ˆì´ë“œ <br>
                &nbsp;&nbsp;&nbsp;- ìŠ¤ì¹´ì´ë‹¤ì´ë¹™ ê°ë„ ì—…ê·¸ë ˆì´ë“œ <br>
                &nbsp;&nbsp;&nbsp;- ì‚¬ìš©ìž ì§€ì • ë°©ì— í´ë¼í•˜ë¦¬ ë§µ ì¶”ê°€ <br>
                &nbsp;&nbsp;&nbsp;- ë¶€ë¶„ ëª¨ë“œì—ì„œ ì¤€ë¹„ ì‹œ íŠ¹ì •í•œ ë°©ë²•ìœ¼ë¡œ ì¤€ë¹„êµ¬ì—­ì„ ì´íƒˆí•˜ëŠ” ë¶€ë¶„ ìˆ˜ì • <br>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
        </div>
      </div>
    `,
    tr: ``,
    ja: `
      <div class="g-detail">
        <h2 class="c-h2">ãƒ‘ãƒƒãƒãƒŽãƒ¼ãƒˆï¼šé€²åŒ–ã¨é©æ–°</h2>
        <div class="m-detail-time">Jul. 27, 2020</div>
        <div class="m-news-detail">
          <p class="orange">ã‚¯ãƒ©ãƒƒã‚·ãƒ¥éƒ¨éšŠ</p>
          <ul>
            <li>
              <span>ãƒ©ãƒ³ã‚¯ã‚·ãƒ¼ã‚ºãƒ³2<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ã‚¯ãƒ©ãƒƒã‚·ãƒ¥éƒ¨éšŠã‚·ãƒ¼ã‚ºãƒ³2ã¯8/1
                  (åœŸ)ã‹ã‚‰æ¯Žé€±åœŸæ—¥10ï¼š00~25:59(GMT+8)ã«é–‹æ”¾ã•ã‚Œã¾ã™</span><br>
                <span>ã‚¯ãƒ©ãƒƒã‚·ãƒ¥éƒ¨éšŠã‚·ãƒ¼ã‚ºãƒ³2ãŒç™»å ´!ã‚´ãƒ¼ãƒ«ãƒ‰IIIä»¥ä¸Šã«ãƒ©ãƒ³ã‚¯ã‚¢ãƒƒãƒ—ã™ã‚‹ã¨ã€ã‚¯ãƒ©ãƒƒã‚·ãƒ¥ãƒ»ã‚¹ã‚¯ãƒ¯ãƒƒãƒ‰é™å®šã‚¢ã‚¤ãƒ†ãƒ ã€Œã‚¶ã‚´ãƒ¼ãƒ«ãƒ‡ãƒ³G18ã€ã‚’ãƒ—ãƒ¬ã‚¼ãƒ³ãƒˆï¼</span><br>
                <br>
                <span style="color: #666666;">
                  ã‚¯ãƒ©ãƒƒã‚·ãƒ¥éƒ¨éšŠã‚·ãƒ§ãƒƒãƒ—ã‚’èª¿æ•´ã—ã¾ã—ãŸã€‚ <br>
                  ã‚¯ãƒ©ãƒƒã‚·ãƒ¥éƒ¨éšŠã®ã‚­ãƒ£ãƒªã‚¢ã‚¹ãƒ†ãƒ¼ã‚¿ã‚¹ãŒãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã®å€‹äººãƒ—ãƒ­ãƒ•ã‚£ãƒ¼ãƒ«ã®ä¸‹ã§ç¢ºèªã§ãã‚‹ã‚ˆã†ã«ãªã‚Šã¾ã—ãŸã€‚ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>æ–°ã‚¢ã‚¤ãƒ†ãƒ  - æœªæ¥è–¬å‰¤<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ã‚¯ãƒ©ãƒƒã‚·ãƒ¥éƒ¨éšŠ-ãƒŽãƒ¼ãƒžãƒ«ãƒ¢ãƒ¼ãƒ‰ã®ã¿ã§ä½¿ç”¨å¯èƒ½</span><br>
                <span>ã‚¯ãƒ©ãƒƒã‚·ãƒ¥éƒ¨éšŠã§ã¯ã€ãƒžãƒƒãƒ—å†…ã§ã®æˆ¦é—˜ãŒçµ¶ãˆé–“ãªãè¡Œã‚ã‚Œã¦ã„ã‚‹ãŸã‚ã€ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã¯ãƒãƒ¼ãƒ ãƒ¡ã‚¤ãƒˆã‚’å¾©æ´»ã•ã›ã‚‹ã“ã¨ãŒã§ãã¾ã›ã‚“ã§ã—ãŸã€‚æœªæ¥è–¬å‰¤ã®å°Žå…¥ã«ã‚ˆã‚Šã€ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã¯ä¸€åº¦å€’ã•ã‚ŒãŸå¾Œã€å†ã³æˆ¦é—˜ã«å‚åŠ ã™ã‚‹æ©Ÿä¼šã‚’å¾—ã‚‹ã“ã¨ãŒã§ãã‚‹ã‚ˆã†ã«ãªã‚Šã¾ã—ãŸã€‚æœªæ¥è–¬å‰¤ã¯ã‹ãªã‚Šã®ã‚³ã‚¹ãƒˆãŒã‹ã‹ã‚Šã¾ã™ãŒã€ãã‚Œã¯ç¢ºå®Ÿã«ã‚ãªãŸã¸é€†è»¢ã®ãƒãƒ£ãƒ³ã‚¹ã‚’ä¸Žãˆã¾ã™ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  æœªæ¥è–¬å‰¤ã¯ãƒ—ãƒ¬ã‚¤ã‚¾ãƒ¼ãƒ³åˆã¯ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã‹ã‚‰ã®å‡ºè¡€ã‚„ãƒ€ãƒ¡ãƒ¼ã‚¸ã‚’æ­¢ã‚ã‚‹ã“ã¨ã¯ã§ãã¾ã›ã‚“ã€‚ <br>
                  ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã¯ãƒ€ã‚¦ãƒ³ã—ãŸçŠ¶æ…‹ã§æœªæ¥è–¬å‰¤ã‚’ä½¿ç”¨ã™ã‚‹ã“ã¨ã§ã€æˆ¦é—˜èƒ½åŠ›ã‚’å›žå¾©ã•ã›ã‚‹ã“ã¨ãŒã§ãã¾ã™ã€‚ <br>
                  ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã¯æœªæ¥è–¬å‰¤ã‚’ä½¿ç”¨ã—ãŸå¾Œã€HPãŒ100ã®çŠ¶æ…‹ã§å¾©æ´»ã—ã¾ã™ã€‚ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ã‚¨ã‚¤ãƒ ã‚¢ã‚·ã‚¹ãƒˆ<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ã‚¯ãƒ©ãƒƒã‚·ãƒ¥éƒ¨éšŠ-ã‚¨ã‚¤ãƒ ã‚¢ã‚·ã‚¹ãƒˆã®èª¿æ•´</span><br>
                <span>ç¾åœ¨ã®ã‚¨ã‚¤ãƒ ã‚¢ã‚·ã‚¹ãƒˆã§ã¯ã€æˆ¦é—˜ä¸­ã®ã‚¿ãƒ¼ã‚²ãƒƒãƒˆã§ã¯ãªãå€’ã—ãŸã‚¿ãƒ¼ã‚²ãƒƒãƒˆãŒå„ªå…ˆã•ã‚Œã‚‹ã¨ã„ã†è‹¦æƒ…ãŒå¯„ã›ã‚‰ã‚Œã¦ã„ã¾ã™ã€‚ã“ã®å•é¡Œã¯ã€ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ãŒå¸¸ã«æˆ¦é—˜çŠ¶æ…‹ã«ã‚ã‚‹ã€Žã‚¯ãƒ©ãƒƒã‚·ãƒ¥éƒ¨éšŠã€ã§ã¯éžå¸¸ã«å¤§ããªå•é¡Œã§ã™ã€‚è„…å¨ã¨ã—ã¦æ®‹ã£ã¦ã„ã‚‹æ•µã‚’å„ªå…ˆã—ã¦ä¸€äººãšã¤ä»•ç•™ã‚ã‚‹ã“ã¨ãŒã§ãã‚‹ã‚ˆã†ã«èª¿æ•´ã—ã¦ã„ã¾ã™ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  ã‚¨ã‚¤ãƒ ã‚¢ã‚·ã‚¹ãƒˆã§ã€æˆ¦é—˜ä¸­ã®ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã‚’å„ªå…ˆçš„ã«é¸æŠžã§ãã‚‹ã‚ˆã†ã«ãªã‚Šã¾ã—ãŸï¼ˆâ€»ã‚¯ãƒ©ãƒƒã‚·ãƒ¥éƒ¨éšŠã®ã¿ï¼‰ã€‚<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">ã‚²ãƒ¼ãƒ ãƒ—ãƒ¬ã‚¤</p>
          <ul>
            <li>
              <span>æ–°ã‚¹ãƒãƒ¼ãƒ³ã‚¢ã‚¤ãƒ©ãƒ³ãƒ‰ - â€æ»‘èµ°è·¯â€<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ã‚¹ãƒãƒ¼ãƒ³ã‚¢ã‚¤ãƒ©ãƒ³ãƒ‰ã®ãƒªãƒ¯ãƒ¼ã‚¯</span><br>
                <span>ä¹…ã—ã¶ã‚Šã«æ–°ã—ã„ã‚¹ãƒãƒ¼ãƒ³ã‚¢ã‚¤ãƒ©ãƒ³ãƒ‰ã‚’ãƒªãƒªãƒ¼ã‚¹ã—ã¾ã—ãŸã€‚ã”è¦§ã«ãªã£ã¦ã€æ˜¯éžã”æ„Ÿæƒ³ã‚’ãŠèžã‹ã›ãã ã•ã„ï¼</span><br>
                <br>
                <span style="color: #666666;">
                  æ–°ã‚¹ãƒãƒ¼ãƒ³ã‚¢ã‚¤ãƒ©ãƒ³ãƒ‰-"æ»‘èµ°è·¯ "ãŒç™»å ´ã—ã¾ã—ãŸã€‚<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ã‚¯ãƒ©ã‚¦ãƒï¼†ã‚¢ãƒ³ã‚¯ãƒ©ã‚¦ãƒã‚·ã‚¹ãƒ†ãƒ <br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ã—ã‚ƒãŒã‚€æ™‚ã®ãƒ˜ãƒƒãƒ‰ã‚·ãƒ§ãƒƒãƒˆãƒ—ãƒ­ãƒ†ã‚¯ã‚·ãƒ§ãƒ³</span><br>
                <span>ä¸€éƒ¨ã®ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ãŒã€ã‚¹ã‚³ãƒ¼ãƒ—ã‚¤ãƒ³å¾Œã«ç´ æ—©ãã‚¯ãƒ©ã‚¦ãƒãƒ³ã‚°ã‚’è§£é™¤ã—ã¦å³å¸­ã®ãƒ˜ãƒƒãƒ‰ã‚·ãƒ§ãƒƒãƒˆã‚’æ‰“ã¤ã‚¹ã‚¯ãƒªãƒ—ãƒˆã‚’è¨­å®šã—ã¦ã„ã‚‹ã“ã¨ãŒåˆ¤æ˜Žã—ã¾ã—ãŸã€‚ã“ã®ã‚ˆã†ãªè¡Œç‚ºã‚’è¡Œã£ãŸãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã«ã¯ã‚«ã‚¦ãƒ³ã‚¿ãƒ¼ãƒ—ãƒ¬ã‚¤ã®æ©Ÿä¼šãŒãªã„ãŸã‚ã€ãƒ˜ãƒƒãƒ‰ã‚·ãƒ§ãƒƒãƒˆãƒ€ãƒ¡ãƒ¼ã‚¸ã‚’ä¸Žãˆã‚‹ãŸã‚ã®ãƒ‡ãƒãƒ•ã‚’è¿½åŠ ã—ã¾ã™ã€‚ã“ã®å¤‰æ›´ã¯ã“ã®ã‚¨ã‚¯ã‚¹ãƒ—ãƒ­ã‚¤ãƒˆã‚’æ‚ªç”¨ã—ã¦ã„ã‚‹ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã®ã¿ã‚’å¯¾è±¡ã¨ã—ã¦ãŠã‚Šã€é€šå¸¸ã®ã‚²ãƒ¼ãƒ ãƒ—ãƒ¬ã‚¤ã«ã¯å½±éŸ¿ã—ã¾ã›ã‚“ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  ãƒ˜ãƒƒãƒ‰ã‚·ãƒ§ãƒƒãƒˆã¯ã‚¯ãƒ©ã‚¦ãƒãƒ³ã‚°ã‚’è§£é™¤ã—ãŸç›´å¾Œã«ãƒ€ãƒ¡ãƒ¼ã‚¸ãŒæ¸›å°‘ã—ã¾ã™ã€‚(0.85s)<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>è»Šä¸¡ã®æ›´æ–°<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">è»Šä¸¡ã‚¹ãƒ”ãƒ¼ãƒ‰èª¿æ•´</span><br>
                <br>
                <span style="color: #666666;">
                  ä»¥ä¸‹ã®è»Šä¸¡ã®æœ€é«˜é€Ÿåº¦ã‚’èª¿æ•´ã—ã¾ã—ãŸã€‚<br>
                  &nbsp;&nbsp;&nbsp;- ãƒ¢ãƒ¼ã‚¿ãƒ¼ãƒã‚¤ã‚¯: <del>120km/h</del>â†’130km/h<br>
                  &nbsp;&nbsp;&nbsp;- ã‚¸ãƒ¼ãƒ—: <del>100km/h</del>â†’110km/h<br>
                  &nbsp;&nbsp;&nbsp;- TUTUã‚«ãƒ¼: <del>90km/h</del>â†’100km/h<br>
                  &nbsp;&nbsp;&nbsp;- SUV: <del>130km/h</del>â†’120km/h<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ãƒ‰ãƒ©ã‚¤ãƒ–ã‚·ã‚¹ãƒ†ãƒ <br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">æœ€é©åŒ–ã•ã‚ŒãŸé€Ÿåº¦è¡¨ç¤ºã¨æœ€é«˜é€Ÿåº¦åŠ¹æžœ</span><br>
                <span>ã»ã¨ã‚“ã©ã®è»Šä¸¡ã®é€Ÿåº¦ã‚’ä¸Šã’ã‚‹ã¨åŒæ™‚ã«ã€ã‚ˆã‚Šå¿«é©ãªé‹è»¢ãŒã§ãã‚‹ã‚ˆã†ã«ãªã‚‹ã‚«ãƒ¡ãƒ©ã®å‹•ãã‚‚è¿½åŠ ã•ã‚Œã¦ã„ã¾ã™ã€‚ã‚¢ãƒƒãƒ—ãƒ‡ãƒ¼ãƒˆå¾Œã€ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ãŒè»Šé‹è»¢æ™‚ã«æœ€é«˜é€Ÿåº¦ã«é”ã™ã‚‹ã¨ã€ã‚«ãƒ¡ãƒ©ãŒã‚ãšã‹ã«ã‚ºãƒ¼ãƒ ã‚¢ã‚¦ãƒˆã•ã‚Œã¾ã™ã€‚ã“ã‚Œã«ã‚ˆã‚Šã€ãƒ‰ãƒ©ã‚¤ãƒãƒ¼ã¯é‹è»¢ä¸­ã«ã€ã‚ˆã‚Šå¤šãã®ã‚ªãƒ–ã‚¸ã‚§ã‚¯ãƒˆã‚„éšœå®³ç‰©ã‚’è¦‹ã‚‹ã“ã¨ãŒã§ãã‚‹ã‚ˆã†ã«ãªã‚‹ãŸã‚ã€é‹è»¢ä½“é¨“ãŒã‚ˆã‚Šã‚¹ãƒ ãƒ¼ã‚ºã«ãªã‚‹ã¯ãšã§ã™ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  è»Šä¸¡ã®é€Ÿåº¦ã‚’ã‚ˆã‚Šæ­£ç¢ºã«è¡¨ç¤ºã™ã‚‹ã‚ˆã†ã«ã—ã¾ã—ãŸã€‚ <br>
                  è»Šä¸¡ãŒæœ€é«˜é€Ÿåº¦ã®æ™‚ã€ã‚«ãƒ¡ãƒ©ãŒå°‘ã—ã‚ºãƒ¼ãƒ ã‚¢ã‚¦ãƒˆã™ã‚‹ã‚ˆã†ã«ãªã‚Šã¾ã—ãŸã€‚ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ã‚°ãƒ©ã‚¤ãƒ€ãƒ¼<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ä¸€å®šã®é«˜ã•ä»¥ä¸Šã«ãªã‚‹ã¨ä¸‹é™é€Ÿåº¦ãŒä¸Šæ˜‡</span><br>
                <span>ã‚°ãƒ©ã‚¤ãƒ€ãƒ¼ã¯é«˜åº¦ã®é«˜ã„å ´æ‰€ã‹ã‚‰å®‰å…¨ã«ç€é™¸ã™ã‚‹ãŸã‚ã®é“å…·ã¨ã—ã¦ã§ã¯ãªãã€ä¸€éƒ¨ã®åˆ°é”ã§ããªã„å ´æ‰€ã«è¡ŒããŸã‚ã®ã‚¢ã‚¤ãƒ†ãƒ ã¨ã—ã¦ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ãŒä½¿ç”¨ã—ã¦ã„ã‚‹ãŸã‚ã€å°‘ã—å¤‰æ›´ã‚’åŠ ãˆã¦ã„ã¾ã™ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  é«˜åº¦38mä»¥ä¸Šã«ãªã‚‹ã¨ä¸‹é™é€Ÿåº¦ãŒé€Ÿããªã‚Šã¾ã™ã€‚<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>HPå†ç”Ÿ<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">1ç§’é–“ã«å›žå¾©ã§ãã‚‹HPã®é‡ã«åˆ¶é™ã‚’è¿½åŠ </span><br>
                <span>æ–°ã—ã„HPå†ç”Ÿã‚·ã‚¹ãƒ†ãƒ ã¨ã‚¹ã‚­ãƒ«ã®å°Žå…¥ã«ã‚ˆã‚Šã€ä¸€éƒ¨ã®ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ãŒä¸€åº¦ã«ã™ã¹ã¦ã®æ²»ç™’èƒ½åŠ›ã¨ã‚¢ã‚¤ãƒ†ãƒ ã‚’ä½¿ç”¨ã™ã‚‹ã“ã¨ã§ã€æ„å›³ã—ãŸã‚ˆã‚Šã‚‚ãšã£ã¨é•·ããƒ—ãƒ¬ã‚¤ã‚¾ãƒ¼ãƒ³ã®å¤–ã§ç”Ÿãå»¶ã³ã‚‰ã‚Œã‚‹ã“ã¨ãŒã‚ã‹ã‚Šã¾ã—ãŸã€‚ç§ãŸã¡ã¯ã€ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ãŒãƒ—ãƒ¬ã‚¤ã‚¾ãƒ¼ãƒ³ã®å¤–ã«éš ã‚Œã¦BOOYAHç²å¾—ã™ã‚‹ã®ã‚’é¿ã‘ã‚‹ãŸã‚ã«ã€ã“ã®åŠ›ã®ä¸€éƒ¨ã‚’å¥ªã£ã¦ã„ã¾ã™ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã¯50HP/sä»¥ä¸Šã®å›žå¾©ã‚’å—ã‘ã‚‰ã‚Œãªããªã‚Šã¾ã—ãŸã€‚<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">æ­¦å™¨ã¨ãƒãƒ©ãƒ³ã‚¹</p>
          <ul>
            <li>
              <span>æ–°æ­¦å™¨ - AUG<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ã‚¯ãƒ©ã‚·ãƒƒã‚¯ãƒ¢ãƒ¼ãƒ‰ã¨ã‚¯ãƒ©ãƒƒã‚·ãƒ¥éƒ¨éšŠã§ä½¿ç”¨å¯èƒ½ï¼ˆãƒ©ãƒ³ã‚¯ã¨ãƒŽãƒžãƒ«ï¼‰</span><br>
                <span>Free
                  Fireã«ARã‚’ãƒªãƒªãƒ¼ã‚¹ã™ã‚‹ã®ã¯ä¹…ã—ã¶ã‚Šã§ã™ã€‚AUGã¯éžå¸¸ã«ä¿Šæ•ã§æŸ”è»Ÿæ€§ã®é«˜ã„ã‚ªãƒ—ã‚·ãƒ§ãƒ³ã§ã€ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã¯ã‚²ãƒ¼ãƒ å†…ã§ä½¿ç”¨ã™ã‚‹ã“ã¨ãŒã§ãã¾ã™ã€‚ä»˜å±žã®2xã‚¹ã‚³ãƒ¼ãƒ—ã¯ä¸­è·é›¢ã§ã®æˆ¦é—˜ã«ã™ãã«å¯¾å¿œã§ãã€35ãƒ©ã‚¦ãƒ³ãƒ‰ãƒžã‚¬ã‚¸ãƒ³ã¯è‡³è¿‘è·é›¢ã§ã®ä½¿ç”¨ã«éžå¸¸ã«ä¾¿åˆ©ã§ã™ã€‚AUGã®åŠ¹çŽ‡ã‚’æœ€å¤§é™ã«å¼•ãå‡ºã™ãŸã‚ã«ã€é è·é›¢ç”¨ã®æ­¦å™¨ã¨ä¸€ç·’ã«AUGã‚’è©¦ã—ã¦ã¿ã¦ã¯ã„ã‹ãŒã§ã—ã‚‡ã†ã‹ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  ãƒ€ãƒ¡ãƒ¼ã‚¸ï¼š31 <br>
                  å®¹é‡ï¼š35 <br>
                  å°„æ’ƒé€Ÿåº¦ï¼š147 <br>
                  ä»–ã®ã‚¹ã‚³ãƒ¼ãƒ—ã¨äº¤æ›å¯èƒ½ãª2xã‚¹ã‚³ãƒ¼ãƒ—ãŒä»˜å±žã—ã¦ã„ã¾ã™ã€‚ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>AK<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">å…¨ãƒ¢ãƒ¼ãƒ‰ä½¿ç”¨å¯èƒ½</span><br>
                <span>AKã¯äººæ°—ã®æ­¦å™¨ã®ä¸€ã¤ã§ã¯ã‚ã‚Šã¾ã™ãŒã€ã‚²ãƒ¼ãƒ å†…ã®ä¸Šä½ARã¨æ¯”è¼ƒã™ã‚‹ã¨ç¢ºã‹ã«ç‰©è¶³ã‚Šãªã•ã‚’æ„Ÿã˜ã¾ã™ã€‚AKã®åœæ­¢åŠ›ã‚’ãƒžã‚¤ãƒŠãƒ¼ãƒã‚§ãƒ³ã‚¸ã™ã‚‹ã“ã¨ã§ã€AKã®ãƒ‘ãƒ¯ãƒ¼ã‚’å°‘ã—å›žå¾©ã•ã›ã¦ã„ã¾ã™ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  ãƒ€ãƒ¡ãƒ¼ã‚¸:37â†’38 <br>
                  æœ€å°ãƒ€ãƒ¡ãƒ¼ã‚¸:12â†’14 <br>
                  å°„æ’ƒã‚¹ãƒ”ãƒ¼ãƒ‰: -3% <br>
                  å°„æ’ƒç²¾åº¦:1â†’2 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>FAMAS<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">å…¨ãƒ¢ãƒ¼ãƒ‰ä½¿ç”¨å¯èƒ½</span><br>
                <span>ç¾åœ¨ã®ã¨ã“ã‚ã€FAMASã¯ARã®ãƒˆãƒƒãƒ—ãƒªã‚¹ãƒˆã«å…¥ã‚‹ã»ã©ä¿Šæ•ã§ã¯ã‚ã‚Šã¾ã›ã‚“ã€‚ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ãŒ3ãƒ©ã‚¦ãƒ³ãƒ‰ãƒãƒ¼ã‚¹ãƒˆã®é–“ã‚’ç§»å‹•ã—ã‚„ã™ã„ã‚ˆã†ã«ã€ç§»å‹•é€Ÿåº¦ã‚’è¿½åŠ ã—ã¦ã„ã¾ã™ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  å°„æ’ƒã™ã‚‹æ™‚ã®ç§»å‹•é€Ÿåº¦:+10%<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>M249<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">å…¨ãƒ¢ãƒ¼ãƒ‰ä½¿ç”¨å¯èƒ½</span><br>
                <span>M249ã¯é–“é•ã„ãªãç¾åœ¨æœ€ã‚‚å¼±ã„ã‚¨ã‚¢ãƒ‰ãƒ­ãƒƒãƒ—æ­¦å™¨ã®ä¸€ã¤ã§ã—ã‚‡ã†ã€‚ä»Šå›žã®ãƒ‘ãƒƒãƒã§ã¯å¤§è¦æ¨¡ãªãƒãƒ•ã‚’æ–½ã—ã€åŠ¹æžœçš„ã«ç ²ç«ã‚’æŠ‘ãˆã‚‹ã“ã¨ãŒã§ãã‚‹ã‚ˆã†ã«ãªã‚Šã¾ã—ãŸã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  å°„æ’ƒç²¾åº¦:4â†’12 <br>
                  æœ€å°ãƒ€ãƒ¡ãƒ¼ã‚¸: 15â†’21 <br>
                  æœ€å¤§åå‹•:-18% <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>SPAS12<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">å…¨ãƒ¢ãƒ¼ãƒ‰ä½¿ç”¨å¯èƒ½</span><br>
                <span>SPAS12ã¯ç‚¹é»’ç¯„å›²ã§ã®ãƒ€ãƒ¡ãƒ¼ã‚¸å‡ºåŠ›ã§ã¯ãƒˆãƒƒãƒ—ã‚³ãƒ³ãƒ†ãƒ³ãƒ€ãƒ¼ã§ã™ãŒã€ãƒ€ãƒ¡ãƒ¼ã‚¸ã®æ€¥æ¿€ãªä½Žä¸‹ãŒM1887ã‚„M1014ã‚ˆã‚Šã‚‚è‘—ã—ãã€æ‚ªã„æ€§èƒ½ã‚’ç™ºæ®ã™ã‚‹åŽŸå› ã¨ãªã£ã¦ã„ã¾ã™ã€‚ä»Šå›žã®ãƒ‘ãƒƒãƒã§ã¯SPASã«ãƒžã‚¤ãƒŠãƒ¼ãƒãƒ•ã‚’ä¸Žãˆã€ä»–ã®SGã¨ã®å·®ã‚’ç¸®ã‚ã‚‹ã“ã¨ã«ã—ã¾ã—ãŸã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  æœ€å°ãƒ€ãƒ¡ãƒ¼ã‚¸: 6â†’7<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>XM8<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">å…¨ãƒ¢ãƒ¼ãƒ‰ä½¿ç”¨å¯èƒ½</span><br>
                <span>XM8ã¯ã€ã“ã“ã—ã°ã‚‰ãã®é–“ã€ARã®ãƒªã‚¹ãƒˆã®ãƒˆãƒƒãƒ—ã«ç™»å ´ã—ã¦ã„ã¾ã™ã€‚ãã®ç†ç”±ã®ä¸€ã¤ã¯ã€ã“ã®æ­¦å™¨ãŒéžå¸¸ã«æŸ”è»Ÿã§ä½¿ã„ã‚„ã™ã„ã‹ã‚‰ã§ã™ã€‚ä»Šå›žã®ãƒ‘ãƒƒãƒã§ã¯XM8ã«ã„ãã¤ã‹ã®èª¿æ•´ã‚’åŠ ãˆã¦ã„ã‚‹ã®ã§ã€ã‚ˆã‚Šæ·±ã„å­¦ç¿’æ›²ç·šã‚’æŒã¤ã“ã¨ã«ãªã‚‹ã§ã—ã‚‡ã†ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  å°„æ’ƒç²¾åº¦: 4â†’3 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">ã‚²ãƒ¼ãƒ ãƒ¢ãƒ¼ãƒ‰</p>
          <ul>
            <li>
              <span>æ­¦å™¨ãƒ—ãƒªã‚»ãƒƒãƒˆ<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">å›£ä½“æ­»äº¡ç«¶æŠ€ã€ã‚­ãƒ«ã‚»ã‚­ãƒ¥ã‚¢ã€æ‹ ç‚¹æˆ¦äº‰ã§ä½¿ç”¨å¯èƒ½</span><br>
                <span>æ­¦å™¨ã®ãƒ—ãƒªã‚»ãƒƒãƒˆãŒ4ã‚»ãƒƒãƒˆã—ã‹ç”¨æ„ã•ã‚Œã¦ã„ãªã‹ã£ãŸãŸã‚ã€åˆ¶é™ãŒå¤šã™ãŽã‚‹ã¨ã„ã†æ„è¦‹ãŒãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã‹ã‚‰å¯„ã›ã‚‰ã‚Œã¦ã„ã¾ã™ã€‚å¾©æ´»ã™ã‚‹ãŸã³ã«ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼å…¨å“¡ãŒå¥½ããªè£…å‚™ã‚’é¸ã‚“ã§å¤‰æ›´ã§ãã‚‹ã‚ˆã†ã«ã€æ–°ã—ã„æ­¦å™¨é¸æŠžãƒ¡ãƒ‹ãƒ¥ãƒ¼ã‚’å°Žå…¥ã—ã¾ã—ãŸã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã¯ã€ãƒ©ã‚¦ãƒ³ãƒ‰ã”ã¨ã«æä¾›ã•ã‚Œã‚‹ã‚¯ãƒ¬ã‚¸ãƒƒãƒˆã§æ­¦å™¨ã‚„é˜²å…·ã‚’è³¼å…¥ã™ã‚‹ã“ã¨ãŒã§ãã‚‹ã‚ˆã†ã«ãªã‚Šã¾ã—ãŸã€‚<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ãƒ“ãƒƒã‚°ãƒ˜ãƒƒãƒ‰ãƒ¢ãƒ¼ãƒ‰<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">ãƒ‘ãƒ©ã‚·ãƒ¥ãƒ¼ãƒˆã¨å¾©æ´»ã‚·ã‚¹ãƒ†ãƒ ã®èª¿æ•´</span><br>
                <span>ãƒ“ãƒƒã‚°ãƒ˜ãƒƒãƒ‰ãƒ¢ãƒ¼ãƒ‰ã«æ–°ã‚·ã‚¹ãƒ†ãƒ ã‚’è¿½åŠ ã—ã€ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ãŒã‚ˆã‚Šæ—©ãå†å±•é–‹ã—ã¦æˆ¦é—˜ã«å¾©å¸°ã§ãã‚‹ã‚ˆã†ã«ã—ã¦ã„ã¾ã™ã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  å¢œè½ã—ãŸéš›ã«ã€ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ãŒé™å‚ã—ã¦å†é…ç½®ã™ã‚‹ã“ã¨ãŒã§ãã‚‹ã‚ˆã†ã«ãªã‚Šã¾ã—ãŸã€‚ <br>
                  ãƒ‘ãƒ©ã‚·ãƒ¥ãƒ¼ãƒˆã®é«˜åº¦ã‚’ä¸‹ã’ã€ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ãŒã‚ˆã‚Šæ—©ãæˆ¦é—˜ã«å†çªå…¥ã§ãã‚‹ã‚ˆã†ã«ã—ã¾ã—ãŸã€‚ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>éŠƒã®ç¥ž<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">æ­¦å™¨ã®ã‚¢ãƒƒãƒ—ã‚°ãƒ¬ãƒ¼ãƒ‰ã‚·ã‚¹ãƒ†ãƒ ã‚’èª¿æ•´ã—ã€4v4ã«å¯¾å¿œã—ã¾ã—ãŸ</span><br>
                <span>åˆä»£éŠƒã®ç¥žã®æœ€å¤§ã®å•é¡Œç‚¹ã®ä¸€ã¤ã¯ã€ãƒ•ãƒ¬ãƒ³ãƒ‰ãŒæ•µãƒãƒ¼ãƒ ã§ã‚ã£ãŸå ´åˆã€ä¸€ç·’ã«ãƒ—ãƒ¬ã‚¤ã—ãŸãã¦ã‚‚ã§ããªã„ã¨ã„ã†ã“ã¨ã§ã—ãŸã€‚ãã“ã§ã€éŠƒã®ç¥žã«4vs4ã®ã‚·ã‚¹ãƒ†ãƒ ã‚’åŠ ãˆã€ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã¯ãƒãƒ¼ãƒ ã¨çµ„ã‚“ã§4vs4ã®å¯¾æ±ºãŒã§ãã‚‹ã‚ˆã†ã«ãªã‚Šã¾ã—ãŸã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  4vs4ã«å¯¾å¿œã—ã¾ã—ãŸã€‚ <br>
                  3å›žã®æˆ¦é—˜ã§é€£ç¶šã—ã¦æ•—åŒ—ã—ãŸå ´åˆã‚„ã€ä»–ã®ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã¨æ¯”è¼ƒã—ã¦é€²æ—ãŒè‘—ã—ãé…ã‚Œã¦ã„ã‚‹å ´åˆã«ã€æ­¦å™¨ã‚’ã€Œã‚¹ã‚­ãƒƒãƒ—ã€ã™ã‚‹ã“ã¨ãŒã§ãã‚‹ã‚ˆã†ã«ãªã‚Šã¾ã—ãŸã€‚ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">ã‚­ãƒ£ãƒ©ã‚¯ã‚¿ãƒ¼ã¨ãƒšãƒƒãƒˆ</p>
          <ul>
            <li>
              <span>æ–°ã‚­ãƒ£ãƒ©ãƒ¼ - ãƒ«ã‚¯ã‚¨ãƒ¼ã‚¿<br></span>
              <span class="m-news-detail-s">
                <span>ã€Œãƒãƒƒãƒˆãƒˆãƒªãƒƒã‚¯ã®æº–å‚™ã¯ã§ãã¦ã„ã‚‹ã‹ï¼Ÿã€</span><br>
                <br>
                <span style="color: #666666;">
                  ãƒãƒƒãƒˆãƒˆãƒªãƒƒã‚¯ï¼š1å›žã‚­ãƒ«ã™ã‚‹ã”ã¨ã«æœ€å¤§HPãŒ{8/10/12/14/16/18}å¢—åŠ ã—ã€æœ€å¤§35ã¾ã§å¢—åŠ ã™ã‚‹ã€‚ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>æ–°ãƒšãƒƒãƒˆ - ãƒ¯ã‚´ãƒ¼ã•ã‚“<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">é–“ã‚‚ãªãç™»å ´</span><br>
                <span>æ°·å£ãŒãªã„ã“ã¨ã«ã†ã‚“ã–ã‚Šã—ã¦ã„ã¾ã›ã‚“ã‹ï¼Ÿãƒ¯ã‚´ãƒ¼ã•ã‚“ã¯ã€å¸¸ã«ã‚ãªãŸã®ãƒã‚±ãƒƒãƒˆã®ä¸­ã®æ°·å£ã‚’ãƒã‚§ãƒƒã‚¯ã—ã¦ãã‚Œã¾ã™ï¼</span><br>
                <br>
                <span style="color: #666666;">
                  ãªã‚ã‚‰ã‹ãªæ°·å£ï¼šãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã®æ‰‹æœ­ãŒ[1/1/2]æžšã®æ°·å£ä»¥ä¸‹ã®å ´åˆã€ãƒ¯ã‚´ãƒ¼ã•ã‚“ã¯[120/100/100]ç§’ã”ã¨ã«æ°·å£ã‚’1å€‹ç”Ÿæˆã™ã‚‹ã“ã¨ãŒã§ãã¾ã™ã€‚<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ãƒãƒ¤ãƒˆâ€é£›ç«â€ - é–“ã‚‚ãªãå‚ã‚‹ï¼<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">é–“ã‚‚ãªãç™»å ´</span><br>
                <span>ç¬¬2å›žç›®ã®è¦šé†’ã‚­ãƒ£ãƒ©ã€ãƒãƒ¤ãƒˆã€Œé£›ç«ã€ãŒã¤ã„ã«ç™»å ´! </span><br>
                <br>
                <span style="color: #666666;">
                  ä¾é“ï¼š6ç§’é–“ã€æ­£é¢ãƒ€ãƒ¡ãƒ¼ã‚¸ã‚’{40/45/50/55/60}%è»½æ¸›ã—ã¾ã™ã€‚CDï¼š50ç§’ã€‚å°„æ’ƒã™ã‚‹ã¨ã“ã®ã‚¢ãƒ“ãƒªãƒ†ã‚£ãŒä¸­æ–­ã•ã‚Œã¾ã™ã€‚<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">ã‚·ã‚¹ãƒ†ãƒ </p>
          <ul>
            <li>
              <span>ã‚®ãƒ«ãƒ‰ãƒªãƒ¼ãƒ€ãƒ¼ä»£è¡Œ<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">æ–°ç®¡ç†ã‚·ã‚¹ãƒ†ãƒ ã‚’è¿½åŠ ã—ã¾ã—ãŸ</span><br>
                <span>å‰å›žã®ã‚¢ãƒƒãƒ—ãƒ‡ãƒ¼ãƒˆã§ã¯ã€ã‚®ãƒ«ãƒ‰ã«è¿½åŠ ã—ãŸç®¡ç†ãƒ„ãƒ¼ãƒ«ã«ã¤ã„ã¦ã€å¤šãã®è‚¯å®šçš„ãªãƒ•ã‚£ãƒ¼ãƒ‰ãƒãƒƒã‚¯ã‚’ã„ãŸã ãã¾ã—ãŸã€‚ã—ã‹ã—ã€ä¸€éƒ¨ã®ã‚®ãƒ«ãƒ‰ã§ã¯ã€ã‚®ãƒ«ãƒ‰ãƒªãƒ¼ãƒ€ãƒ¼ãŒæ´»å‹•ã—ãªããªã£ãŸæ™‚ãŒæœ€å¤§ã®æ‚©ã¿ã«ãªã£ã¦ã„ã‚‹ã¨ã®ã”æ„è¦‹ã‚’ã„ãŸã ãã¾ã—ãŸã€‚ãã“ã§ã€ã‚®ãƒ«ãƒ‰ãƒ¡ãƒ³ãƒãƒ¼ãŒä¸€æ™‚çš„ãªã‚®ãƒ«ãƒ‰ãƒªãƒ¼ãƒ€ãƒ¼ã‚’æŠ•ç¥¨ã§ãã‚‹ã‚·ã‚¹ãƒ†ãƒ ã‚’è¿½åŠ ã—ã€ã‚®ãƒ«ãƒ‰ãƒªãƒ¼ãƒ€ãƒ¼ãŒã„ãªããªã£ã¦ã‚‚ã‚®ãƒ«ãƒ‰ãŒæ´»å‹•ã‚’ç¶šã‘ã‚‰ã‚Œã‚‹ã‚ˆã†ã«ã—ã¾ã—ãŸã€‚</span><br>
                <br>
                <span style="color: #666666;">
                  ã‚®ãƒ«ãƒ‰ãƒªãƒ¼ãƒ€ãƒ¼ãŒ30æ—¥ä»¥ä¸Šæ´»å‹•ã—ã¦ã„ãªã„å ´åˆã€ã‚®ãƒ«ãƒ‰ãƒ¡ãƒ³ãƒãƒ¼ã«æ–°ã—ã„ä»£è¡Œã‚®ãƒ«ãƒ‰ãƒªãƒ¼ãƒ€ãƒ¼ã«æŠ•ç¥¨ã™ã‚‹ãŸã‚ã®é€šçŸ¥ãŒé€ã‚‰ã‚Œã¾ã™ã€‚ <br>
                  æŠ•ç¥¨ãŒè¡Œã‚ã‚ŒãŸå¾Œã€ã‚®ãƒ«ãƒ‰ãƒªãƒ¼ãƒ€ãƒ¼ä»£è¡Œã¯ã‚®ãƒ«ãƒ‰ãƒªãƒ¼ãƒ€ãƒ¼ã®å…¨æ¨©é™ã‚’æŒã¤ã“ã¨ãŒã§ãã¾ã™ã€‚ãŸã ã—ã€å…ƒã®ã‚®ãƒ«ãƒ‰ãƒªãƒ¼ãƒ€ãƒ¼ãŒå¾©å¸°ã—ãŸå ´åˆã¨ã€ã‚®ãƒ«ãƒ‰ãƒªãƒ¼ãƒ€ãƒ¼ä»£è¡ŒãŒ7æ—¥é–“ä»¥ä¸Šæ´»å‹•ã—ã¦ã„ãªã„å ´åˆã«ã¯ã€ãã®å…¨æ¨©é™ã¯å¤±ã‚ã‚Œã¾ã™ã€‚
                  <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>ãƒã‚°ä¿®æ­£ã¨æœ€é©åŒ–<br></span>
              <span class="m-news-detail-s">
                &nbsp;&nbsp;&nbsp;- ã‚¯ãƒ©ãƒƒã‚·ãƒ¥éƒ¨éšŠã¨éŠƒã®ç¥žã®æ–°ã—ã„ãƒžãƒƒãƒã‚µãƒžãƒªãƒ¼ãƒšãƒ¼ã‚¸ã‚’è¿½åŠ ã—ã¾ã—ãŸã€‚ <br>
                &nbsp;&nbsp;&nbsp;- ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã¯ã€ã‚·ã‚¹ãƒ†ãƒ ãŒç”Ÿæˆã—ãŸãƒªãƒ³ã‚¯ã‚’é€ä¿¡ã—ã¦å‹äººã‚’ãƒ‘ãƒ¼ãƒ†ã‚£ã«æ‹›å¾…ã§ãã‚‹ã‚ˆã†ã«ãªã‚Šã¾ã—ãŸã€‚ <br>
                &nbsp;&nbsp;&nbsp;- ã‚²ãƒ¼ãƒ å†…ã®æ­¦å™¨HUDã‚’æœ€é©åŒ–ã—ã¾ã—ãŸã€‚ <br>
                &nbsp;&nbsp;&nbsp;- ã‚µãƒ¼ãƒžãƒ«ã‚¹ã‚³ãƒ¼ãƒ—ã§ã‚¹ãƒ¢ãƒ¼ã‚¯ã®ç…™ã‚’è¦‹é€šã™ã“ã¨ãŒã§ãã‚‹ã‚ˆã†ã«ãªã‚Šã¾ã—ãŸã€‚ <br>
                &nbsp;&nbsp;&nbsp;- ãƒ‘ãƒ¼ãƒ†ã‚£ãƒ¼æ‹›å¾…çŠ¶ã®è¡¨ç¤ºã‚’æœ€é©åŒ–ã—ã¾ã—ãŸã€‚ <br>
                &nbsp;&nbsp;&nbsp;- æ–°ã‚³ãƒ³ãƒ†ãƒ³ãƒ„ã‚’FREE FIREã‚¸ãƒ£ãƒ¼ãƒŠãƒ«ã«æ›´æ–°ã—ã¾ã—ãŸã€‚ <br>
                &nbsp;&nbsp;&nbsp;- æŽ¥è¿‘æˆ¦ãƒ¢ãƒ¼ãƒ‰ç´¹ä»‹å‹•ç”»ã®è¡¨ç¤ºã‚’æœ€é©åŒ–ã—ã¾ã—ãŸã€‚ <br>
                &nbsp;&nbsp;&nbsp;- å›£ä½“æ­»äº¡ç«¶æŠ€ãƒ¢ãƒ¼ãƒ‰ã®ã‚ªãƒ¼ãƒãƒ¼ã‚¿ã‚¤ãƒ è¡¨ç¤ºã‚’æœ€é©åŒ–ã—ã¾ã—ãŸã€‚ <br>
                &nbsp;&nbsp;&nbsp;- ãƒ‘ãƒ©ã‚·ãƒ¥ãƒ¼ãƒˆã‚¢ãƒ‹ãƒ¡ãƒ¼ã‚·ãƒ§ãƒ³ã‚’æœ€é©åŒ–ã—ã¾ã—ãŸã€‚ <br>
                &nbsp;&nbsp;&nbsp;- ã‚«ãƒ©ãƒãƒªãŒã‚«ã‚¹ã‚¿ãƒ ãƒ«ãƒ¼ãƒ ã«è¿½åŠ ã•ã‚Œã¾ã—ãŸã€‚ <br>
                &nbsp;&nbsp;&nbsp;- ä¸€éƒ¨ã®ãƒ¢ãƒ¼ãƒ‰ã§ã€ãƒ•ãƒªãƒ¼ã‚ºæ™‚é–“ãŒçµ‚äº†ã™ã‚‹å‰ã«ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ãŒæº–å‚™ã‚¨ãƒªã‚¢ã‹ã‚‰é›¢ã‚Œã‚‹ã“ã¨ãŒã§ãã‚‹ãƒã‚°ã‚’ä¿®æ­£ã—ã¾ã—ãŸã€‚ <br>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
        </div>
      </div>
    `,
    de: ``,
    it: ``,
    'eu-pt': ``,
    my: `
      <div class="g-detail">
        <h2 class="c-h2">Patch Notes: á€á€­á€¯á€¸á€á€€á€ºá€•á€¼á€±á€¬á€„á€ºá€¸á€œá€²á€á€¼á€„á€ºá€¸</h2>
        <div class="m-detail-time">Jul. 27, 2020</div>
        <div class="m-news-detail">
          <p class="orange">4v4</p>
          <ul>
            <li>
              <span>Rank á€›á€¬á€žá€® 2<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€›á€¬á€žá€®á€…á€á€„á€ºá€á€»á€­á€”á€º 07/30 17:00 SGT</span><br>
                <span>4v4 Rank á€›á€¬á€žá€® 2 á€€á€’á€®á€™á€¾á€¬á€•á€« ! á€›á€½á€¾á€± III á€‘á€­á€›á€±á€¬á€€á€ºá€¡á€±á€¬á€„á€ºá€¡á€†á€„á€·á€ºá€™á€¼á€¾á€„á€·á€ºá€•á€« á€žá€­á€¯á€·
                  4v4á€€á€¡á€‘á€°á€¸á€•á€…á€¹á€…á€Šá€ºá€¸á€™á€»á€¬á€¸á€šá€°á€›á€”á€ºá€¡á€á€½á€€á€ºá€•á€«</span><br>
                <br>
                <span style="color: #666666;">
                  4v4 á€…á€»á€±á€¸á€†á€­á€¯á€„á€ºá€€á€•á€¼á€¯á€•á€¼á€„á€ºá€•á€¼á€±á€¬á€„á€ºá€¸á€œá€²á€‘á€¬á€¸á€•á€«á€žá€Šá€º<br>
                  4v4 á€€á€…á€¬á€¸á€žá€™á€¬á€¸á€á€­á€¯á€·á€›á€²á€·á€…á€¶á€á€»á€­á€”á€ºá€”á€¾á€¯á€”á€ºá€¸á€™á€»á€¬á€¸á€€á€­á€¯ á„á€„á€ºá€¸á€á€­á€¯á€·á€›á€²á€· á€€á€­á€¯á€šá€ºá€›á€±á€¸á€¡á€€á€»á€‰á€ºá€¸á€™á€¾á€¬á€á€„á€ºá€€á€¼á€Šá€·á€ºá€”á€­á€¯á€„á€ºá€•á€«á€á€šá€º<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>á€•á€…á€¹á€…á€Šá€ºá€¸á€¡á€žá€…á€º - á€™á€­á€¯á€¸á€‡á€€á€º (á€›á€¾á€„á€ºá€žá€”á€ºá€á€¼á€„á€ºá€¸á€†á€±á€¸)<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€‚á€”á€¹á€á€á€„á€ºá€”á€Šá€ºá€¸á€œá€™á€ºá€¸á€™á€¾á€¬á€†á€±á€¬á€·á€”á€­á€¯á€„á€ºá€•á€«á€•á€¼á€®</span><br>
                <span>á€•á€¯á€¶á€™á€¾á€”á€ºá€†á€­á€¯á€›á€„á€º á€€á€…á€¬á€¸á€žá€™á€¬á€¸á€™á€»á€¬á€¸á€Ÿá€¬ á€žá€°á€á€­á€¯á€·á€¡á€–á€½á€²á€·á€á€„á€ºá€™á€»á€¬á€¸á€›á€²á€·á€›á€¾á€„á€ºá€žá€”á€ºá€›á€”á€ºá€¡á€á€½á€€á€ºá€€á€°á€Šá€®á€›á€”á€º á€¡á€á€½á€„á€·á€ºá€¡á€›á€±á€¸á€™á€›á€€á€¼á€•á€«á€˜á€°á€¸
                  á€˜á€¬á€œá€­á€¯á€·á€œá€²á€†á€­á€¯á€á€±á€¬á€· á€™á€¼á€±á€•á€¯á€¶á€›á€²á€·á€•á€á€ºá€•á€á€ºá€œá€Šá€ºá€™á€¾á€¬á€á€­á€¯á€ºá€€á€ºá€á€­á€¯á€€á€ºá€€á€¼á€á€²á€·á€¡á€á€½á€€á€ºá€•á€« á€™á€­á€¯á€¸á€‡á€€á€º á€†á€­á€¯á€á€¬á€€
                  á€€á€…á€¬á€¸á€žá€™á€¬á€¸á€™á€»á€¬á€¸á€”á€±á€¬á€€á€ºá€á€…á€ºá€€á€¼á€­á€™á€ºá€á€­á€¯á€€á€ºá€á€­á€¯á€€á€ºá€›á€”á€ºá€¡á€á€½á€€á€ºá€¡á€á€½á€„á€·á€ºá€¡á€›á€±á€¸á€•á€²á€–á€¼á€…á€ºá€•á€«á€á€šá€º á€’á€«á€€á€¼á€±á€¬á€„á€·á€ºá€™á€­á€¯á€·á€œá€­á€¯á€· á€™á€­á€¯á€¸á€‡á€€á€º
                  á€€á€¡á€›á€™á€ºá€¸á€€á€­á€¯á€á€”á€ºá€–á€­á€¯á€¸á€›á€¾á€­á€•á€«á€á€šá€º á€’á€«á€•á€±á€™á€šá€·á€ºá€¡á€¬á€¸á€œá€¯á€¶á€¸á€€á€¼á€­á€¯á€€á€ºá€”á€¾á€…á€ºá€žá€€á€ºá€á€²á€·á€¡á€›á€¬á€–á€¼á€…á€ºá€™á€¾á€¬á€¡á€žá€±á€¡á€á€»á€¬á€•á€«á€•á€²</span><br>
                <br>
                <span style="color: #666666;">
                  á€™á€­á€¯á€¸á€‡á€€á€º á€€á€…á€¬á€¸á€žá€±á€¬á€‡á€¯á€”á€ºá€€á€”á€±á€’á€«á€™á€±á€·á€á€»á€ºá€‘á€­á€žá€Šá€·á€ºá€¡á€á€«á€™á€»á€­á€¯á€¸ á€žá€­á€¯á€· á€žá€¯á€¶á€¸á€žá€Šá€·á€ºá€¡á€á€«á€žá€½á€±á€¸á€™á€œá€»á€±á€¬á€·á€€á€»á€•á€« á€€á€…á€¬á€¸á€žá€™á€¬á€¸á€™á€»á€¬á€¸
                  á„á€„á€ºá€¸á€€á€­á€¯á€žá€¯á€¶á€¸á€žá€Šá€·á€ºá€¡á€á€« á€á€­á€¯á€€á€ºá€á€­á€¯á€€á€ºá€™á€¾á€¯á€…á€½á€™á€ºá€¸á€›á€Šá€ºá€€á€­á€¯á€•á€¼á€”á€ºá€œá€Šá€ºá€›á€šá€°á€”á€­á€¯á€„á€ºá€•á€«á€žá€Šá€º á€™á€­á€¯á€¸á€‡á€€á€º á€€á€­á€¯á€¡á€žá€¯á€¶á€¸á€•á€¼á€¯á€•á€¼á€®á€¸á€”á€±á€¬á€€á€º HP 100
                  á€›á€›á€¾á€­á€™á€¾á€–á€¼á€…á€ºá€•á€«á€á€šá€º <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>á€€á€°á€á€»á€­á€”á€ºá€á€¼á€„á€ºá€¸ <br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€€á€°á€Šá€®á€á€¼á€„á€ºá€¸ 4v4 á€™á€¾á€¬ á€•á€¼á€”á€ºá€œá€Šá€ºá€•á€¼á€¯á€•á€¼á€„á€ºá€‘á€¬á€¸á€•á€«á€á€šá€º</span><br>
                <span>á€€á€…á€¬á€¸á€žá€™á€¬á€¸á€™á€»á€¬á€¸á€†á€®á€€á€€á€°á€á€»á€­á€”á€ºá€á€¼á€„á€ºá€¸ á€¡á€…á€®á€›á€„á€ºá€á€¶á€…á€¬á€á€½á€±á€œá€€á€ºá€á€¶á€›á€›á€¾á€­á€‘á€¬á€¸á€•á€«á€á€šá€º
                  á€‘á€­á€¯á€•á€¼á€¿á€”á€¬á€€á€€á€…á€¬á€¸á€žá€™á€¬á€¸á€™á€»á€¬á€¸á€¡á€á€½á€€á€ºá€¡á€›á€™á€ºá€¸á€€á€­á€¯á€¡á€”á€¾á€±á€¬á€€á€·á€ºá€¡á€šá€¾á€€á€ºá€–á€¼á€…á€ºá€…á€±á€•á€«á€á€šá€º á€’á€«á€€á€¼á€±á€¬á€„á€·á€ºá€™á€­á€¯á€·á€œá€­á€¯á€·
                  á€‚á€­á€™á€ºá€¸á€¡á€á€½á€„á€ºá€¸á€á€»á€­á€”á€ºá€á€¼á€„á€ºá€¸á€…á€”á€…á€ºá€€á€­á€¯ á€›á€”á€ºá€žá€°á€á€…á€ºá€šá€±á€¬á€€á€ºá€á€¼á€„á€ºá€¸á€†á€®á€€á€­á€¯á€¡á€›á€„á€ºá€•á€…á€ºá€”á€­á€¯á€„á€ºá€›á€”á€º á€•á€¼á€”á€ºá€œá€Šá€ºá€•á€¼á€¯á€•á€¼á€„á€ºá€‘á€¬á€¸á€•á€«á€žá€Šá€º</span><br>
                <br>
                <span style="color: #666666;">
                  á€€á€°á€á€»á€­á€”á€ºá€á€¼á€„á€ºá€¸á€…á€”á€…á€ºá€€á€žá€„á€·á€ºá€€á€­á€¯á€…á€”á€…á€ºá€á€€á€»á€–á€¼á€…á€ºá€¡á€±á€¬á€„á€ºá€œá€¯á€•á€ºá€†á€±á€¬á€„á€ºá€•á€±á€¸á€œá€­á€™á€·á€ºá€™á€Šá€ºá€–á€¼á€…á€ºá€•á€«á€á€šá€º ( 4v4á€€á€…á€¬á€¸á€•á€½á€²á€¡á€á€½á€€á€ºá€žá€¬)<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">á€‚á€­á€™á€ºá€¸á€…á€”á€…á€º</p>
          <ul>
            <li>
              <span>á€•á€¼á€”á€ºá€›á€¾á€”á€ºá€žá€”á€ºá€›á€”á€ºá€…á€±á€¬á€„á€·á€ºá€žá€Šá€·á€ºá€€á€»á€½á€”á€ºá€¸á€¡á€žá€…á€º - â€œá€œá€±á€šá€¬á€‰á€ºá€€á€½á€„á€ºá€¸ â€œ<br></span>
              <span class="m-news-detail-s">
                <span
                  style="font-style: italic; color: #666666;">á€•á€¼á€”á€ºá€›á€¾á€”á€ºá€žá€”á€ºá€›á€”á€ºá€…á€±á€¬á€„á€·á€ºá€žá€Šá€·á€ºá€€á€»á€½á€”á€ºá€¸á€…á€á€„á€ºá€¡á€œá€¯á€•á€ºá€œá€¯á€•á€ºá€•á€«á€•á€¼á€®</span><br>
                <span>â€œá€•á€¼á€”á€ºá€›á€¾á€”á€ºá€žá€”á€ºá€›á€”á€ºá€…á€±á€¬á€„á€·á€ºá€žá€Šá€·á€ºá€€á€»á€½á€”á€ºá€¸á€¡á€žá€…á€ºá€€á€­á€¯á€˜á€šá€ºá€œá€­á€¯á€á€¶á€…á€¬á€¸á€›á€žá€œá€²á€†á€­á€¯á€á€¬á€•á€¼á€±á€¬á€•á€¼á€€á€¼á€Šá€·á€ºá€•á€«á€œá€¬á€¸!â€</span><br>
                <br>
                <span style="color: #666666;">
                  á€•á€¼á€”á€ºá€›á€¾á€”á€ºá€žá€”á€ºá€›á€”á€ºá€…á€±á€¬á€„á€·á€ºá€žá€Šá€·á€ºá€€á€»á€½á€”á€ºá€¸á€¡á€žá€…á€º - â€œá€œá€±á€šá€¬á€‰á€ºá€€á€½á€„á€ºá€¸ â€œ á€šá€á€¯á€…á€á€„á€ºá€†á€±á€¬á€·á€”á€­á€¯á€„á€ºá€•á€«á€•á€¼á€®<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>á€‘á€­á€¯á€„á€º & á€á€¯á€”á€ºá€•á€¼á€®á€¸á€•á€…á€ºá€á€¼á€„á€ºá€¸á€™á€»á€¬á€¸á€€á€­á€¯á€•á€¼á€¯á€•á€¼á€„á€º<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€‘á€­á€¯á€„á€ºá€•á€¼á€®á€¸á€•á€…á€ºá€žá€±á€¬á€¡á€á€« á€á€±á€«á€„á€ºá€¸á€•á€…á€ºá€á€»á€€á€ºá€€á€¬á€€á€½á€šá€ºá€á€¼á€„á€ºá€¸</span><br>
                <br>
                <span style="color: #666666;">
                  á€‘á€­á€¯á€„á€º & á€á€¯á€”á€ºá€•á€¼á€®á€¸á€•á€…á€ºá€á€¼á€„á€ºá€¸á€™á€»á€¬á€¸á€Šá€®á€™á€»á€¾á€…á€½á€¬á€•á€¼á€”á€ºá€œá€Šá€ºá€•á€¼á€¯á€•á€¼á€„á€ºá€‘á€¬á€¸á€•á€«á€žá€Šá€º(0.85 á€…á€€á€¹á€€á€”á€·á€º)<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>á€šá€¬á€‰á€ºá€™á€»á€¬á€¸á€€á€­á€¯á€•á€¼á€”á€ºá€œá€Šá€ºá€¡á€•á€ºá€’á€­á€á€ºá€œá€¯á€•á€ºá€á€¼á€„á€ºá€¸<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€šá€¬á€‰á€ºá€™á€»á€¬á€¸á€€á€­á€¯á€•á€¼á€”á€ºá€œá€Šá€ºá€•á€¼á€¯á€•á€¼á€„á€ºá€‘á€¬á€¸á€•á€«á€žá€Šá€º</span><br>
                <span>á€žá€„á€ºá€á€­á€¯á€·á€…á€­á€á€ºá€á€­á€¯á€„á€ºá€¸á€€á€»á€–á€¼á€…á€ºá€…á€±á€›á€™á€Šá€º</span><br>
                <br>
                <span style="color: #666666;">
                  á€šá€¬á€‰á€ºá€¡á€™á€»á€­á€¯á€¸á€™á€»á€­á€¯á€¸á€›á€²á€·á€¡á€™á€¼á€„á€·á€ºá€†á€¯á€¶á€¸á€¡á€›á€¾á€­á€”á€ºá€”á€¾á€¯á€”á€ºá€¸ <br>
                  &nbsp;&nbsp;&nbsp;- á€™á€±á€¬á€ºá€á€¬á€ºá€†á€­á€¯á€„á€ºá€€á€šá€º: 120km/h->130km/h <br>
                  &nbsp;&nbsp;&nbsp;- á€‚á€»á€…á€ºá€€á€¬á€¸: 100km/h-> 110km/h <br>
                  &nbsp;&nbsp;&nbsp;- á€á€½á€€á€ºá€á€½á€€á€ºá€€á€¬á€¸: 90km/h-> 100km/h <br>
                  &nbsp;&nbsp;&nbsp;- á€€á€¬á€¸: 130km/h->120km/h <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>á€…á€€á€ºá€šá€”á€¹á€á€›á€¬á€¸ á€™á€±á€¬á€„á€ºá€¸á€”á€¾á€„á€ºá€á€¼á€„á€ºá€¸<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€¡á€™á€¼á€”á€ºá€”á€¾á€¯á€”á€ºá€¸á€žá€€á€ºá€›á€±á€¬á€€á€ºá€™á€¾á€¯ á€”á€¾á€„á€·á€º
                  á€™á€»á€€á€ºá€”á€¾á€¬á€•á€¼á€„á€ºá€¡á€™á€¼á€”á€ºá€”á€¾á€¯á€”á€ºá€¸á€™á€»á€¬á€¸á€€á€­á€¯ á€•á€­á€¯á€™á€­á€¯á€€á€±á€¬á€„á€ºá€¸á€™á€½á€”á€ºá€¡á€±á€¬á€„á€ºá€•á€¼á€¯á€œá€¯á€•á€ºá€‘á€¬á€¸á€žá€Šá€º</span><br>
                <span>â€œá€€á€¯á€”á€ºá€œá€™á€ºá€¸á€žá€½á€¬á€¸ á€šá€¬á€‰á€ºá€¡á€™á€»á€¬á€¸á€…á€¯á€€á€­á€¯
                  á€¡á€›á€„á€ºá€‘á€€á€ºá€¡á€™á€¼á€”á€ºá€”á€¾á€¯á€”á€ºá€¸á€•á€­á€¯á€¡á€±á€¬á€„á€ºá€œá€¯á€•á€ºá€†á€±á€¬á€„á€ºá€‘á€¬á€¸á€žá€Šá€ºáŠáŠá€€á€„á€ºá€™á€›á€¬á€œá€¾á€¯á€•á€ºá€›á€¾á€¬á€¸á€™á€¾á€¯á€•á€«á€‘á€€á€ºá€™á€¶á€‘á€Šá€·á€ºá€žá€½á€„á€ºá€¸á€‘á€¬á€¸á€•á€¼á€®á€¸ á€™á€±á€¬á€„á€ºá€¸á€”á€¾á€„á€ºá€…á€‰á€º
                  á€žá€€á€ºá€á€±á€¬á€„á€·á€ºá€žá€€á€ºá€žá€¬á€›á€¾á€­á€…á€±á€›á€”á€ºá€œá€¯á€•á€ºá€†á€±á€¬á€„á€ºá€‘á€¬á€¸á€žá€Šá€ºáŠ
                  á€šá€¬á€‰á€ºá€™á€±á€¬á€„á€ºá€¸á€”á€¾á€„á€ºá€”á€±á€…á€‰á€º á€¡á€™á€¼á€”á€ºá€”á€¾á€¯á€”á€ºá€¸á€–á€¼á€„á€·á€ºá€€á€„á€ºá€™á€›á€¬á€€á€­á€¯ á€¡á€”á€Šá€ºá€¸á€„á€šá€ºá€á€»á€²á€·á€”á€­á€¯á€„á€ºá€¡á€±á€¬á€„á€º
                  á€”á€±á€¬á€€á€ºá€†á€¯á€¶á€¸á€•á€±á€«á€ºá€•á€¼á€¯á€•á€¼á€„á€ºá€™á€½á€™á€ºá€¸á€™á€¶á€•á€±á€¸á€‘á€¬á€¸á€•á€«á€žá€Šá€ºáŠá€™á€±á€¬á€„á€ºá€¸á€”á€¾á€„á€ºá€™á€¾á€¯á€¡á€á€½á€±á€¡á€€á€¼á€¯á€¶á€•á€­á€¯á€™á€­á€¯á€€á€±á€¬á€„á€ºá€¸á€™á€½á€”á€ºá€…á€±á€•á€¼á€®á€¸
                  á€™á€±á€¬á€„á€ºá€¸á€”á€¾á€„á€ºá€”á€±á€…á€‰á€ºá€¡á€›á€¬á€á€á€¹á€‘á€¯á€™á€»á€¬á€¸á€”á€¾á€„á€·á€ºá€‘á€­á€á€­á€¯á€€á€ºá€™á€¾á€¯á€™á€›á€¾á€­á€¡á€±á€¬á€„á€ºá€œá€Šá€ºá€¸á€œá€¯á€•á€ºá€†á€±á€¬á€„á€ºá€•á€±á€¸á€‘á€¬á€¸á€•á€«á€žá€Šá€ºâ€</span><br>
                <br>
                <span style="color: #666666;">
                  á€™á€»á€€á€ºá€”á€¾á€¬á€•á€¼á€„á€ºá€á€½á€„á€º á€šá€¬á€‰á€ºá€™á€±á€¬á€„á€ºá€¸á€”á€¾á€„á€ºá€™á€¾á€¯á€¡á€™á€¼á€”á€ºá€”á€¾á€¯á€”á€ºá€¸á€€á€­á€¯ á€•á€­á€¯á€™á€­á€¯á€á€­á€€á€»á€¡á€±á€¬á€„á€ºá€‘á€Šá€·á€ºá€žá€½á€„á€ºá€¸á€‘á€¬á€¸á€žá€Šá€º <br>
                  á€šá€á€¯á€™á€¾á€…á€•á€¼á€®á€¸ á€šá€¬á€‰á€ºá€™á€±á€¬á€„á€ºá€¸á€”á€¾á€„á€ºá€”á€±á€…á€‰á€º á€€á€„á€ºá€™á€›á€¬á€–á€¼á€„á€·á€ºá€¡á€›á€¬á€á€á€¹á€‘á€¯á€™á€»á€¬á€¸á€€á€­á€¯á€¡á€”á€®á€¸á€€á€•á€ºá€€á€¼á€Šá€·á€ºá€”á€­á€¯á€„á€ºá€žá€Šá€º <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>á€…á€€á€ºá€™á€²á€·á€œá€±á€šá€¬á€‰á€ºá€™á€»á€¬<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€›á€±á€¬á€€á€ºá€›á€¾á€­á€”á€±á€žá€±á€¬á€¡á€™á€¼á€„á€·á€ºá€•á€±á€™á€¾
                  á€›á€¯á€á€ºá€á€›á€€á€ºá€¡á€›á€¾á€­á€”á€ºá€–á€¼á€„á€·á€ºá€†á€„á€ºá€¸á€žá€€á€ºá€”á€­á€¯á€„á€ºá€žá€Šá€º</span><br>
                <span style="font-style: italic; color: #666666;">á€€á€»á€”á€º</span><br>
                <span>â€œá€…á€€á€ºá€™á€²á€·á€œá€±á€šá€¬á€‰á€ºá€™á€»á€¬á€¸á€€á€­á€¯á€¡á€”á€Šá€ºá€¸á€„á€šá€ºá€•á€¼á€±á€¬á€„á€ºá€¸á€œá€²á€‘á€¬á€¸á€•á€«á€žá€Šá€º á€˜á€¬á€·á€€á€¼á€±á€¬á€„á€·á€ºá€œá€²á€†á€­á€¯á€á€±á€¬á€· á€€á€…á€¬á€¸á€žá€°á€¡á€”á€±á€–á€¼á€„á€·á€º
                  á€á€á€»á€­á€¯á€·á€žá€±á€¬á€•á€…á€¹á€…á€Šá€ºá€¸á€™á€»á€¬á€¸ á€€á€­á€›á€­á€šá€¬á€™á€»á€¬á€¸á€€á€­á€¯á€¡á€žá€¯á€¶á€¸á€•á€¼á€¯á€•á€¼á€®á€¸ á€œá€€á€ºá€›á€¾á€­á€¡á€™á€¼á€„á€·á€ºá€•á€±á€™á€¾ á€™á€¼á€±á€•á€¼á€„á€ºá€žá€­á€¯á€·
                  á€œá€¯á€¶á€á€¼á€¯á€¶á€…á€­á€á€ºá€á€»á€…á€½á€¬á€†á€„á€ºá€¸á€žá€€á€ºá€”á€­á€„á€ºá€žá€Šá€ºâ€</span><br>
                <br>
                <span style="color: #666666;">
                  á€šá€á€¯á€€á€…á€¬á€¸á€žá€™á€¬á€¸á€™á€»á€¬á€¸á€žá€Šá€º 38m á€¡á€™á€¼á€„á€·á€ºá€•á€±á€™á€¾ á€œá€»á€¾á€„á€ºá€™á€¼á€”á€ºá€…á€½á€¬á€†á€„á€ºá€¸á€žá€€á€ºá€”á€­á€¯á€„á€ºá€žá€Šá€º<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>á€€á€»á€”á€ºá€¸á€™á€¬á€›á€±á€¸ á€•á€¼á€”á€ºá€œá€Šá€ºá€žá€”á€ºá€…á€½á€™á€ºá€¸á€œá€¬á€á€¼á€„á€ºá€¸<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€€á€»á€”á€ºá€¸á€™á€¬á€›á€±á€¸á€žá€Šá€º á€á€…á€ºá€…á€€á€¹á€€á€”á€·á€ºá€¡á€á€½á€„á€ºá€¸ á€žá€á€ºá€™á€¾á€á€ºá€‘á€¬á€¸á€žá€±á€¬á€•á€™á€¬á€á€™á€¾
                  á€”á€‚á€­á€¯á€¡á€á€­á€¯á€„á€ºá€¸á€•á€¼á€”á€ºá€œá€Šá€ºá€€á€±á€¬á€„á€ºá€¸á€™á€½á€”á€ºá€œá€¬á€”á€­á€¯á€„á€ºá€žá€Šá€º</span><br>
                <span> â€œá€€á€»á€”á€ºá€¸á€™á€¬á€›á€±á€¸á€¡á€á€½á€€á€º á€…á€€á€ºá€€á€­á€›á€­á€šá€¬á€™á€»á€¬á€¸á€”á€¾á€„á€·á€º á€€á€»á€½á€™á€ºá€¸á€€á€»á€„á€ºá€™á€¾á€¯á€™á€»á€¬á€¸á€¡á€€á€¼á€±á€¬á€„á€ºá€¸ á€™á€­á€á€ºá€†á€€á€ºá€•á€±á€¸á€•á€«á€›á€…á€±áŠá€šá€á€¯á€„á€«á€á€­á€¯á€·
                  á€™á€»á€€á€ºá€…á€­á€›á€¾á€±á€·á€€á€­á€¯á€›á€±á€¬á€€á€ºá€œá€¬á€•á€«á€•á€¼á€® á€á€á€»á€­á€¯á€·á€žá€±á€¬á€€á€…á€¬á€¸á€žá€™á€¬á€¸á€™á€»á€¬á€¸á€žá€Šá€º á€¡á€•á€¼á€„á€ºá€€á€…á€¬á€¸á€›á€”á€ºá€žá€á€ºá€™á€¾á€á€ºá€‘á€¬á€¸á€žá€±á€¬á€”á€±á€›á€¬á€á€½á€„á€ºá€¡á€žá€€á€ºá€›á€¾á€„á€ºá€”á€­á€¯á€„á€ºá€•á€¼á€®á€¸
                  á€€á€»á€”á€ºá€¸á€™á€¬á€›á€±á€¸á€¡á€á€½á€€á€ºá€žá€á€ºá€™á€¾á€á€ºá€‘á€¬á€¸á€žá€±á€¬
                  á€•á€…á€¹á€…á€Šá€ºá€¸á€™á€»á€¬á€¸á€€á€­á€¯á€á€…á€ºá€€á€¼á€­á€™á€ºá€‘á€²á€¡á€€á€¯á€”á€ºá€¡á€žá€¯á€¶á€¸á€•á€¼á€¯á€”á€­á€¯á€„á€ºá€žá€Šá€ºáŠá€€á€…á€¬á€¸á€žá€™á€¬á€¸á€™á€»á€¬á€¸á€€á€­á€¯ á€á€á€»á€­á€¯á€·á€žá€±á€¬á€…á€½á€™á€ºá€¸á€¡á€„á€ºá€™á€»á€¬á€¸á€™á€á€½á€±á€·á€¡á€± á€¬á€„á€º BOOYAHs
                  á€›á€žá€Šá€·á€ºá€¡á€•á€¼á€„á€ºá€€á€…á€¬á€¸á€›á€”á€ºá€žá€á€ºá€™á€¾á€á€ºá€‘á€¬á€¸á€žá€±á€¬á€”á€±á€›á€¬á€á€½á€„á€º á€–á€½á€€á€ºá€‘á€¬á€¸á€žá€Šá€ºâ€</span><br>
                <br>
                <span style="color: #666666;">
                  á€€á€…á€¬á€¸á€žá€™á€¬á€¸á€™á€»á€¬á€¸á€žá€Šá€º 50HP/á€…á€€á€¹á€€á€”á€·á€ºá€‘á€€á€ºá€•á€­á€¯á€•á€¼á€®á€¸ á€•á€»á€±á€¬á€€á€ºá€€á€„á€ºá€¸á€¡á€±á€¬á€„á€ºá€œá€¯á€•á€ºá€†á€±á€¬á€„á€ºáá€™á€›á€•á€«<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">á€œá€€á€ºá€”á€€á€ºá€”á€¾á€„á€·á€º á€œá€€á€ºá€€á€»á€”á€º</p>
          <ul>
            <li>
              <span>AUG á€¡á€á€½á€€á€º á€œá€€á€ºá€”á€€á€ºá€¡á€žá€…á€º<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€á€•á€ºá€–á€½á€²á€·á€™á€»á€¬á€¸á€¡á€á€½á€€á€º
                  á€¡á€€á€±á€¬á€„á€ºá€¸á€†á€¯á€¶á€¸á€á€­á€¯á€€á€ºá€•á€½á€²á€¡á€á€½á€€á€ºá€žá€¬á€á€½á€„á€·á€ºá€•á€¼á€¯á€‘á€¬á€¸á€žá€Šá€º(á€¡á€€á€±á€¬á€„á€ºá€¸á€†á€¯á€¶á€¸ á€á€”á€ºá€¸á€…á€®á€‘á€¬á€¸á€žá€±á€¬ á€á€•á€ºá€žá€¬á€¸á€™á€»á€¬á€¸)</span><br>
                <span>â€œFree Fire á€á€½á€„á€º AR á€€á€­á€¯á€œá€½á€á€ºá€„á€¼á€­á€™á€ºá€¸á€á€½á€„á€·á€ºá€•á€±á€¸á€á€²á€·á€žá€Šá€ºáŠ AUG á€€á€¡á€œá€½á€”á€ºá€œá€»á€¾á€„á€ºá€™á€¼á€”á€ºá€•á€¼á€®á€¸ á€œá€¾á€¯á€•á€ºá€›á€¾á€¬á€¸á€™á€¾á€¯á€™á€¼á€”á€ºá€†á€”á€ºá€œá€¾á€žá€Šá€º
                  á€‚á€­á€™á€ºá€¸á€€á€…á€¬á€¸á€žá€°á€™á€»á€¬á€¸á€¡á€á€½á€€á€º á€¡á€á€½á€„á€·á€ºá€¡á€›á€±á€¸á€™á€»á€¬á€¸á€…á€½á€¬á€›á€¾á€­á€žá€Šá€ºáŠá€€á€¼á€­á€¯á€á€„á€ºá€•á€°á€¸á€á€½á€²á€•á€¼á€®á€¸ á€¡á€á€½á€„á€·á€ºá€¡á€œá€™á€ºá€¸2xá€†á€›á€•á€¼á€®á€¸
                  á€€á€…á€¬á€¸á€žá€™á€¬á€¸á€™á€»á€¬á€¸á€œá€»á€¾á€„á€ºá€™á€¼á€”á€ºá€…á€½á€¬ á€‘á€­á€¯á€¸á€…á€…á€ºá€†á€„á€ºá€”á€­á€¯á€„á€ºá€žá€Šá€º á€šá€™á€ºá€¸ 35á€á€±á€¬á€„á€·á€ºá€žá€Šá€ºá€¡á€‘á€°á€¸á€€á€±á€¬á€„á€ºá€¸á€™á€½á€”á€ºá€•á€¼á€®á€¸ á€¡á€á€¼á€±á€¡á€”á€±á€á€á€¯á€á€½á€„á€º
                  á€¡á€›á€¬á€á€á€¹á€‘á€¯á€™á€»á€¬á€¸á€€á€­á€¯á€¡á€”á€®á€¸á€€á€•á€º á€€á€¼á€Šá€·á€ºá€”á€­á€¯á€„á€ºá€žá€Šá€ºáŠAUG á€€á€­á€¯á€¡á€žá€¯á€¶á€¸á€•á€¼á€¯á€•á€¼á€®á€¸ á€œá€€á€ºá€”á€€á€ºá€™á€»á€¬á€¸á€€á€­á€¯ á€€á€¼á€®á€¸á€”á€­á€¯á€„á€ºá€žá€™á€»á€¾á€€á€¼á€®á€¸á€¡á€±á€¬á€„á€º
                  á€¡á€á€»á€­á€”á€ºá€á€­á€¯á€á€­á€¯á€¡á€á€½á€„á€ºá€¸á€¡á€€á€»á€­á€¯á€¸á€€á€»á€±á€¸á€‡á€°á€¸á€™á€»á€¬á€¸á€…á€½á€¬á€›á€…á€±á€žá€Šá€ºâ€</span><br>
                <br>
                <span style="color: #666666;">
                  á€’á€«á€™á€±á€·á€á€»á€º: 31 <br>
                  á€™á€€á€ºá€€á€¬á€‡á€„á€ºá€¸: 35 <br>
                  á€•á€…á€ºá€”á€¾á€¯á€”á€ºá€¸: .147 <br>
                  á€™á€¾á€”á€ºá€•á€¼á€±á€¬á€„á€ºá€¸ 2x á€”á€¾á€„á€·á€ºá€¡á€á€°á€–á€¼á€…á€ºá€•á€¼á€®á€¸ á€žá€°á€á€­á€¯á€·á€™á€»á€¬á€¸á€€á€­á€¯á€¡á€á€¼á€¬á€¸á€™á€¾á€”á€ºá€•á€¼á€±á€¬á€„á€ºá€¸á€™á€»á€¬á€¸á€–á€¼á€„á€·á€ºá€œá€²á€œá€¾á€šá€ºá€”á€­á€¯á€„á€ºá€•á€«á€žá€Šá€º <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>AK<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€”á€Šá€ºá€¸á€œá€™á€ºá€¸á€á€­á€¯á€„á€ºá€¸á€™á€¾á€¬á€žá€¯á€¶á€¸á€…á€½á€²á€”á€­á€¯á€„á€ºá€•á€«á€•á€¼á€®</span><br>
                <span>â€œAK á€žá€±á€”á€á€ºá€€á€€á€…á€¬á€¸á€žá€™á€¬á€¸á€¡á€¬á€¸á€œá€¯á€¶á€¸á€¡á€€á€¼á€­á€¯á€€á€ºá€†á€¯á€¶á€¸á€žá€±á€”á€á€ºá€†á€­á€¯á€›á€„á€ºá€œá€²á€™á€™á€¾á€¬á€¸á€•á€«á€˜á€°á€¸ á€žá€±á€á€»á€¬á€á€¬á€€ á€‚á€­á€™á€ºá€¸á€‘á€²á€€ ARs
                  á€”á€¾á€„á€·á€ºá€šá€¾á€‰á€ºá€œá€­á€¯á€€á€ºá€›á€„á€ºá€á€±á€¬á€·á€…á€½á€™á€ºá€¸á€›á€Šá€ºá€™á€»á€¬á€¸á€¡á€”á€Šá€ºá€¸á€„á€šá€ºá€”á€­á€™á€·á€ºá€”á€±á€á€¬á€á€½á€±á€·á€›á€™á€¾á€¬á€•á€« á€’á€«á€€á€¼á€±á€¬á€„á€·á€ºá€™á€­á€¯á€·á€œá€­á€¯á€· AK
                  á€›á€²á€·á€…á€½á€™á€ºá€¸á€¡á€„á€ºá€™á€»á€¬á€¸á€€á€­á€¯á€•á€¼á€”á€ºá€œá€Šá€ºá€–á€¼á€Šá€·á€ºá€†á€Šá€ºá€¸á€‘á€¬á€¸á€•á€±á€¸á€•á€«á€á€šá€ºâ€</span><br>
                <br>
                <span style="color: #666666;">
                  á€’á€«á€™á€±á€·á€á€»á€º: 37->38 <br>
                  á€¡á€”á€­á€™á€·á€ºá€†á€¯á€¶á€¸á€’á€«á€™á€±á€·á€á€»á€º: 37->38 <br>
                  á€•á€…á€ºá€”á€¾á€¯á€”á€ºá€¸: -3% <br>
                  á€á€­á€€á€» á€žá€±á€¬á€•á€…á€ºá€á€»á€€á€º: 1->2 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>FAMAS<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€”á€Šá€ºá€¸á€œá€™á€ºá€¸á€á€­á€¯á€„á€ºá€¸á€™á€¾á€¬á€žá€¯á€¶á€¸á€…á€½á€²á€”á€­á€¯á€„á€ºá€•á€«á€•á€¼á€®</span><br>
                <span>â€œá€œá€€á€ºá€›á€¾á€­ á€žá€¯á€¶á€¸á€…á€½á€²á€”á€±á€žá€±á€¬ FAMAS á€€ AR á€›á€²á€·á€‘á€­á€•á€ºá€†á€¯á€¶á€¸á€™á€¾á€¬á€›á€±á€¬á€€á€ºá€–á€­á€¯á€·á€™á€œá€½á€šá€ºá€˜á€°á€¸ á€’á€«á€€á€¼á€±á€¬á€„á€·á€ºá€™á€­á€¯á€· á€œá€­á€¯á€·
                  á€œá€°á€•á€ºá€›á€¾á€¬á€¸á€”á€±á€á€¯á€”á€ºá€¸á€žá€¯á€¶á€¸á€žá€Šá€·á€ºá€¡á€á€« á€¡á€™á€¼á€”á€ºá€”á€¾á€¯á€”á€ºá€¸á€™á€»á€¬á€¸á€€á€­á€¯á€–á€¼á€Šá€·á€ºá€†á€Šá€ºá€¸á€‘á€¬á€¸á€•á€±á€¸á€•á€«á€á€šá€º
                  á€’á€«á€€á€¼á€±á€¬á€„á€·á€ºá€€á€…á€¬á€¸á€žá€™á€¬á€¸á€á€½á€±á€Ÿá€¬á€¡á€†á€„á€ºá€•á€¼á€±á€•á€¼á€±á€–á€¼á€„á€·á€ºá€†á€±á€¬á€·á€”á€­á€¯á€„á€ºá€•á€«á€•á€¼á€®â€œ</span><br>
                <br>
                <span style="color: #666666;">
                  á€›á€½á€±á€·á€œá€»á€¬á€¸á€”á€±á€žá€Šá€·á€ºá€¡á€á€«á€•á€…á€ºá€á€¼á€„á€ºá€¸: +10%<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>M249<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€”á€Šá€ºá€¸á€œá€™á€ºá€¸á€á€­á€¯á€„á€ºá€¸á€™á€¾á€¬á€žá€¯á€¶á€¸á€…á€½á€²á€”á€­á€¯á€„á€ºá€•á€«á€•á€¼á€®</span><br>
                <span>â€œá€žá€±á€á€»á€¬á€á€¬á€€ M249 á€€á€¡á€¬á€¸á€¡á€”á€Šá€ºá€¸á€†á€¯á€¶á€¸á€†á€­á€¯á€á€¬á€œá€°á€á€­á€¯á€„á€ºá€¸á€žá€­á€•á€«á€á€šá€º á€’á€«á€€á€¼á€±á€¬á€„á€·á€ºá€™á€­á€¯á€·á€œá€­á€¯á€·
                  á€’á€®á€¡á€•á€ºá€’á€­á€á€ºá€™á€¾á€¬á€¡á€€á€±á€¬á€ºá€¸á€†á€¯á€¶á€¸á€•á€…á€ºá€á€»á€€á€ºá€™á€»á€¬á€¸á€”á€²á€·á€á€½á€±á€·á€›á€™á€¾á€¬á€•á€«â€</span><br>
                <br>
                <span style="color: #666666;">
                  á€•á€…á€ºá€á€»á€€á€º: 4->12 <br>
                  á€¡á€”á€Šá€ºá€¸á€†á€¯á€¶á€¸á€’á€«á€™á€±á€·á€á€»á€º : 15->21 <br>
                  á€¡á€™á€¼á€„á€·á€ºá€†á€¯á€¶á€¸á€á€¯á€”á€ºá€á€«á€á€¼á€„á€ºá€¸: -18% <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>SPAS12<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€”á€Šá€ºá€¸á€œá€™á€ºá€¸á€á€­á€¯á€„á€ºá€¸á€™á€¾á€¬á€žá€¯á€¶á€¸á€…á€½á€²á€”á€­á€¯á€„á€ºá€•á€«á€•á€¼á€®</span><br>
                <span>SPAS á€žá€Šá€ºá€¡á€™á€¾á€á€ºá€¡á€žá€¬á€¸á€¡á€”á€€á€ºá€¡á€€á€½á€¬á€¡á€á€±á€¸á€¡á€á€½á€„á€ºá€¸á€¡á€•á€»á€€á€ºá€¡á€…á€®á€¸á€™á€»á€¬á€¸á€€á€­á€¯á€¡á€™á€»á€¬á€¸á€†á€¯á€¶á€¸á€šá€¾á€‰á€ºá€•á€¼á€­á€¯á€„á€ºá€”á€­á€¯á€„á€ºá€žá€±á€¬á€ºá€œá€Šá€ºá€¸ SPAS á€žá€Šá€º M1887
                  á€”á€¾á€„á€·á€º M1014 á€á€­á€¯á€·á€‘á€€á€ºá€žá€­á€žá€­á€žá€¬á€žá€¬á€•á€­á€¯á€™á€­á€¯á€†á€­á€¯á€¸á€›á€½á€¬á€¸á€žá€Šá€·á€ºá€¡á€€á€¼á€±á€¬á€„á€ºá€¸á€›á€„á€ºá€¸á€–á€¼á€…á€ºá€žá€Šá€ºá‹ á€„á€«á€á€­á€¯á€·á€€ SPAS á€€á€­á€¯á€¡á€á€¼á€¬á€¸ SG
                  á€”á€¾á€„á€·á€ºá€€á€½á€¬á€Ÿá€™á€¾á€¯á€€á€­á€¯á€•á€­á€á€ºá€•á€…á€ºá€›á€”á€ºá€¤ á€¡á€•á€ºá€’á€­á€á€ºá€™á€¾á€¬á€•á€¼á€”á€ºá€œá€Šá€ºá€•á€¼á€„á€ºá€†á€„á€ºá€‘á€¬á€¸á€•á€±á€¸á€•á€«á€á€šá€º "</span><br>
                <br>
                <span style="color: #666666;">
                  á€¡á€”á€Šá€ºá€¸á€†á€¯á€¶á€¸á€’á€«á€™á€±á€·á€á€»á€º : 6->7 <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>XM8<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€”á€Šá€ºá€¸á€œá€™á€ºá€¸á€á€­á€¯á€„á€ºá€¸á€™á€¾á€¬á€žá€¯á€¶á€¸á€…á€½á€²á€”á€­á€¯á€„á€ºá€•á€«á€•á€¼á€®</span><br>
                <span>â€œ XM8 á€Ÿá€¬ AR á€…á€¬á€›á€„á€ºá€¸á€›á€²á€·á€‘á€­á€•á€ºá€†á€¯á€¶á€¸á€™á€¾á€¬á€›á€¾á€­á€”á€±á€•á€«á€•á€¼á€®á‹
                  á€¡á€€á€¼á€±á€¬á€„á€ºá€¸á€•á€¼á€á€»á€€á€ºá€á€…á€ºá€á€¯á€™á€¾á€¬á€¤á€œá€€á€ºá€”á€€á€ºá€žá€Šá€ºá€•á€¼á€±á€¬á€„á€ºá€¸á€œá€½á€šá€ºá€•á€¼á€„á€ºá€œá€½á€šá€ºá€›á€¾á€­á€žá€±á€¬á€€á€¼á€±á€¬á€„á€·á€ºá€¡á€žá€¯á€¶á€¸á€•á€¼á€¯á€›á€”á€ºá€œá€½á€šá€ºá€€á€°á€žá€±á€¬á€€á€¼á€±á€¬á€„á€·á€ºá€–á€¼á€…á€ºá€žá€Šá€ºá‹ á€’á€®
                  á€¡á€•á€ºá€’á€­á€á€ºá€€á€­á€¯ XM8
                  á€€á€­á€¯á€•á€¼á€¯á€•á€¼á€„á€ºá€•á€¼á€±á€¬á€„á€ºá€¸á€œá€²á€™á€¾á€¯á€¡á€á€»á€­á€¯á€·á€•á€¼á€¯á€œá€¯á€•á€ºá€”á€±á€•á€¼á€®á€¸á€¡á€€á€±á€¬á€„á€ºá€¸á€†á€¯á€¶á€¸á€žá€±á€¬á€œá€€á€ºá€”á€€á€ºá€™á€»á€¬á€¸á€€á€­á€¯á€á€½á€±á€·á€”á€­á€¯á€„á€ºá€œá€­á€ºá€™á€·á€ºá€™á€Šá€º"</span><br>
                <br>
                <span style="color: #666666;">
                  á€•á€…á€ºá€á€»á€€á€º: 4->3<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">á€‚á€­á€™á€ºá€¸á€”á€Šá€ºá€¸á€œá€™á€ºá€¸á€¡á€™á€»á€­á€¯á€¸á€™á€»á€­á€¯á€¸</p>
          <ul>
            <li>
              <span>Weapon Presets<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€œá€€á€ºá€”á€€á€ºá€™á€»á€¬á€¸á€€á€­á€¯á€€á€¼á€­á€¯á€á€„á€ºá€á€»á€­á€”á€ºá€á€¼á€„á€ºá€¸</span><br>
                <span style="font-style: italic; color: #666666;">TDM, Kill Secured, á€”á€¾á€„á€·á€º Rampage
                  á€™á€»á€¬á€¸á€™á€¾á€¬á€†á€±á€¬á€·á€œá€­á€¯á€·á€›á€”á€±á€•á€«á€•á€¼á€®</span> <br>
                <span>â€œá€€á€…á€¬á€¸á€žá€™á€¬á€¸á€á€½á€±á€†á€®á€€á€”á€±á€œá€€á€ºá€”á€€á€ºá€€á€¼á€­á€¯á€á€„á€ºá€•á€¼á€„á€ºá€†á€„á€ºá€™á€¾á€¯á€€á€á€„á€ºá€¸á€€á€»á€•á€ºá€œá€½á€”á€ºá€¸á€á€šá€ºá€†á€­á€¯á€á€²á€·á€¡á€á€»á€€á€ºá€€á€­á€¯á€œá€€á€ºá€á€¶á€›á€›á€¾á€­á€á€šá€ºáŠ
                  á€€á€…á€¬á€¸á€žá€™á€¬á€¸á€¡á€¬á€¸á€œá€¯á€¶á€¸á€žá€°á€á€­á€¯á€·á€•á€¼á€”á€ºá€œá€Šá€ºá€›á€¾á€„á€ºá€žá€”á€ºá€œá€¬á€á€­á€¯á€„á€ºá€¸á€žá€°á€á€­á€¯á€·á€œá€­á€¯á€á€»á€„á€ºá€žá€Šá€·á€ºá€•á€…á€¹á€…á€Šá€ºá€¸á€™á€»á€¬á€¸á€€á€­á€¯ á€›á€½á€±á€¸á€á€»á€šá€ºá
                  á€•á€¼á€±á€¬á€„á€ºá€¸á€œá€²á€”á€­á€¯á€„á€ºá€•á€«á€á€šá€º â€œ</span><br>
                <br>
                <span style="color: #666666;">
                  á€€á€…á€¬á€¸á€žá€™á€¬á€¸á€™á€»á€¬á€¸á€¡á€”á€±á€–á€¼á€„á€·á€ºá€œá€€á€ºá€”á€€á€ºá€™á€»á€¬á€¸á€”á€¾á€„á€·á€ºá€•á€…á€¹á€…á€Šá€ºá€¸á€€á€­á€›á€­á€šá€¬á€™á€»á€¬á€¸á€€á€­á€¯á€á€›á€€á€ºá€’á€…á€ºá€™á€»á€¬á€¸á€–á€¼á€„á€·á€ºá€á€šá€ºá€šá€°á€”á€­á€¯á€„á€ºá€žá€Šá€ºá‹<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>á€á€±á€«á€„á€ºá€¸á€€á€¼á€®á€¸á€”á€Šá€ºá€¸á€œá€™á€ºá€¸ <br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€œá€±á€‘á€®á€¸á€á€¯á€”á€ºá€á€¼á€„á€ºá€¸á€”á€¾á€„á€·á€º á€…á€€á€ºá€€á€­á€›á€­á€šá€¬á€™á€»á€¬á€¸ á€•á€¼á€”á€ºá€€á€±á€¬á€„á€ºá€¸á€›á€”á€º
                  á€•á€¼á€„á€ºá€†á€„á€ºá€á€¼á€„á€ºá€¸</span><br>
                <span>â€œá€€á€…á€¬á€¸á€žá€™á€¬á€¸á€™á€»á€¬á€¸á€žá€Šá€º á€…á€€á€ºá€€á€­á€›á€­á€šá€¬á€™á€»á€¬á€¸á€¡á€á€½á€€á€ºá€”á€Šá€ºá€¸á€œá€™á€ºá€¸á€™á€»á€¬á€¸á€€á€­á€¯á€á€­á€¯á€€á€ºá€•á€½á€²á€¡á€á€½á€€á€º á€•á€¼á€”á€ºá€œá€Šá€ºá€”á€±á€›á€¬á€á€»á€á€¼á€„á€ºá€¸ á€žá€­á€¯á€·
                  á€•á€¼á€”á€ºá€œá€Šá€ºá€•á€°á€¸á€•á€±á€«á€„á€ºá€¸á€›á€”á€ºá€¡á€á€½á€€á€º á€•á€­á€¯á€™á€¼á€”á€ºá€¡á€±á€¬á€„á€ºá€œá€¯á€•á€ºá€†á€±á€¬á€„á€ºá€”á€­á€¯á€„á€ºá€žá€Šá€ºâ€</span><br>
                <br>
                <span style="color: #666666;">
                  á€šá€á€¯á€á€½á€„á€º á€€á€…á€¬á€¸á€žá€™á€¬á€¸á€™á€»á€¬á€¸á€…á€­á€á€ºá€“á€¬á€á€ºá€€á€­á€¯ á€¡á€›á€¾á€¯á€¶á€¸á€•á€±á€¸á€á€¼á€„á€ºá€¸ á€”á€¾á€„á€·á€º á€•á€¼á€”á€ºá€œá€Šá€ºá€”á€±á€›á€¬á€á€»á€‘á€¬á€¸á€á€¼á€„á€ºá€¸á€–á€¼á€…á€ºá€…á€±á€”á€­á€¯á€„á€ºá€žá€Šá€ºáŠ <br>
                  á€€á€…á€¬á€¸á€žá€™á€¬á€¸á€™á€»á€¬á€¸á€žá€Šá€º á€¡á€™á€¼á€„á€·á€ºá€™á€¾á€¡á€±á€¬á€€á€ºá€žá€­á€¯á€· á€œá€±á€‘á€®á€¸á€á€¯á€”á€ºá€á€»á€•á€¼á€®á€¸ á€•á€¼á€”á€ºá€œá€Šá€ºá€á€„á€ºá€›á€±á€¬á€€á€ºá€€á€¬ á€€á€…á€¬á€¸á€•á€½á€²á€€á€­á€¯
                  á€¡á€™á€¼á€”á€ºá€†á€¯á€¶á€¸á€¡á€”á€­á€¯á€„á€ºá€šá€°á€”á€­á€¯á€„á€ºá€žá€Šá€º <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>á€žá€±á€”á€á€º á€˜á€¯á€›á€„á€º<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€šá€á€¯ á€žá€±á€”á€á€ºá€™á€»á€¬á€¸á€€á€­á€¯ á€•á€­á€¯á€€á€±á€¬á€„á€ºá€¸á€¡á€±á€¬á€„á€º 4v4.
                  á€–á€¼á€„á€·á€ºá€•á€¼á€„á€ºá€†á€„á€ºá€”á€­á€¯á€„á€ºá€žá€Šá€º</span><br>
                <span>â€œá€á€á€¯á€á€Šá€ºá€¸á€žá€±á€¬ á€Šá€„á€ºá€¸á€á€»á€€á€ºá€¡á€”á€±á€–á€¼á€„á€·á€º á€”á€‚á€­á€¯á€žá€±á€”á€á€ºá€˜á€¯á€›á€„á€ºá€€á€­á€¯ á€›á€”á€ºá€žá€°á€á€•á€ºá€žá€¬á€¸á€™á€»á€¬á€¸á€¡á€á€½á€€á€º
                  á€€á€…á€¬á€¸á€žá€™á€¬á€¸á€žá€°á€„á€šá€ºá€á€»á€„á€ºá€¸á€á€­á€¯á€„á€ºá€¸á€œá€­á€¯á€á€»á€„á€ºá€€á€¼á€žá€Šá€ºáŠ á€šá€á€¯á€€á€…á€¬á€¸á€žá€™á€¬á€¸á€™á€»á€¬á€¸á€žá€Šá€º á€á€•á€ºá€žá€¬á€¸á€™á€»á€¬á€¡á€á€½á€€á€º 4v4 á€”á€¾á€…á€ºá€† á€žá€±á€”á€á€ºá€˜á€¯á€›á€„á€ºá€€á€­á€¯
                  á€”á€±á€¬á€€á€ºá€†á€¯á€¶á€¸á€á€­á€¯á€€á€ºá€•á€½á€²á€á€½á€„á€ºá€¡á€žá€¯á€¶á€¸á€•á€¼á€¯á€€á€¼á€žá€Šá€º!â€</span><br>
                <br>
                <span style="color: #666666;">
                  á€šá€á€¯ 4v4 á€€á€­á€¯á€¡á€žá€¯á€¶á€¸á€•á€¼á€¯á€”á€­á€¯á€„á€ºá€•á€«á€•á€¼á€® <br>
                  á€€á€…á€¬á€¸á€žá€°á€¡á€”á€±á€–á€¼á€„á€·á€º á€á€­á€¯á€€á€ºá€•á€½á€² 3 á€€á€¼á€­á€™á€ºá€›á€¾á€¯á€¶á€¸á€œá€»á€¾á€„á€º â€œskipâ€ á€€á€­á€¯á€›á€½á€±á€¸á€•á€¼á€®á€¸á€”á€±á€¬á€€á€ºá€á€½á€€á€ºá€¡á€á€¼á€¬á€¸ á€€á€…á€¬á€¸á€žá€™á€¬á€¸á€¡á€žá€¯á€¶á€¸á€•á€¼á€¯á€žá€Šá€º
                  á€œá€€á€ºá€”á€€á€ºá€™á€»á€¬á€¸á€€á€­á€¯á€”á€¾á€­á€¯á€„á€ºá€¸á€šá€¾á€‰á€ºá€”á€­á€¯á€„á€ºá€žá€Šá€º <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">á€‡á€¬á€á€ºá€€á€±á€¬á€„á€º á€”á€¾á€„á€·á€º á€á€›á€­á€…á€¹á€†á€¬á€”á€º</p>
          <ul>
            <li>
              <span>á€‡á€¬á€á€ºá€€á€±á€¬á€„á€ºá€¡á€žá€…á€º- á€œá€¯á€€á€½á€±á€<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">Free Fire á€…á€»á€±á€¸á€†á€­á€¯á€„á€ºá€™á€¾á€¬á€á€šá€ºá€šá€°á€œá€­á€¯á€·á€›á€•á€«á€•á€¼á€®</span><br>
                <span>á€Ÿá€€á€ºá€‘á€›á€…á€ºá€¡á€á€½á€€á€ºá€¡á€†á€„á€ºá€žá€„á€·á€ºá€–á€¼á€…á€ºá€”á€±á€•á€¼á€®á€œá€¬á€¸?</span><br>
                <br>
                <span style="color: #666666;">
                  á€Ÿá€€á€ºá€‘á€›á€…á€º : á€žá€á€ºá€œá€­á€¯á€€á€ºá€á€­á€¯á€„á€ºá€¸ HP á€¡á€™á€¼á€„á€·á€ºá€†á€¯á€¶á€¸á€á€­á€¯á€¸á€•á€«á€á€šá€º {8/10/12/14/16/18}, 35 á€¡á€‘á€­ <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>á€á€›á€­á€…á€¹á€†á€¬á€”á€ºá€¡á€žá€…á€º - á€™á€…á€ºá€…á€á€¬ á€á€€á€ºá€€á€¬<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€™á€€á€¼á€¬á€™á€®á€œá€¬á€™á€Šá€º!</span><br>
                <span>á€¡á€­á€¯á€€á€ºá€…á€ºá€á€±á€«á€™á€œá€±á€¬á€€á€ºá€œá€­á€¯á€·á€…á€­á€á€ºá€Šá€…á€ºá€”á€±á€žá€œá€¬á€¸ ? á€™á€…á€ºá€…á€á€¬ á€á€€á€ºá€€á€¬á€€á€žá€„á€·á€ºá€¡á€á€½á€€á€º á€¡á€­á€¯á€ºá€€á€ºá€…á€ºá€á€±á€«á€…á€ºá€á€…á€ºá€á€¯á€•á€¼á€„á€ºá€‘á€¬á€¸á€•á€±á€¸á€á€šá€º
                  !</span><br>
                <br>
                <span style="color: #666666;">
                  á€…á€™á€°á€’á€ºá€¡á€­á€¯á€€á€ºá€…á€ºá€á€±á€« : á€€á€…á€¬á€¸á€žá€™á€¬á€¸á€™á€»á€¬á€¸á€€ á€¡á€­á€¯á€€á€ºá€…á€ºá€á€±á€« á€¡á€”á€Šá€ºá€¸á€†á€¯á€¶á€¸ [1/1/2] á€€á€»á€”á€ºá€›á€¾á€­á€žá€±á€¬á€¡á€á€« . á€™á€…á€ºá€…á€á€¬á€á€€á€ºá€€á€¬
                  á€€á€¡á€­á€¯á€€á€ºá€…á€ºá€á€±á€«á€€á€­á€¯ [120/100/80] á€…á€€á€¹á€€á€”á€·á€º á€á€­á€¯á€„á€ºá€¸á€–á€”á€ºá€á€®á€¸á€•á€±á€¸á€•á€«á€á€šá€º<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>á€Ÿá€¬á€›á€¬á€á€­á€¯ â€œá€–á€­á€¯á€„á€ºá€¸á€šá€¬á€¸á€—á€”á€ºá€¸â€ á€™á€€á€¼á€¬á€™á€®á€œá€¬á€™á€Šá€º ! <br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€™á€€á€¼á€¬á€™á€®á€œá€¬á€™á€Šá€º ! </span><br>
                <span>á€Ÿá€¬á€›á€¬á€á€­á€¯á€›á€²á€· á€‡á€¬á€á€ºá€€á€±á€¬á€„á€ºá€¡á€žá€…á€ºá€•á€² - á€Ÿá€¬á€›á€¬á€á€­á€¯ â€œá€–á€­á€¯á€„á€ºá€¸á€šá€¬á€¸á€—á€”á€ºá€¸â€ á€”á€±á€¬á€€á€ºá€†á€¯á€¶á€¸á€á€±á€¬á€·á€•á€¼á€”á€ºá€œá€¬á€•á€«á€•á€¼á€®
                  3á€”á€¾á€…á€ºá€™á€¼á€±á€¬á€€á€ºá€”á€¾á€…á€ºá€•á€á€ºá€œá€Šá€ºá€•á€½á€² 08/22 á€á€½á€„á€º á€¡á€á€™á€²á€·á€šá€°á€”á€­á€¯á€„á€ºá€•á€«á€•á€¼á€®</span><br><br>
                <span style="color: #666666;">
                  á€–á€¼á€±á€¬á€„á€·á€ºá€™á€á€ºá€žá€±á€¬á€…á€œá€€á€ºá€…á€º: á€á€­á€¯á€€á€ºá€›á€­á€¯á€€á€ºá€’á€«á€™á€±á€·á€á€»á€ºá€‘á€­á€á€­á€¯á€€á€ºá€™á€¾á€¯á€€á€­á€¯á€œá€»á€¾á€±á€¬á€·á€á€»á€žá€Šá€º {40/45/50/55/60}% 6 á€…á€€á€¹á€€á€”á€·á€ºá€¡á€á€½á€„á€ºá€¸
                  á€‘á€­á€žá€±á€¬á€¡á€á€«á€…á€½á€™á€ºá€¸á€›á€Šá€ºá€™á€»á€¬á€¸á€€á€ºá€¯á€œá€»á€±á€¬á€·á€€á€»á€…á€±á€žá€Šá€º<br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
          <p class="orange">á€…á€”á€…á€º</p>
          <ul>
            <li>
              <span>á€á€±á€«á€„á€ºá€¸á€†á€±á€¬á€„á€ºá€œá€¯á€•á€ºá€†á€±á€¬á€„á€ºá€›á€™á€Šá€·á€º á€”á€Šá€ºá€¸á€œá€™á€ºá€¸á€™á€»á€¬á€¸<br></span>
              <span class="m-news-detail-s">
                <span style="font-style: italic; color: #666666;">á€”á€±á€¬á€€á€ºá€†á€¯á€¶á€¸á€…á€”á€…á€ºá€‘á€Šá€·á€ºá€žá€½á€„á€ºá€¸á€•á€«á€•á€¼á€® </span><br>
                <span>â€œá€”á€±á€¬á€€á€ºá€†á€¯á€¶á€¸á€•á€¼á€¯á€•á€¼á€„á€ºá€‘á€¬á€¸á€žá€±á€¬á€¡á€á€»á€€á€ºá€™á€»á€¬á€¸áŠá€„á€«á€á€­á€¯á€·á€¡á€¬á€¸á€œá€¯á€¶á€¸ á€”á€±á€¬á€€á€ºá€á€­á€¯á€¸á€…á€®á€™á€¶á€¡á€¯á€•á€ºá€á€»á€¯á€•á€ºá€™á€¾á€¯á€™á€»á€¬á€¸á€€á€­á€¯
                  á€‘á€Šá€·á€ºá€žá€½á€„á€ºá€¸á€‘á€¬á€¸á€žá€±á€¬á€€á€¼á€±á€¬á€„á€·á€º á€¡á€€á€±á€¬á€„á€ºá€¸á€™á€¼á€„á€ºá€á€¯á€¶á€¶á€·á€•á€¼á€”á€ºá€á€»á€€á€ºá€™á€»á€¬á€¸á€€á€­á€¯á€œá€€á€ºá€á€¶á€›á€›á€¾á€­á€•á€«á€žá€Šá€º áŠá€˜á€šá€ºá€œá€­á€¯á€•á€²á€–á€¼á€…á€ºá€”á€±á€•á€«á€…á€±
                  á€›á€›á€¾á€­á€žá€±á€¬á€á€¯á€¶á€·á€•á€¼á€”á€ºá€á€»á€€á€ºá€™á€»á€¬á€¸á€‘á€²á€™á€¾ á€…á€­á€á€ºá€”á€¬á€…á€›á€¬á€€á€±á€¬á€„á€ºá€¸á€žá€±á€¬á€¡á€“á€­á€€á€¡á€á€»á€€á€ºá€€á€­á€¯á€á€±á€«á€„á€ºá€¸á€†á€±á€¬á€„á€ºá€™á€¾á€‘á€€á€ºá€™á€¶á€™á€œá€¯á€•á€ºá€†á€±á€¬á€„á€ºá€›á€•á€«
                  áŠá€¡á€¬á€¸á€œá€¯á€¶á€¸á€…á€”á€…á€ºá€‘á€²á€á€½á€„á€º á€á€œá€”á€º á€¡á€žá€„á€ºá€¸á€á€„á€ºá€™á€»á€¬á€¸ á€™á€²á€†á€”á€¹á€’á€•á€±á€¸á€•á€¼á€®á€¸ á€šá€¬á€šá€®á€á€±á€«á€„á€ºá€¸á€†á€±á€¬á€„á€º á€á€œá€”á€ºá€¡á€á€½á€€á€º á€œá€¯á€•á€ºá€†á€±á€¬á€„á€ºá€™á€¾á€¯á€™á€»á€¬á€¸á€€á€­á€¯
                  á€¡á€›á€„á€ºá€á€±á€«á€„á€ºá€¸á€†á€±á€¬á€„á€ºá€‘á€¶á€™á€¾ á€á€½á€„á€·á€ºá€•á€¼á€¯á€…á€›á€¬á€™á€œá€­á€¯á€•á€²á€›á€½á€±á€¸á€á€»á€šá€ºá€”á€­á€¯á€„á€ºá€žá€Šá€ºâ€ </span><br>
                <br>
                <span style="color: #666666;">
                  guild á€á€±á€«á€„á€ºá€¸á€†á€±á€¬á€„á€º á€žá€Šá€º 30á€›á€€á€ºá€‘á€€á€ºá€•á€­á€¯á á€á€€á€ºá€€á€¼á€½á€œá€¾á€¯á€•á€ºá€›á€¾á€¬á€¸á€™á€¾á€¯á€™á€›á€¾á€­á€•á€«á€€ guild á€¡á€žá€„á€ºá€¸á€á€„á€ºá€™á€»á€¬á€¸á€™á€¾ á€žá€á€­á€•á€±á€¸á€á€»á€€á€ºá€á€„á€ºá€•á€¼á€•á€¼á€®á€¸
                  guild á€á€±á€«á€„á€ºá€¸á€†á€±á€¬á€„á€ºá€¡á€žá€…á€ºá€€á€­á€¯á€›á€½á€±á€¸á€á€»á€šá€ºá€”á€­á€¯á€„á€ºá€žá€Šá€º á€™á€²á€•á€±á€¸á€•á€¼á€®á€¸á€œá€»á€¾á€„á€º á€¡á€›á€„á€º guild á€á€±á€«á€„á€ºá€¸á€†á€±á€¬á€„á€ºá€™á€¾ á€œá€€á€ºá€›á€¾á€­ guild
                  á€á€±á€«á€„á€ºá€¸á€†á€±á€¬á€„á€ºá€žá€­á€¯á€· á€¡á€™á€­á€”á€·á€ºá€¡á€¬á€á€¬ á€œá€¯á€•á€ºá€•á€­á€¯á€„á€ºá€á€½á€„á€·á€ºá€™á€»á€¬á€¸á€€á€­á€¯ 7á€›á€€á€ºá€¡á€á€½á€„á€ºá€¸á€œá€½á€¾á€²á€•á€¼á€±á€¬á€„á€ºá€¸á€•á€±á€¸á€›á€•á€«á€™á€Šá€º <br>
                </span>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
            <li>
              <span>á€˜á€€á€ºá€á€º á€•á€¼á€•á€¼á€„á€ºá€‘á€¬á€¸á€žá€Šá€º á€”á€¾á€„á€·á€º á€•á€­á€¯á€™á€­á€¯á€€á€±á€¬á€„á€ºá€¸á€™á€½á€”á€ºá€¡á€±á€¬á€„á€ºá€•á€¼á€¯á€•á€¼á€„á€ºá€‘á€¬á€¸á€žá€Šá€º<br></span>
              <span class="m-news-detail-s">
                &nbsp;&nbsp;&nbsp;- á€•á€±á€·á€…á€ºá€¡á€€á€»á€‰á€ºá€¸á€á€»á€¯á€•á€ºá€á€½á€„á€º 4V4 á€”á€¾á€„á€·á€º á€œá€€á€ºá€”á€€á€ºá€˜á€¯á€›á€„á€º á€œá€­á€¯á€€á€ºá€–á€€á€ºá€¡á€±á€¬á€„á€ºá€•á€¼á€¯á€•á€¼á€„á€ºá€‘á€¬á€¸á€žá€Šá€º <br>
                &nbsp;&nbsp;&nbsp;- á€€á€…á€¬á€¸á€žá€°á€¡á€”á€±á€–á€¼á€„á€·á€º á€…á€”á€…á€ºá€‘á€²á€á€½á€„á€ºá€›á€¾á€­á€žá€±á€¬á€œá€„á€·á€ºá€€á€­á€¯á€”á€¾á€­á€•á€ºá€•á€¼á€®á€¸ á€¡á€á€¼á€¬á€¸á€žá€°á€„á€šá€ºá€á€»á€„á€ºá€¸á€™á€»á€¬á€¸á€€á€­á€¯á€–á€­á€á€ºá€á€±á€«á€ºá€€á€¬
                á€¡á€–á€½á€²á€œá€­á€¯á€€á€ºá€€á€…á€¬á€¸á€”á€­á€¯á€„á€ºá€žá€Šá€º <br>
                &nbsp;&nbsp;&nbsp;- HUD á€œá€€á€ºá€”á€€á€ºá€€á€­á€¯ á€‚á€­á€™á€ºá€¸á€‘á€²á€á€½á€„á€ºá€•á€¼á€¯á€•á€¼á€„á€ºá€‘á€¬á€¸á€žá€Šá€º <br>
                &nbsp;&nbsp;&nbsp;- á€šá€á€¯ Thermal Scope á€á€½á€„á€ºá€¡á€„á€½á€±á€·á€œá€€á€ºá€•á€…á€ºá€—á€¯á€¶á€¸á€•á€…á€ºá€á€€á€ºá€™á€¾á€¯á€€á€­á€¯á€™á€¼á€„á€ºá€á€½á€±á€·á€”á€­á€¯á€„á€ºá€žá€Šá€º <br>
                &nbsp;&nbsp;&nbsp;- á€™á€»á€€á€ºá€”á€¾á€¬á€•á€¼á€„á€ºá€á€½á€„á€º á€¡á€–á€½á€²á€·á€œá€­á€¯á€€á€ºá€–á€­á€á€ºá€€á€…á€¬á€¸á€”á€­á€¯á€„á€ºá€–á€­á€¯á€· á€•á€­á€¯á€™á€­á€¯á€€á€±á€¬á€„á€ºá€¸á€™á€½á€”á€ºá€¡á€±á€¬á€„á€ºá€•á€¼á€¯á€•á€¼á€„á€ºá€‘á€¬á€¸á€žá€Šá€º <br>
                &nbsp;&nbsp;&nbsp;- FF á€‚á€»á€¬á€”á€šá€ºá€á€½á€„á€º á€™á€¬á€á€­á€€á€¬á€¡á€žá€…á€ºá€€á€­á€¯á€•á€¼á€¯á€•á€¼á€„á€ºá€™á€½á€”á€ºá€¸á€™á€¶á€‘á€¬á€¸á€žá€Šá€º <br>
                &nbsp;&nbsp;&nbsp;- á€¡á€…á€á€½á€„á€º á€á€­á€¯á€€á€ºá€•á€½á€²á€¡á€•á€­á€á€ºá€”á€Šá€ºá€¸á€œá€™á€ºá€¸á€€á€­á€¯ á€—á€®á€’á€®á€šá€­á€¯á€™á€»á€€á€ºá€”á€¾á€¬á€•á€¼á€„á€ºá€á€½á€„á€º
                á€•á€­á€¯á€™á€­á€¯á€€á€±á€¬á€„á€ºá€¸á€™á€½á€”á€ºá€¡á€±á€¬á€„á€ºá€•á€¼á€¯á€•á€¼á€„á€ºá€‘á€¬á€¸á€žá€Šá€º <br>
                &nbsp;&nbsp;&nbsp;- á€¡á€á€»á€­á€”á€ºá€•á€­á€¯ TDM mode á€€á€­á€¯á€™á€»á€€á€ºá€”á€¾á€¬á€•á€¼á€„á€ºá€á€½á€„á€º á€•á€­á€¯á€™á€­á€¯á€€á€±á€¬á€„á€ºá€¸á€™á€½á€”á€ºá€¡á€±á€¬á€„á€ºá€•á€¼á€¯á€•á€¼á€„á€ºá€‘á€¬á€¸á€žá€Šá€º <br>
                &nbsp;&nbsp;&nbsp;- á€œá€±á€‘á€®á€¸á€á€¯á€”á€ºá€›á€¬á€á€½á€„á€º á€¡á€žá€€á€ºá€á€„á€ºá€žá€Šá€·á€ºá€•á€¯á€¶á€†á€±á€¬á€„á€ºá€›á€”á€º á€•á€­á€¯á€™á€­á€¯á€€á€±á€¬á€„á€ºá€¸á€™á€½á€”á€ºá€¡á€±á€¬á€„á€ºá€•á€¼á€¯á€•á€¼á€„á€ºá€‘á€¬á€¸á€žá€Šá€º <br>
                &nbsp;&nbsp;&nbsp;- á€šá€á€¯á€á€½á€„á€ºá€žá€²á€€á€”á€¹á€á€¬á€›á€€á€­á€¯á€‚á€­á€™á€ºá€¸á€€á€…á€¬á€¸á€¡á€á€”á€ºá€¸á€‘á€²á€žá€­á€¯á€· á€‘á€Šá€·á€ºá€žá€½á€„á€ºá€¸á€”á€­á€¯á€„á€ºá€žá€Šá€º <br>
                &nbsp;&nbsp;&nbsp;- á€‚á€­á€™á€ºá€¸á€€á€…á€¬á€¸á€žá€°á€¡á€”á€±á€–á€¼á€„á€·á€º á€•á€¼á€„á€ºá€†á€„á€ºá€žá€Šá€·á€ºá€§á€›á€­á€šá€¬á€™á€¾á€‘á€½á€€á€ºá€á€½á€¬á€›á€¬á€á€½á€„á€º
                á€á€á€»á€­á€¯á€·á€žá€±á€¬á€”á€Šá€ºá€¸á€œá€™á€ºá€¸á€™á€»á€¬á€¸á€€á€­á€¯á€€á€…á€¬á€¸á€á€»á€­á€”á€ºá€™á€€á€»á€±á€¬á€ºá€œá€½á€”á€ºá€›á€”á€º á€á€»á€­á€”á€ºá€¸á€•á€±á€¸á€‘á€¬á€¸á€žá€Šá€º <br>
              </span>
              <div class="m-news-detail-line"></div>
            </li>
          </ul>
        </div>
      </div>
    `
  };
  langMap['eu-pt'] = langMap['pt-br'] = langMap['pt'];
  langMap['ch-zh'] = langMap['zh-tw'] = langMap['zh-cn'] = langMap['zh'];
  langMap['vn'] = langMap['vi'];
  langMap['kr'] = langMap['ko'];
  langMap['jp'] = langMap['ja'];
  langMap['ind'] = langMap['id'];
  if (!langMap[lang]) {
    langMap[lang] = langMap['en'];
  }
  return langMap[lang];
}