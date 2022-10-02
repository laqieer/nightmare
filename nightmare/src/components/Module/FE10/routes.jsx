import React, { Suspense, lazy } from 'react';
import loading from '../../Loading';
import FE10 from '.';

const FE10HomePage = lazy(() => import('./HomePage'));
const FE10BaseStatsHalberdier = lazy(() => import('./BaseStatsHalberdier'));
const FE10BaseStatsSentinal = lazy(() => import('./BaseStatsSentinal'));
const FE10BaseStatsSoldier = lazy(() => import('./BaseStatsSoldier'));
const FE10ClassEditor = lazy(() => import('./ClassEditor'));
const FE10ClassEditorArchSage = lazy(() => import('./ClassEditorArchSage'));
const FE10ClassEditorArcher = lazy(() => import('./ClassEditorArcher'));
const FE10ClassEditorArmors = lazy(() => import('./ClassEditorArmors'));
const FE10ClassEditorAshuraAura = lazy(() => import('./ClassEditorAshuraAura'));
const FE10ClassEditorAssassin = lazy(() => import('./ClassEditorAssassin'));
const FE10ClassEditorBandit = lazy(() => import('./ClassEditorBandit'));
const FE10ClassEditorCleric = lazy(() => import('./ClassEditorCleric'));
const FE10ClassEditorDarkSageSagesSP = lazy(() => import('./ClassEditorDarkSageSagesSP'));
const FE10ClassEditorDracoknights = lazy(() => import('./ClassEditorDracoknights'));
const FE10ClassEditorDragonKing = lazy(() => import('./ClassEditorDragonKing'));
const FE10ClassEditorDragonPrince = lazy(() => import('./ClassEditorDragonPrince'));
const FE10ClassEditorDragonlord = lazy(() => import('./ClassEditorDragonlord'));
const FE10ClassEditorDruid = lazy(() => import('./ClassEditorDruid'));
const FE10ClassEditorFalconKnights = lazy(() => import('./ClassEditorFalconKnights'));
const FE10ClassEditorFighter = lazy(() => import('./ClassEditorFighter'));
const FE10ClassEditorGenerals = lazy(() => import('./ClassEditorGenerals'));
const FE10ClassEditorGiffcaTransformed = lazy(() => import('./ClassEditorGiffcaTransformed'));
const FE10ClassEditorGiffcaUntransformed = lazy(() => import('./ClassEditorGiffcaUntransformed'));
const FE10ClassEditorGoldKnightsSilverKnights = lazy(() => import('./ClassEditorGoldKnightsSilverKnights'));
const FE10ClassEditorHawkTransformed = lazy(() => import('./ClassEditorHawkTransformed'));
const FE10ClassEditorHawkUntransformed = lazy(() => import('./ClassEditorHawkUntransformed'));
const FE10ClassEditorHawkKing = lazy(() => import('./ClassEditorHawkKing'));
const FE10ClassEditorHero = lazy(() => import('./ClassEditorHero'));
const FE10ClassEditorHeronLeanne = lazy(() => import('./ClassEditorHeronLeanne'));
const FE10ClassEditorHeronRafiel = lazy(() => import('./ClassEditorHeronRafiel'));
const FE10ClassEditorHeronReyson = lazy(() => import('./ClassEditorHeronReyson'));
const FE10ClassEditorKnight = lazy(() => import('./ClassEditorKnight'));
const FE10ClassEditorLightMageSages = lazy(() => import('./ClassEditorLightMageSages'));
const FE10ClassEditorLightSage = lazy(() => import('./ClassEditorLightSage'));
const FE10ClassEditorLionKingTransformed = lazy(() => import('./ClassEditorLionKingTransformed'));
const FE10ClassEditorLionKingUntransformed = lazy(() => import('./ClassEditorLionKingUntransformed'));
const FE10ClassEditorMages = lazy(() => import('./ClassEditorMages'));
const FE10ClassEditorMarksman = lazy(() => import('./ClassEditorMarksman'));
const FE10ClassEditorMarshallsBlackKnight = lazy(() => import('./ClassEditorMarshallsBlackKnight'));
const FE10ClassEditorMyrmidon = lazy(() => import('./ClassEditorMyrmidon'));
const FE10ClassEditorPaladins = lazy(() => import('./ClassEditorPaladins'));
const FE10ClassEditorPegususKnights = lazy(() => import('./ClassEditorPegususKnights'));
const FE10ClassEditorPilgrimVendorCitizenHorse = lazy(() => import('./ClassEditorPilgrimVendorCitizenHorse'));
const FE10ClassEditorPriest = lazy(() => import('./ClassEditorPriest'));
const FE10ClassEditorRavenKing = lazy(() => import('./ClassEditorRavenKing'));
const FE10ClassEditorRavenF = lazy(() => import('./ClassEditorRavenF'));
const FE10ClassEditorRavenM = lazy(() => import('./ClassEditorRavenM'));
const FE10ClassEditorReaver = lazy(() => import('./ClassEditorReaver'));
const FE10ClassEditorRedDragonF = lazy(() => import('./ClassEditorRedDragonF'));
const FE10ClassEditorRedDragonM = lazy(() => import('./ClassEditorRedDragonM'));
const FE10ClassEditorRogueF = lazy(() => import('./ClassEditorRogueF'));
const FE10ClassEditorRogueM = lazy(() => import('./ClassEditorRogueM'));
const FE10ClassEditorSaint = lazy(() => import('./ClassEditorSaint'));
const FE10ClassEditorSeraphKnightQueen = lazy(() => import('./ClassEditorSeraphKnightQueen'));
const FE10ClassEditorSkrimirTransformed = lazy(() => import('./ClassEditorSkrimirTransformed'));
const FE10ClassEditorSkrimirUntransformed = lazy(() => import('./ClassEditorSkrimirUntransformed'));
const FE10ClassEditorSniper = lazy(() => import('./ClassEditorSniper'));
const FE10ClassEditorSpirit = lazy(() => import('./ClassEditorSpirit'));
const FE10ClassEditorSummoner = lazy(() => import('./ClassEditorSummoner'));
const FE10ClassEditorSwordmaster = lazy(() => import('./ClassEditorSwordmaster'));
const FE10ClassEditorThief = lazy(() => import('./ClassEditorThief'));
const FE10ClassEditorTigerTransformed = lazy(() => import('./ClassEditorTigerTransformed'));
const FE10ClassEditorTigerUntransformed = lazy(() => import('./ClassEditorTigerUntransformed'));
const FE10ClassEditorTrueblade = lazy(() => import('./ClassEditorTrueblade'));
const FE10ClassEditorUnknown = lazy(() => import('./ClassEditorUnknown'));
const FE10ClassEditorValkyrie = lazy(() => import('./ClassEditorValkyrie'));
const FE10ClassEditorVanguard = lazy(() => import('./ClassEditorVanguard'));
const FE10ClassEditorWarrior = lazy(() => import('./ClassEditorWarrior'));
const FE10ClassEditorWarriorSP = lazy(() => import('./ClassEditorWarriorSP'));
const FE10ClassEditorWhisper = lazy(() => import('./ClassEditorWhisper'));
const FE10ClassEditorWhiteDragon = lazy(() => import('./ClassEditorWhiteDragon'));
const FE10ClassEditorWolfQueen = lazy(() => import('./ClassEditorWolfQueen'));
const FE10GrowthRatesAstridSoren = lazy(() => import('./GrowthRatesAstridSoren'));
const FE10GrowthRatesBlackKnight12ShinonGiffcaGeoffrey = lazy(() => import('./GrowthRatesBlackKnight12ShinonGiffcaGeoffrey'));
const FE10GrowthRatesDanvedUlki = lazy(() => import('./GrowthRatesDanvedUlki'));
const FE10GrowthRatesEdwardElincia = lazy(() => import('./GrowthRatesEdwardElincia'));
const FE10GrowthRatesEnaIlyana = lazy(() => import('./GrowthRatesEnaIlyana'));
const FE10GrowthRatesFionaHeather = lazy(() => import('./GrowthRatesFionaHeather'));
const FE10GrowthRatesGatrieCalillKyza = lazy(() => import('./GrowthRatesGatrieCalillKyza'));
const FE10GrowthRatesHaarVika = lazy(() => import('./GrowthRatesHaarVika'));
const FE10GrowthRatesHetzelPelleasBoydMarcia = lazy(() => import('./GrowthRatesHetzelPelleasBoydMarcia'));
const FE10GrowthRatesIkeandIzuka = lazy(() => import('./GrowthRatesIkeandIzuka'));
const FE10GrowthRatesJillSkrimir = lazy(() => import('./GrowthRatesJillSkrimir'));
const FE10GrowthRatesLehran = lazy(() => import('./GrowthRatesLehran'));
const FE10GrowthratesLeonardoLethe = lazy(() => import('./GrowthratesLeonardoLethe'));
const FE10GrowthratesLevail = lazy(() => import('./GrowthratesLevail'));
const FE10GrowthRatesLyreReysonLekainLucia = lazy(() => import('./GrowthRatesLyreReysonLekainLucia'));
const FE10GrowthRatesMakalovMicaiah = lazy(() => import('./GrowthRatesMakalovMicaiah'));
const FE10GrowthRatesMegMordecaiJanaffBastianRolf = lazy(() => import('./GrowthRatesMegMordecaiJanaffBastianRolf'));
const FE10GrowthratesMiaKurthAimee = lazy(() => import('./GrowthratesMiaKurthAimee'));
const FE10GrowthRatesMistMuarim = lazy(() => import('./GrowthRatesMistMuarim'));
const FE10GrowthRatesNealuchiNailahNaesala = lazy(() => import('./GrowthRatesNealuchiNailahNaesala'));
const FE10GrowthRatesNepheneeNolan = lazy(() => import('./GrowthRatesNepheneeNolan'));
const FE10GrowthRatesOscarOliver = lazy(() => import('./GrowthRatesOscarOliver'));
const FE10GrowthRatesRanulfRafielLeanne = lazy(() => import('./GrowthRatesRanulfRafielLeanne'));
const FE10GrowthratesRenningLaura = lazy(() => import('./GrowthratesRenningLaura'));
const FE10GrowthRatesRhysKurthnagaKieranGareth = lazy(() => import('./GrowthRatesRhysKurthnagaKieranGareth'));
const FE10GrowthRatesSephiranZelgius = lazy(() => import('./GrowthRatesSephiranZelgius'));
const FE10GrowthRatesSotheSanakiSigrun = lazy(() => import('./GrowthRatesSotheSanakiSigrun'));
const FE10GrowthRatesStefanTauroneoTanithBromZiharkTitania = lazy(() => import('./GrowthRatesStefanTauroneoTanithBromZiharkTitania'));
const FE10GrowthRatesTibarnDheginsea = lazy(() => import('./GrowthRatesTibarnDheginsea'));
const FE10GrowthRatesTormodNasir = lazy(() => import('./GrowthRatesTormodNasir'));
const FE10GrowthRatesVolkeAran = lazy(() => import('./GrowthRatesVolkeAran'));
const FE10GrowthRatesVolugCaineghis = lazy(() => import('./GrowthRatesVolugCaineghis'));

export const FE10Routes = {
  path: 'FE10',
  element: <FE10 />,
  children: [
    { path: '', element: <Suspense fallback={loading}><FE10HomePage /></Suspense> },
    { path: 'BaseStatsHalberdier', element: <Suspense fallback={loading}><FE10BaseStatsHalberdier /></Suspense> },
    { path: 'BaseStatsSentinal', element: <Suspense fallback={loading}><FE10BaseStatsSentinal /></Suspense> },
    { path: 'BaseStatsSoldier', element: <Suspense fallback={loading}><FE10BaseStatsSoldier /></Suspense> },
    { path: 'ClassEditor', element: <Suspense fallback={loading}><FE10ClassEditor /></Suspense> },
    { path: 'ClassEditorArchSage', element: <Suspense fallback={loading}><FE10ClassEditorArchSage /></Suspense> },
    { path: 'ClassEditorArcher', element: <Suspense fallback={loading}><FE10ClassEditorArcher /></Suspense> },
    { path: 'ClassEditorArmors', element: <Suspense fallback={loading}><FE10ClassEditorArmors /></Suspense> },
    { path: 'ClassEditorAshuraAura', element: <Suspense fallback={loading}><FE10ClassEditorAshuraAura /></Suspense> },
    { path: 'ClassEditorAssassin', element: <Suspense fallback={loading}><FE10ClassEditorAssassin /></Suspense> },
    { path: 'ClassEditorBandit', element: <Suspense fallback={loading}><FE10ClassEditorBandit /></Suspense> },
    { path: 'ClassEditorCleric', element: <Suspense fallback={loading}><FE10ClassEditorCleric /></Suspense> },
    { path: 'ClassEditorDarkSageSagesSP', element: <Suspense fallback={loading}><FE10ClassEditorDarkSageSagesSP /></Suspense> },
    { path: 'ClassEditorDracoknights', element: <Suspense fallback={loading}><FE10ClassEditorDracoknights /></Suspense> },
    { path: 'ClassEditorDragonKing', element: <Suspense fallback={loading}><FE10ClassEditorDragonKing /></Suspense> },
    { path: 'ClassEditorDragonPrince', element: <Suspense fallback={loading}><FE10ClassEditorDragonPrince /></Suspense> },
    { path: 'ClassEditorDragonlord', element: <Suspense fallback={loading}><FE10ClassEditorDragonlord /></Suspense> },
    { path: 'ClassEditorDruid', element: <Suspense fallback={loading}><FE10ClassEditorDruid /></Suspense> },
    { path: 'ClassEditorFalconKnights', element: <Suspense fallback={loading}><FE10ClassEditorFalconKnights /></Suspense> },
    { path: 'ClassEditorFighter', element: <Suspense fallback={loading}><FE10ClassEditorFighter /></Suspense> },
    { path: 'ClassEditorGenerals', element: <Suspense fallback={loading}><FE10ClassEditorGenerals /></Suspense> },
    { path: 'ClassEditorGiffcaTransformed', element: <Suspense fallback={loading}><FE10ClassEditorGiffcaTransformed /></Suspense> },
    { path: 'ClassEditorGiffcaUntransformed', element: <Suspense fallback={loading}><FE10ClassEditorGiffcaUntransformed /></Suspense> },
    { path: 'ClassEditorGoldKnightsSilverKnights', element: <Suspense fallback={loading}><FE10ClassEditorGoldKnightsSilverKnights /></Suspense> },
    { path: 'ClassEditorHawkTransformed', element: <Suspense fallback={loading}><FE10ClassEditorHawkTransformed /></Suspense> },
    { path: 'ClassEditorHawkUntransformed', element: <Suspense fallback={loading}><FE10ClassEditorHawkUntransformed /></Suspense> },
    { path: 'ClassEditorHawkKing', element: <Suspense fallback={loading}><FE10ClassEditorHawkKing /></Suspense> },
    { path: 'ClassEditorHero', element: <Suspense fallback={loading}><FE10ClassEditorHero /></Suspense> },
    { path: 'ClassEditorHeronLeanne', element: <Suspense fallback={loading}><FE10ClassEditorHeronLeanne /></Suspense> },
    { path: 'ClassEditorHeronRafiel', element: <Suspense fallback={loading}><FE10ClassEditorHeronRafiel /></Suspense> },
    { path: 'ClassEditorHeronReyson', element: <Suspense fallback={loading}><FE10ClassEditorHeronReyson /></Suspense> },
    { path: 'ClassEditorKnight', element: <Suspense fallback={loading}><FE10ClassEditorKnight /></Suspense> },
    { path: 'ClassEditorLightMageSages', element: <Suspense fallback={loading}><FE10ClassEditorLightMageSages /></Suspense> },
    { path: 'ClassEditorLightSage', element: <Suspense fallback={loading}><FE10ClassEditorLightSage /></Suspense> },
    { path: 'ClassEditorLionKingTransformed', element: <Suspense fallback={loading}><FE10ClassEditorLionKingTransformed /></Suspense> },
    { path: 'ClassEditorLionKingUntransformed', element: <Suspense fallback={loading}><FE10ClassEditorLionKingUntransformed /></Suspense> },
    { path: 'ClassEditorMages', element: <Suspense fallback={loading}><FE10ClassEditorMages /></Suspense> },
    { path: 'ClassEditorMarksman', element: <Suspense fallback={loading}><FE10ClassEditorMarksman /></Suspense> },
    { path: 'ClassEditorMarshallsBlackKnight', element: <Suspense fallback={loading}><FE10ClassEditorMarshallsBlackKnight /></Suspense> },
    { path: 'ClassEditorMyrmidon', element: <Suspense fallback={loading}><FE10ClassEditorMyrmidon /></Suspense> },
    { path: 'ClassEditorPaladins', element: <Suspense fallback={loading}><FE10ClassEditorPaladins /></Suspense> },
    { path: 'ClassEditorPegususKnights', element: <Suspense fallback={loading}><FE10ClassEditorPegususKnights /></Suspense> },
    { path: 'ClassEditorPilgrimVendorCitizenHorse', element: <Suspense fallback={loading}><FE10ClassEditorPilgrimVendorCitizenHorse /></Suspense> },
    { path: 'ClassEditorPriest', element: <Suspense fallback={loading}><FE10ClassEditorPriest /></Suspense> },
    { path: 'ClassEditorRavenKing', element: <Suspense fallback={loading}><FE10ClassEditorRavenKing /></Suspense> },
    { path: 'ClassEditorRavenF', element: <Suspense fallback={loading}><FE10ClassEditorRavenF /></Suspense> },
    { path: 'ClassEditorRavenM', element: <Suspense fallback={loading}><FE10ClassEditorRavenM /></Suspense> },
    { path: 'ClassEditorReaver', element: <Suspense fallback={loading}><FE10ClassEditorReaver /></Suspense> },
    { path: 'ClassEditorRedDragonF', element: <Suspense fallback={loading}><FE10ClassEditorRedDragonF /></Suspense> },
    { path: 'ClassEditorRedDragonM', element: <Suspense fallback={loading}><FE10ClassEditorRedDragonM /></Suspense> },
    { path: 'ClassEditorRogueF', element: <Suspense fallback={loading}><FE10ClassEditorRogueF /></Suspense> },
    { path: 'ClassEditorRogueM', element: <Suspense fallback={loading}><FE10ClassEditorRogueM /></Suspense> },
    { path: 'ClassEditorSaint', element: <Suspense fallback={loading}><FE10ClassEditorSaint /></Suspense> },
    { path: 'ClassEditorSeraphKnightQueen', element: <Suspense fallback={loading}><FE10ClassEditorSeraphKnightQueen /></Suspense> },
    { path: 'ClassEditorSkrimirTransformed', element: <Suspense fallback={loading}><FE10ClassEditorSkrimirTransformed /></Suspense> },
    { path: 'ClassEditorSkrimirUntransformed', element: <Suspense fallback={loading}><FE10ClassEditorSkrimirUntransformed /></Suspense> },
    { path: 'ClassEditorSniper', element: <Suspense fallback={loading}><FE10ClassEditorSniper /></Suspense> },
    { path: 'ClassEditorSpirit', element: <Suspense fallback={loading}><FE10ClassEditorSpirit /></Suspense> },
    { path: 'ClassEditorSummoner', element: <Suspense fallback={loading}><FE10ClassEditorSummoner /></Suspense> },
    { path: 'ClassEditorSwordmaster', element: <Suspense fallback={loading}><FE10ClassEditorSwordmaster /></Suspense> },
    { path: 'ClassEditorThief', element: <Suspense fallback={loading}><FE10ClassEditorThief /></Suspense> },
    { path: 'ClassEditorTigerTransformed', element: <Suspense fallback={loading}><FE10ClassEditorTigerTransformed /></Suspense> },
    { path: 'ClassEditorTigerUntransformed', element: <Suspense fallback={loading}><FE10ClassEditorTigerUntransformed /></Suspense> },
    { path: 'ClassEditorTrueblade', element: <Suspense fallback={loading}><FE10ClassEditorTrueblade /></Suspense> },
    { path: 'ClassEditorUnknown', element: <Suspense fallback={loading}><FE10ClassEditorUnknown /></Suspense> },
    { path: 'ClassEditorValkyrie', element: <Suspense fallback={loading}><FE10ClassEditorValkyrie /></Suspense> },
    { path: 'ClassEditorVanguard', element: <Suspense fallback={loading}><FE10ClassEditorVanguard /></Suspense> },
    { path: 'ClassEditorWarrior', element: <Suspense fallback={loading}><FE10ClassEditorWarrior /></Suspense> },
    { path: 'ClassEditorWarriorSP', element: <Suspense fallback={loading}><FE10ClassEditorWarriorSP /></Suspense> },
    { path: 'ClassEditorWhisper', element: <Suspense fallback={loading}><FE10ClassEditorWhisper /></Suspense> },
    { path: 'ClassEditorWhiteDragon', element: <Suspense fallback={loading}><FE10ClassEditorWhiteDragon /></Suspense> },
    { path: 'ClassEditorWolfQueen', element: <Suspense fallback={loading}><FE10ClassEditorWolfQueen /></Suspense> },
    { path: 'GrowthRatesAstridSoren', element: <Suspense fallback={loading}><FE10GrowthRatesAstridSoren /></Suspense> },
    { path: 'GrowthRatesBlackKnight12ShinonGiffcaGeoffrey', element: <Suspense fallback={loading}><FE10GrowthRatesBlackKnight12ShinonGiffcaGeoffrey /></Suspense> },
    { path: 'GrowthRatesDanvedUlki', element: <Suspense fallback={loading}><FE10GrowthRatesDanvedUlki /></Suspense> },
    { path: 'GrowthRatesEdwardElincia', element: <Suspense fallback={loading}><FE10GrowthRatesEdwardElincia /></Suspense> },
    { path: 'GrowthRatesEnaIlyana', element: <Suspense fallback={loading}><FE10GrowthRatesEnaIlyana /></Suspense> },
    { path: 'GrowthRatesFionaHeather', element: <Suspense fallback={loading}><FE10GrowthRatesFionaHeather /></Suspense> },
    { path: 'GrowthRatesGatrieCalillKyza', element: <Suspense fallback={loading}><FE10GrowthRatesGatrieCalillKyza /></Suspense> },
    { path: 'GrowthRatesHaarVika', element: <Suspense fallback={loading}><FE10GrowthRatesHaarVika /></Suspense> },
    { path: 'GrowthRatesHetzelPelleasBoydMarcia', element: <Suspense fallback={loading}><FE10GrowthRatesHetzelPelleasBoydMarcia /></Suspense> },
    { path: 'GrowthRatesIkeandIzuka', element: <Suspense fallback={loading}><FE10GrowthRatesIkeandIzuka /></Suspense> },
    { path: 'GrowthRatesJillSkrimir', element: <Suspense fallback={loading}><FE10GrowthRatesJillSkrimir /></Suspense> },
    { path: 'GrowthRatesLehran', element: <Suspense fallback={loading}><FE10GrowthRatesLehran /></Suspense> },
    { path: 'GrowthratesLeonardoLethe', element: <Suspense fallback={loading}><FE10GrowthratesLeonardoLethe /></Suspense> },
    { path: 'GrowthratesLevail', element: <Suspense fallback={loading}><FE10GrowthratesLevail /></Suspense> },
    { path: 'GrowthRatesLyreReysonLekainLucia', element: <Suspense fallback={loading}><FE10GrowthRatesLyreReysonLekainLucia /></Suspense> },
    { path: 'GrowthRatesMakalovMicaiah', element: <Suspense fallback={loading}><FE10GrowthRatesMakalovMicaiah /></Suspense> },
    { path: 'GrowthRatesMegMordecaiJanaffBastianRolf', element: <Suspense fallback={loading}><FE10GrowthRatesMegMordecaiJanaffBastianRolf /></Suspense> },
    { path: 'GrowthratesMiaKurthAimee', element: <Suspense fallback={loading}><FE10GrowthratesMiaKurthAimee /></Suspense> },
    { path: 'GrowthRatesMistMuarim', element: <Suspense fallback={loading}><FE10GrowthRatesMistMuarim /></Suspense> },
    { path: 'GrowthRatesNealuchiNailahNaesala', element: <Suspense fallback={loading}><FE10GrowthRatesNealuchiNailahNaesala /></Suspense> },
    { path: 'GrowthRatesNepheneeNolan', element: <Suspense fallback={loading}><FE10GrowthRatesNepheneeNolan /></Suspense> },
    { path: 'GrowthRatesOscarOliver', element: <Suspense fallback={loading}><FE10GrowthRatesOscarOliver /></Suspense> },
    { path: 'GrowthRatesRanulfRafielLeanne', element: <Suspense fallback={loading}><FE10GrowthRatesRanulfRafielLeanne /></Suspense> },
    { path: 'GrowthratesRenningLaura', element: <Suspense fallback={loading}><FE10GrowthratesRenningLaura /></Suspense> },
    { path: 'GrowthRatesRhysKurthnagaKieranGareth', element: <Suspense fallback={loading}><FE10GrowthRatesRhysKurthnagaKieranGareth /></Suspense> },
    { path: 'GrowthRatesSephiranZelgius', element: <Suspense fallback={loading}><FE10GrowthRatesSephiranZelgius /></Suspense> },
    { path: 'GrowthRatesSotheSanakiSigrun', element: <Suspense fallback={loading}><FE10GrowthRatesSotheSanakiSigrun /></Suspense> },
    { path: 'GrowthRatesStefanTauroneoTanithBromZiharkTitania', element: <Suspense fallback={loading}><FE10GrowthRatesStefanTauroneoTanithBromZiharkTitania /></Suspense> },
    { path: 'GrowthRatesTibarnDheginsea', element: <Suspense fallback={loading}><FE10GrowthRatesTibarnDheginsea /></Suspense> },
    { path: 'GrowthRatesTormodNasir', element: <Suspense fallback={loading}><FE10GrowthRatesTormodNasir /></Suspense> },
    { path: 'GrowthRatesVolkeAran', element: <Suspense fallback={loading}><FE10GrowthRatesVolkeAran /></Suspense> },
    { path: 'GrowthRatesVolugCaineghis', element: <Suspense fallback={loading}><FE10GrowthRatesVolugCaineghis /></Suspense> },
  ],
};

export default FE10Routes;
