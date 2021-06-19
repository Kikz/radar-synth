//IMAGE IMPORTS
import korgVolcaBeats from '../img/korgVolcaBeats.png';
import korgVolcaSample from '../img/korgVolcaSample.png';
import akaiTomCat from '../img/akaiTomCat.png';
import rolandBoutique from '../img/RolandBoutique.png';
import arturiaMicrobrute from '../img/arturiaMicrobrute.png';
import akaiXR20 from '../img/akaiXR20.png';
import novationMininova from '../img/novationMininova.png';
import korgMicrokorg from '../img/korgMicrokorg.png';
import korgElectribe from '../img/korgElectribe.png';
import arturiaDrumbrute from '../img/arturiaDrumbrute.png';
import rolandAira from '../img/rolandAira.png';
import korgMinilogue from '../img/korgMinilogue.png';
import elektronDigitakt from '../img/elektronDigitakt.png';
import elektronAnalogKeys from '../img/elektronAnalogKeys.png';
import akaiMPClive from '../img/akaiMPClive.png';
import elektronOctatrack from '../img/elektronOctatrack.png';
import elektronAnalogRytm from '../img/elektronAnalogRytm.png';
import accessVirus from '../img/accessVirus.png';




//INSTRUMENT DATABASE
export const INSTRUMENTS_DB = [
    {
      name: "Korg Volca Beats",
      type: "drum machine",
      imageId: "korgVolcaBeats",
      imageSrc: korgVolcaBeats,
      imageAlt: "Korg Volca Beats Image",
      pricePerWeek: 29,
      pricePerDay: 18,
      buttonStyle: "drumMachinesOffersButton",
      buttonHref: "/korg-volca-beats.html"
    },
    {
      name: "Korg Volca Sample",
      type: "sampler",
      imageId: "korgVolcaSample",
      imageSrc: korgVolcaSample,
      imageAlt: `"Korg Volca Sample Image"`,
      pricePerWeek: 29,
      pricePerDay: 18,
      buttonStyle: "samplerOffersButton",
      buttonHref: "/korg-volca-sample.html"
    },
    {
      name: "Akai Tom Cat",
      type: "drum machine",
      imageId: "akaiTomCat",
      imageSrc: akaiTomCat,
      imageAlt: "Akai Tom Cat Image",
      pricePerWeek: 35,
      pricePerDay: 19,
      buttonStyle: "drumMachinesOffersButton",
      buttonHref: "/akai-tomcat.html"
    },
    {
      name: "Roland Boutique TR-09",
      type: "drum machine",
      imageId: "rolandBoutique",
      imageSrc: rolandBoutique,
      imageAlt: "Roland Boutique TR-09 Image",
      pricePerWeek: 35,
      pricePerDay: 19,
      buttonStyle: "drumMachinesOffersButton",
      buttonHref: "/roland-boutique-tr09.html"
    },
    {
      name: "Arturia Microbrute",
      type: "Synthesizer", 
      imageId: "arturiaMicrobrute",
      imageSrc: arturiaMicrobrute,
      imageAlt: "Arturia Microbrute Image",
      pricePerWeek: 35,
      pricePerDay: 19,
      buttonStyle: "synthOffersButton",
      buttonHref: "/arturia-microbrute",
      //product page
      productImageId: "arturiaMicrobrute01",
      productType: "Synth",
      productPolyphony: "Monophonic",
      productSkillLevel: "Intermediate",
      productPresets: "No",
    },
    {
      name: "Akai XR-20",
      type: "sampler",
      imageId: "akaiXR20",
      imageSrc: akaiXR20,
      imageAlt: "Akai XR-20 Image",
      pricePerWeek: 35,
      pricePerDay: 19,
      buttonStyle: "samplerOffersButton",
      buttonHref: "/akai-xr20.html"
    },
    {
      name: "Novation Mininova",
      type: "Synthesizer",
      imageId: "novationMininova",
      imageSrc: novationMininova,
      imageAlt: "Novation Mininova Image",
      pricePerWeek: 37,
      pricePerDay: 19,
      buttonStyle: "synthOffersButton",
      buttonHref: "/novation-mininova.html"
    },
    {
      name: "Korg Microkorg",
      type: "Synthesizer",
      imageId: "korgMicrokorg",
      imageSrc: korgMicrokorg,
      imageAlt: "Korg Microkorg Image",
      pricePerWeek: 39,
      pricePerDay: 20,
      buttonStyle: "synthOffersButton",
      buttonHref: "/korg-microkorg.html"
    },
    {
      name: "Korg Electribe Sampler",
      type: "sampler",
      imageId: "korgElectribe",
      imageSrc: korgElectribe,
      imageAlt: "Korg Electribe Sampler Image",
      pricePerWeek: 42,
      pricePerDay: 20,
      buttonStyle: "samplerOffersButton",
      buttonHref: "/korg-electribe.html"
    },
    {
      name: "Arturia Drumbrute",
      type: "drum machine",
      imageId: "arturiaDrumbrute",
      imageSrc: arturiaDrumbrute,
      imageAlt: "Arturia Drumbrute Image",
      pricePerWeek: 42,
      pricePerDay: 20,
      buttonStyle: "drumMachinesOffersButton",
      buttonHref: "/arturia-drumbrute.html"
    },
    {
      name: "Roland Aira TR-8",
      type: "drum machine",
      imageId: "rolandAira",
      imageSrc: rolandAira,
      imageAlt: "Roland Aira TR-8 Image",
      pricePerWeek: 45,
      pricePerDay: 21,
      buttonStyle: "drumMachinesOffersButton",
      buttonHref: "/roland-aira-tr8.html"
    },
    {
      name: "Korg Minilogue",
      type: "Synthesizer",
      imageId: "korgMinilogue",
      imageSrc: korgMinilogue,
      imageAlt: "Korg Minilogue Image",
      pricePerWeek: 51,
      pricePerDay: 22,
      buttonStyle: "synthOffersButton",
      buttonHref: "/korg-minilogue.html"
    },
    {
      name: "Elektron Digitakt",
      type: "sampler",
      imageId: "elektronDigitakt",
      imageSrc: elektronDigitakt,
      imageAlt: "Elektron Digitakt Image",
      pricePerWeek: 56,
      pricePerDay: 23,
      buttonStyle: "samplerOffersButton",
      buttonHref: "/elektron-digitakt.html"
    },
    {
      name: "Elektron Analog Keys",
      type: "Synthesizer",
      imageId: "elektronAnalogKeys",
      imageSrc: elektronAnalogKeys,
      imageAlt: "Elektron Analog Keys Image",
      pricePerWeek: 67,
      pricePerDay: 24,
      buttonStyle: "synthOffersButton",
      buttonHref: "/elektron-analog-keys.html"
    },
    {
      name: "Akai MPC Live",
      type: "sampler",
      imageId: "akaiMPClive",
      imageSrc: akaiMPClive,
      imageAlt: "Akai MPC Live Image",
      pricePerWeek: 76,
      pricePerDay: 26,
      buttonStyle: "samplerOffersButton",
      buttonHref: "/akai-mpc-live.html"
    },
    {
      name: "Elektron Octatrack MKII",
      type: "sampler",
      imageId: "elektronOctatrack",
      imageSrc: elektronOctatrack,
      imageAlt: "Elektron Octatrack MKII Image",
      pricePerWeek: 85,
      pricePerDay: 27,
      buttonStyle: "samplerOffersButton",
      buttonHref: "/elektron-octatrack-mkii.html"
    },
    {
      name: "Elektron Analog Rytm MKII",
      type: "drum machine",
      imageId: "elektronAnalogRytm",
      imageSrc: elektronAnalogRytm,
      imageAlt: "Elektron Analog Rytm MKII Image",
      pricePerWeek: 99,
      pricePerDay: 30,
      buttonStyle: "drumMachinesOffersButton",
      buttonHref: "/elektron-analog-rytm-mkii.html"
    },
    {
      name: "Access Virus T12 Darkstar",
      type: "Synthesizer",
      imageId: "accessVirus",
      imageSrc: accessVirus,
      imageAlt: "Access Virus T12 Darkstar Image",
      pricePerWeek: 128,
      pricePerDay: 34,
      buttonStyle: "synthOffersButton",
      buttonHref: "/access-virus-t12-darkstar.html"
    },
]

//DATABASE SORTED BY PRICE PER WEEK LOWEST TO HIGHEST
export let SORTED_INSTRUMENTS_DB = INSTRUMENTS_DB.sort((a: any, b: any) => a.pricePerWeek - b.pricePerWeek)

