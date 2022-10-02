import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Space } from 'antd';

export default function FE10HomePage() {
  const [buffer] = useOutletContext();

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100%' }}
    >
      <Link to={{ pathname: 'BaseStatsHalberdier', state: { buffer } }}>FE10 Base Stats-Halberdier</Link>
      <Link to={{ pathname: 'BaseStatsSentinal', state: { buffer } }}>FE10 Base Stats-Sentinal</Link>
      <Link to={{ pathname: 'BaseStatsSoldier', state: { buffer } }}>FE10 Base Stats-Soldier</Link>
      <Link to={{ pathname: 'ClassEditor', state: { buffer } }}>FE10 Class Editor</Link>
      <Link to={{ pathname: 'ClassEditorArchSage', state: { buffer } }}>FE10 Class Editor-Arch Sage</Link>
      <Link to={{ pathname: 'ClassEditorArcher', state: { buffer } }}>FE10 Class Editor-Archer</Link>
      <Link to={{ pathname: 'ClassEditorArmors', state: { buffer } }}>FE10 Class Editor-Armors</Link>
      <Link to={{ pathname: 'ClassEditorAshuraAura', state: { buffer } }}>FE10 Class Editor-Ashura(Aura)</Link>
      <Link to={{ pathname: 'ClassEditorAssassin', state: { buffer } }}>FE10 Class Editor-Assassin</Link>
      <Link to={{ pathname: 'ClassEditorBandit', state: { buffer } }}>FE10 Class Editor-Bandit</Link>
      <Link to={{ pathname: 'ClassEditorCleric', state: { buffer } }}>FE10 Class Editor-Cleric</Link>
      <Link to={{ pathname: 'ClassEditorDarkSageSagesSP', state: { buffer } }}>FE10 Class Editor-Dark Sage, Sages (SP)</Link>
      <Link to={{ pathname: 'ClassEditorDracoknights', state: { buffer } }}>FE10 Class Editor-Dracoknights</Link>
      <Link to={{ pathname: 'ClassEditorDragonKing', state: { buffer } }}>FE10 Class Editor-Dragon King</Link>
      <Link to={{ pathname: 'ClassEditorDragonPrince', state: { buffer } }}>FE10 Class Editor-Dragon Prince</Link>
      <Link to={{ pathname: 'ClassEditorDragonlord', state: { buffer } }}>FE10 Class Editor-Dragonlord</Link>
      <Link to={{ pathname: 'ClassEditorDruid', state: { buffer } }}>FE10 Class Editor-Druid</Link>
      <Link to={{ pathname: 'ClassEditorFalconKnights', state: { buffer } }}>FE10 Class Editor-Falcon Knights</Link>
      <Link to={{ pathname: 'ClassEditorFighter', state: { buffer } }}>FE10 Class Editor-Fighter</Link>
      <Link to={{ pathname: 'ClassEditorGenerals', state: { buffer } }}>FE10 Class Editor-Generals</Link>
      <Link to={{ pathname: 'ClassEditorGiffcaTransformed', state: { buffer } }}>FE10 Class Editor-Giffca (Transformed)</Link>
      <Link to={{ pathname: 'ClassEditorGiffcaUntransformed', state: { buffer } }}>FE10 Class Editor-Giffca (Untransformed)</Link>
      <Link to={{ pathname: 'ClassEditorGoldKnightsSilverKnights', state: { buffer } }}>FE10 Class Editor-Gold Knights, Silver Knights</Link>
      <Link to={{ pathname: 'ClassEditorHawkTransformed', state: { buffer } }}>FE10 Class Editor-Hawk (Transformed)</Link>
      <Link to={{ pathname: 'ClassEditorHawkUntransformed', state: { buffer } }}>FE10 Class Editor-Hawk (Untransformed)</Link>
      <Link to={{ pathname: 'ClassEditorHawkKing', state: { buffer } }}>FE10 Class Editor-Hawk King</Link>
      <Link to={{ pathname: 'ClassEditorHero', state: { buffer } }}>FE10 Class Editor-Hero</Link>
      <Link to={{ pathname: 'ClassEditorHeronLeanne', state: { buffer } }}>FE10 Class Editor-Heron(Leanne)</Link>
      <Link to={{ pathname: 'ClassEditorHeronRafiel', state: { buffer } }}>FE10 Class Editor-Heron(Rafiel)</Link>
      <Link to={{ pathname: 'ClassEditorHeronReyson', state: { buffer } }}>FE10 Class Editor-Heron(Reyson)</Link>
      <Link to={{ pathname: 'ClassEditorKnight', state: { buffer } }}>FE10 Class Editor-Knight</Link>
      <Link to={{ pathname: 'ClassEditorLightMageSages', state: { buffer } }}>FE10 Class Editor-Light Mage, Sages</Link>
      <Link to={{ pathname: 'ClassEditorLightSage', state: { buffer } }}>FE10 Class Editor-Light Sage</Link>
      <Link to={{ pathname: 'ClassEditorLionKingTransformed', state: { buffer } }}>FE10 Class Editor-Lion King (Transformed)</Link>
      <Link to={{ pathname: 'ClassEditorLionKingUntransformed', state: { buffer } }}>FE10 Class Editor-Lion King (Untransformed)</Link>
      <Link to={{ pathname: 'ClassEditorMages', state: { buffer } }}>FE10 Class Editor-Mages</Link>
      <Link to={{ pathname: 'ClassEditorMarksman', state: { buffer } }}>FE10 Class Editor-Marksman</Link>
      <Link to={{ pathname: 'ClassEditorMarshallsBlackKnight', state: { buffer } }}>FE10 Class Editor-Marshalls, Black Knight</Link>
      <Link to={{ pathname: 'ClassEditorMyrmidon', state: { buffer } }}>FE10 Class Editor-Myrmidon</Link>
      <Link to={{ pathname: 'ClassEditorPaladins', state: { buffer } }}>FE10 Class Editor-Paladins</Link>
      <Link to={{ pathname: 'ClassEditorPegususKnights', state: { buffer } }}>FE10 Class Editor-Pegusus Knights</Link>
      <Link to={{ pathname: 'ClassEditorPilgrimVendorCitizenHorse', state: { buffer } }}>FE10 Class Editor-Pilgrim, Vendor, Citizen, Horse</Link>
      <Link to={{ pathname: 'ClassEditorPriest', state: { buffer } }}>FE10 Class Editor-Priest</Link>
      <Link to={{ pathname: 'ClassEditorRavenKing', state: { buffer } }}>FE10 Class Editor-Raven King</Link>
      <Link to={{ pathname: 'ClassEditorRavenF', state: { buffer } }}>FE10 Class Editor-Raven(F)</Link>
      <Link to={{ pathname: 'ClassEditorRavenM', state: { buffer } }}>FE10 Class Editor-Raven(M)</Link>
      <Link to={{ pathname: 'ClassEditorReaver', state: { buffer } }}>FE10 Class Editor-Reaver</Link>
      <Link to={{ pathname: 'ClassEditorRedDragonF', state: { buffer } }}>FE10 Class Editor-Red Dragon(F)</Link>
      <Link to={{ pathname: 'ClassEditorRedDragonM', state: { buffer } }}>FE10 Class Editor-Red Dragon(M)</Link>
      <Link to={{ pathname: 'ClassEditorRogueF', state: { buffer } }}>FE10 Class Editor-Rogue(F)</Link>
      <Link to={{ pathname: 'ClassEditorRogueM', state: { buffer } }}>FE10 Class Editor-Rogue(M)</Link>
      <Link to={{ pathname: 'ClassEditorSaint', state: { buffer } }}>FE10 Class Editor-Saint</Link>
      <Link to={{ pathname: 'ClassEditorSeraphKnightQueen', state: { buffer } }}>FE10 Class Editor-Seraph Knight, Queen</Link>
      <Link to={{ pathname: 'ClassEditorSkrimirTransformed', state: { buffer } }}>FE10 Class Editor-Skrimir-Transformed</Link>
      <Link to={{ pathname: 'ClassEditorSkrimirUntransformed', state: { buffer } }}>FE10 Class Editor-Skrimir(Untransformed)</Link>
      <Link to={{ pathname: 'ClassEditorSniper', state: { buffer } }}>FE10 Class Editor-Sniper</Link>
      <Link to={{ pathname: 'ClassEditorSpirit', state: { buffer } }}>FE10 Class Editor-Spirit</Link>
      <Link to={{ pathname: 'ClassEditorSummoner', state: { buffer } }}>FE10 Class Editor-Summoner</Link>
      <Link to={{ pathname: 'ClassEditorSwordmaster', state: { buffer } }}>FE10 Class Editor-Swordmaster</Link>
      <Link to={{ pathname: 'ClassEditorThief', state: { buffer } }}>FE10 Class Editor-Thief</Link>
      <Link to={{ pathname: 'ClassEditorTigerTransformed', state: { buffer } }}>FE10 Class Editor-Tiger(Transformed)</Link>
      <Link to={{ pathname: 'ClassEditorTigerUntransformed', state: { buffer } }}>FE10 Class Editor-Tiger(Untransformed)</Link>
      <Link to={{ pathname: 'ClassEditorTrueblade', state: { buffer } }}>FE10 Class Editor-Trueblade</Link>
      <Link to={{ pathname: 'ClassEditorUnknown', state: { buffer } }}>FE10 Class Editor-Unknown</Link>
      <Link to={{ pathname: 'ClassEditorValkyrie', state: { buffer } }}>FE10 Class Editor-Valkyrie</Link>
      <Link to={{ pathname: 'ClassEditorVanguard', state: { buffer } }}>FE10 Class Editor-Vanguard</Link>
      <Link to={{ pathname: 'ClassEditorWarrior', state: { buffer } }}>FE10 Class Editor-Warrior</Link>
      <Link to={{ pathname: 'ClassEditorWarriorSP', state: { buffer } }}>FE10 Class Editor-Warrior (SP)</Link>
      <Link to={{ pathname: 'ClassEditorWhisper', state: { buffer } }}>FE10 Class Editor-Whisper</Link>
      <Link to={{ pathname: 'ClassEditorWhiteDragon', state: { buffer } }}>FE10 Class Editor-White Dragon</Link>
      <Link to={{ pathname: 'ClassEditorWolfQueen', state: { buffer } }}>FE10 Class Editor-Wolf Queen</Link>
      <Link to={{ pathname: 'GrowthRatesAstridSoren', state: { buffer } }}>FE10 Growth Rates-Astrid, Soren</Link>
      <Link to={{ pathname: 'GrowthRatesBlackKnight12ShinonGiffcaGeoffrey', state: { buffer } }}>FE10 Growth Rates-Black Knight 1 & 2, Shinon, Giffca, Geoffrey</Link>
      <Link to={{ pathname: 'GrowthRatesDanvedUlki', state: { buffer } }}>FE10 Growth Rates-Danved & Ulki</Link>
      <Link to={{ pathname: 'GrowthRatesEdwardElincia', state: { buffer } }}>FE10 Growth Rates-Edward & Elincia</Link>
      <Link to={{ pathname: 'GrowthRatesEnaIlyana', state: { buffer } }}>FE10 Growth Rates-Ena & Ilyana</Link>
      <Link to={{ pathname: 'GrowthRatesFionaHeather', state: { buffer } }}>FE10 Growth Rates-Fiona, Heather</Link>
      <Link to={{ pathname: 'GrowthRatesGatrieCalillKyza', state: { buffer } }}>FE10 Growth Rates-Gatrie,Calill & Kyza</Link>
      <Link to={{ pathname: 'GrowthRatesHaarVika', state: { buffer } }}>FE10 Growth Rates-Haar, Vika</Link>
      <Link to={{ pathname: 'GrowthRatesHetzelPelleasBoydMarcia', state: { buffer } }}>FE10 Growth Rates-Hetzel, Pelleas, Boyd, Marcia</Link>
      <Link to={{ pathname: 'GrowthRatesIkeandIzuka', state: { buffer } }}>FE10 Growth Rates-Ike and Izuka</Link>
      <Link to={{ pathname: 'GrowthRatesJillSkrimir', state: { buffer } }}>FE10 Growth Rates-Jill, Skrimir</Link>
      <Link to={{ pathname: 'GrowthRatesLehran', state: { buffer } }}>FE10 Growth Rates-Lehran</Link>
      <Link to={{ pathname: 'GrowthratesLeonardoLethe', state: { buffer } }}>FE10 Growth rates-Leonardo, Lethe</Link>
      <Link to={{ pathname: 'GrowthratesLevail', state: { buffer } }}>FE10 Growth rates-Levail</Link>
      <Link to={{ pathname: 'GrowthRatesLyreReysonLekainLucia', state: { buffer } }}>FE10 Growth Rates-Lyre, Reyson, Lekain, Lucia</Link>
      <Link to={{ pathname: 'GrowthRatesMakalovMicaiah', state: { buffer } }}>FE10 Growth Rates-Makalov, Micaiah</Link>
      <Link to={{ pathname: 'GrowthRatesMegMordecaiJanaffBastianRolf', state: { buffer } }}>FE10 Growth Rates-Meg, Mordecai, Janaff, Bastian, Rolf</Link>
      <Link to={{ pathname: 'GrowthratesMiaKurthAimee', state: { buffer } }}>FE10 Growth rates-Mia, Kurth, Aimee</Link>
      <Link to={{ pathname: 'GrowthRatesMistMuarim', state: { buffer } }}>FE10 Growth Rates-Mist, Muarim</Link>
      <Link to={{ pathname: 'GrowthRatesNealuchiNailahNaesala', state: { buffer } }}>FE10 Growth Rates-Nealuchi, Nailah, Naesala</Link>
      <Link to={{ pathname: 'GrowthRatesNepheneeNolan', state: { buffer } }}>FE10 Growth Rates-Nephenee, Nolan</Link>
      <Link to={{ pathname: 'GrowthRatesOscarOliver', state: { buffer } }}>FE10 Growth Rates-Oscar & Oliver</Link>
      <Link to={{ pathname: 'GrowthRatesRanulfRafielLeanne', state: { buffer } }}>FE10 Growth Rates-Ranulf, Rafiel, Leanne</Link>
      <Link to={{ pathname: 'GrowthratesRenningLaura', state: { buffer } }}>FE10 Growth rates-Renning, Laura</Link>
      <Link to={{ pathname: 'GrowthRatesRhysKurthnagaKieranGareth', state: { buffer } }}>FE10 Growth Rates-Rhys,Kurthnaga, Kieran & Gareth</Link>
      <Link to={{ pathname: 'GrowthRatesSephiranZelgius', state: { buffer } }}>FE10 Growth Rates-Sephiran, Zelgius</Link>
      <Link to={{ pathname: 'GrowthRatesSotheSanakiSigrun', state: { buffer } }}>FE10 Growth Rates-Sothe, Sanaki & Sigrun</Link>
      <Link to={{ pathname: 'GrowthRatesStefanTauroneoTanithBromZiharkTitania', state: { buffer } }}>FE10 Growth Rates-Stefan,Tauroneo,Tanith,Brom,Zihark,Titania</Link>
      <Link to={{ pathname: 'GrowthRatesTibarnDheginsea', state: { buffer } }}>FE10 Growth Rates-Tibarn, Dheginsea</Link>
      <Link to={{ pathname: 'GrowthRatesTormodNasir', state: { buffer } }}>FE10 Growth Rates-Tormod, Nasir</Link>
      <Link to={{ pathname: 'GrowthRatesVolkeAran', state: { buffer } }}>FE10 Growth Rates-Volke, Aran</Link>
      <Link to={{ pathname: 'GrowthRatesVolugCaineghis', state: { buffer } }}>FE10 Growth Rates-Volug & Caineghis</Link>
    </Space>
  );
}
