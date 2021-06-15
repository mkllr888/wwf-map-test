import Head from 'next/head';
import Link from 'next/link';
import {Button} from 'semantic-ui-react';

import styles from '../../styles/Home.module.css';

export default function Home() {
    let geojson = {
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "title": "Umeå Universitet",
                    "country": "Sweden",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.umu.se/en/education/student-services--support/student-guide/"
                },
                "geometry": {
                    "coordinates": [
                        20.300855,
                        63.820938
                    ],
                    "type": "Point"
                },
                "id": "09e708d842e65f3c5ac9fc40a2c90b22"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Tsinghua University\t",
                    "country": "China",
                    "study": "BWL and Economics",
                    "agreement": "Faculty Agreement",
                    "url": "https://www.tsinghua.edu.cn/en/Admissions/Non_Degree_Programs.htm"
                },
                "geometry": {
                    "coordinates": [
                        116.320882,
                        39.998497
                    ],
                    "type": "Point"
                },
                "id": "11175afb458129eaa68a185f44f2197a"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Chulalongkorn University",
                    "country": "Thailand",
                    "study": "BWL and Economics",
                    "agreement": "Faculty Agreement",
                    "url": "https://www.chula.ac.th/en/admissions/exchange-student/inbound-exchange-student/"
                },
                "geometry": {
                    "coordinates": [
                        100.532886,
                        13.743144
                    ],
                    "type": "Point"
                },
                "id": "1f5d1a4d5ecaa3a440b749829e42b49a"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Università degli Studi di Perugia",
                    "country": "Italy",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.unipg.it/en/international-students/incoming-exchange-students"
                },
                "geometry": {
                    "coordinates": [
                        12.385345,
                        43.115865
                    ],
                    "type": "Point"
                },
                "id": "22d08d0a14e6756e2782b53b2274901e"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Universidad de las Palmas de Gran Canaria",
                    "country": "Spain",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://internacional.ulpgc.es/en/movilidad-incoming/estudiantes-incoming/study-at-the-ulpgc-incoming/espanol-programas-de-movilidad/"
                },
                "geometry": {
                    "coordinates": [
                        -15.419919,
                        28.099106
                    ],
                    "type": "Point"
                },
                "id": "24a0b84989d3de4b1209f0fb4c71dfe8"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Università degli Studi di Milano",
                    "country": "Italy",
                    "study": "Informatics",
                    "agreement": "SEMP",
                    "url": "https://www.unimi.it/en/international"
                },
                "geometry": {
                    "coordinates": [
                        9.194627,
                        45.460068
                    ],
                    "type": "Point"
                },
                "id": "2db49da1224f4ed73b595838ff52ddb6"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Università Ca' Foscari di Venezia",
                    "country": "Italy",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.unive.it/pag/12573/"
                },
                "geometry": {
                    "coordinates": [
                        12.326441,
                        45.434492
                    ],
                    "type": "Point"
                },
                "id": "2e083bcbe4d97f84db5ae4cb4dafe38a"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "University of Limerick",
                    "country": "Ireland",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.ul.ie/international/"
                },
                "geometry": {
                    "coordinates": [
                        -8.570966,
                        52.673748
                    ],
                    "type": "Point"
                },
                "id": "3104c9b3b08f233067808267c048c829"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Københavns Universitet\t",
                    "agreement": "SEMP",
                    "study": "BWL and Economics",
                    "url": "studies.ku.dk/visiting/",
                    "country": "Denmark"
                },
                "geometry": {
                    "coordinates": [
                        12.572319,
                        55.68015
                    ],
                    "type": "Point"
                },
                "id": "322e146fef794538864ec08ad53f5488"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Linköpings Universitet",
                    "country": "Sweden",
                    "agreement": "SEMP",
                    "study": "BWL",
                    "url": "https://liu.se/en/education/exchange-studies"
                },
                "geometry": {
                    "coordinates": [
                        15.575403,
                        58.39779
                    ],
                    "type": "Point"
                },
                "id": "3f87b2f5ef9f91f8291a8bf289612915"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Universite Claude Bernard - Lyon 1",
                    "country": "France",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.univ-lyon1.fr/en/foreign-student/foreign-students-in-exchange-programs"
                },
                "geometry": {
                    "coordinates": [
                        4.868177,
                        45.781561
                    ],
                    "type": "Point"
                },
                "id": "40c9209024ff0821c137a9a1ac48f53f"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Ludwig-Maximilians-Universität München",
                    "country": "Germany",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.lmu.de/en/study/all-degrees-and-programs/programs-for-international-visiting-students/index.html"
                },
                "geometry": {
                    "coordinates": [
                        11.594295,
                        48.150027
                    ],
                    "type": "Point"
                },
                "id": "48a0923a4ad05b5059e7075fced1a6ef"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Technische Universität Darmstadt",
                    "country": "Germany",
                    "study": "Informatics",
                    "agreement": "SEMP",
                    "url": "https://www.tu-darmstadt.de/studieren/studierende_tu/internationale_studierende_1/index.en.jsp"
                },
                "geometry": {
                    "coordinates": [
                        8.656805,
                        49.876397
                    ],
                    "type": "Point"
                },
                "id": "4b5533835c492a08cf93074ffc3d05a5"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Westfälische Wilhelms-Universität Münster",
                    "country": "Germany",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.uni-muenster.de/InternationalOffice/"
                },
                "geometry": {
                    "coordinates": [
                        7.61311,
                        51.963833
                    ],
                    "type": "Point"
                },
                "id": "4e8af4aa7713eeada82ba4e4bfea70a4"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Högskolan i Skövde",
                    "country": "Sweden",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.his.se/en/education/exchange-student/"
                },
                "geometry": {
                    "coordinates": [
                        13.854841,
                        58.394164
                    ],
                    "type": "Point"
                },
                "id": "4ece07c5ad055ac6904eb4a55c776a54"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Universidad Rey Juan Carlos",
                    "country": "Spain",
                    "study": "BWL, Economics, Informatics",
                    "agreement": "SEMP",
                    "url": "https://www.urjc.es/en/international/internatinal-students/content/international-students"
                },
                "geometry": {
                    "coordinates": [
                        -3.819571,
                        40.282609
                    ],
                    "type": "Point"
                },
                "id": "52a55a477a954dae4b6c7ace70ad3cf8"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "NEOMA Business School - Reims Campus",
                    "country": "France",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://neoma-bs.com/about-neoma/international/international-students/"
                },
                "geometry": {
                    "coordinates": [
                        4.003151,
                        49.238941
                    ],
                    "type": "Point"
                },
                "id": "54c0a36ff1b24ffac62ad1492b34eaa0"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Fudan University",
                    "agreement": "Faculty Agreement",
                    "study": "BWL and Economics",
                    "country": "China",
                    "url": "https://iso.fudan.edu.cn/isoenglish/main.htm"
                },
                "geometry": {
                    "coordinates": [
                        121.500477,
                        31.301049
                    ],
                    "type": "Point"
                },
                "id": "5552c6af25de98cdfb7ad284071a2058"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Jiaotong University\t",
                    "country": "China",
                    "study": "BWL, Economics, Informatics",
                    "agreement": "Faculty Agreement",
                    "url": "isc.sjtu.edu.cn/EN/content.aspx?info_lb=12&flag=1"
                },
                "geometry": {
                    "coordinates": [
                        121.432217,
                        31.02778
                    ],
                    "type": "Point"
                },
                "id": "5b02b806a266bfe2b14d4e46e401484c"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Universität Wien",
                    "url": "https://international.univie.ac.at/en/student-mobility/incoming-students/",
                    "country": "Austria",
                    "study": "BWL, Economics, Informatics",
                    "agreement": "SEMP"
                },
                "geometry": {
                    "coordinates": [
                        16.360078,
                        48.213171
                    ],
                    "type": "Point"
                },
                "id": "5b394121ccb49b648d7988c5ce16f377"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Johann Wolfgang Göthe-Universität",
                    "country": "Germany",
                    "url": "https://www.uni-frankfurt.de/38294581/An_die_Goethe_Uni",
                    "study": "BWL and Economics",
                    "agreement": "SEMP"
                },
                "geometry": {
                    "coordinates": [
                        8.667401,
                        50.126796
                    ],
                    "type": "Point"
                },
                "id": "5f8f6dd9d8ed9b70e60ae7071bd21d91"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Stockholms Universitet",
                    "country": "Sweden",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.su.se/english/education/2.24322"
                },
                "geometry": {
                    "coordinates": [
                        18.058786,
                        59.363356
                    ],
                    "type": "Point"
                },
                "id": "696665d3b68ff9a7c19296b32e102661"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Korea University Business School",
                    "country": "South Korea",
                    "study": "BWL",
                    "agreement": "Faculty Agreement",
                    "url": "https://biz.korea.ac.kr/eng/undergraduate/inbound"
                },
                "geometry": {
                    "coordinates": [
                        127.032526,
                        37.589305
                    ],
                    "type": "Point"
                },
                "id": "6a6e807bc3da0ded2386eecf314b74af"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Katholieke Universiteit Leuven",
                    "agreement": "SEMP",
                    "study": "BWL and Economics",
                    "country": "Belgium",
                    "url": "https://www.kuleuven.be/english/admissions/exchange"
                },
                "geometry": {
                    "coordinates": [
                        4.700373,
                        50.877977
                    ],
                    "type": "Point"
                },
                "id": "6bf8659399599f43ffb0eef06a0c8094"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Università degli Studi di Firenze",
                    "country": "Italy",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.unifi.it/index.php?module=CMpro&func=viewpage&pageid=10591&newlang=eng"
                },
                "geometry": {
                    "coordinates": [
                        11.242081,
                        43.806858
                    ],
                    "type": "Point"
                },
                "id": "703e7a3d99f1e655195d87d101a3e52c"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "École de management de Normandie",
                    "country": "France",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.em-normandie.com/en/international-students"
                },
                "geometry": {
                    "coordinates": [
                        0.10355,
                        49.489022
                    ],
                    "type": "Point"
                },
                "id": "769c78aac7779385e56b9e5662dae24f"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Humboldt-Universität zu Berlin",
                    "country": "Germany",
                    "agreement": "SEMP",
                    "study": "BWL and Economics",
                    "url": "https://www.international.hu-berlin.de/de/studierende/aus-dem-ausland"
                },
                "geometry": {
                    "coordinates": [
                        13.39355,
                        52.51875
                    ],
                    "type": "Point"
                },
                "id": "7ae88782e819ec3d5d82f8cf24a6decc"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Università degli Studi di Salerno",
                    "country": "Italy",
                    "agreement": "SEMP",
                    "study": "Informatics",
                    "url": "https://web.unisa.it/unisa-rescue-page/dettaglio/id/685/module/196/row/21"
                },
                "geometry": {
                    "coordinates": [
                        14.791166,
                        40.772038
                    ],
                    "type": "Point"
                },
                "id": "7b266b27d6918a02afe3432dc0f2dbc7"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Technische Universität München",
                    "country": "Germany",
                    "agreement": "SEMP",
                    "study": "BWL and Economics",
                    "url": "https://www.tum.de/studium/internationale-studierende/"
                },
                "geometry": {
                    "coordinates": [
                        11.567739,
                        48.149557
                    ],
                    "type": "Point"
                },
                "id": "7bed9edffac88aa9b6957553cc2635e3"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Rijksuniversiteit Groningen",
                    "country": "Netherlands",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.rug.nl/education/exchange/"
                },
                "geometry": {
                    "coordinates": [
                        6.562545,
                        53.219538
                    ],
                    "type": "Point"
                },
                "id": "84dedbcf217e305f016ffbe93633a49e"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Radboud Universiteit Nijmegen",
                    "country": "Netherlands",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.ru.nl/io/english/students/incoming-exchange-0/"
                },
                "geometry": {
                    "coordinates": [
                        5.86521,
                        51.819693
                    ],
                    "type": "Point"
                },
                "id": "85952e25904bc12d1dbd21ea22d7378e"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Universität Karlsruhe (TH)",
                    "country": "Germany",
                    "study": "Informatics",
                    "url": "https://www.intl.kit.edu/istudies/",
                    "agreement": "SEMP"
                },
                "geometry": {
                    "coordinates": [
                        8.416899,
                        49.012379
                    ],
                    "type": "Point"
                },
                "id": "91295f9c15ebc226128696c5acde4914"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Uppsala Universitet",
                    "study": "BWL, Economics, Informatics",
                    "agreement": "SEMP",
                    "url": "https://www.uu.se/en/admissions/exchange/",
                    "country": "Sweden"
                },
                "geometry": {
                    "coordinates": [
                        17.626643,
                        59.853701
                    ],
                    "type": "Point"
                },
                "id": "92fab91146360a349c3c93ae31ddc1a7"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "ESC Rennes School of Business",
                    "country": "France",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.rennes-sb.com/programmes/exchange-programme/"
                },
                "geometry": {
                    "coordinates": [
                        -1.692348,
                        48.127834
                    ],
                    "type": "Point"
                },
                "id": "94e99c0c04cd0c507bc2996846200cc7"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Institut d'études Politiques de Paris (Sciences Po)",
                    "country": "France",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.sciencespo.fr/international/en/content/exchange-programme.html"
                },
                "geometry": {
                    "coordinates": [
                        2.329003,
                        48.853898
                    ],
                    "type": "Point"
                },
                "id": "9764c8dc172758e35acb13e050ca51f0"
            },
            {
                "type": "Feature",
                "properties": {
                    "tile": "Hanken Svenska Handelshögskolan",
                    "country": "Finland",
                    "url": "https://www.hanken.fi/en/apply/international-opportunities/incoming-exchange-students",
                    "study": "BWL and Economics",
                    "agreement": "SEMP"
                },
                "geometry": {
                    "coordinates": [
                        24.924495,
                        60.170851
                    ],
                    "type": "Point"
                },
                "id": "97eea7d1fa41900cee3d01a147edaa37"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "ESCEM",
                    "country": "France",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.escem.fr/escem-business-school/international/student-life/"
                },
                "geometry": {
                    "coordinates": [
                        0.704807,
                        47.365095
                    ],
                    "type": "Point"
                },
                "id": "9a80b7b1715a1332109b340bf87ea533"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "University of Victoria",
                    "agreement": "Faculty Agreement",
                    "country": "Canada",
                    "url": "https://www.uvic.ca/international/inbound-students/exchange/index.php",
                    "study": "BWL and Economics"
                },
                "geometry": {
                    "coordinates": [
                        -123.311731,
                        48.465128
                    ],
                    "type": "Point"
                },
                "id": "a33b50144bb772cae9228a9edef832a0"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Erasmus Universiteit Rotterdam",
                    "country": "Netherlands",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.eur.nl/en/education/exchange/come-rotterdam-exchange"
                },
                "geometry": {
                    "coordinates": [
                        4.52598,
                        51.917627
                    ],
                    "type": "Point"
                },
                "id": "a50540eba9125ff12bed064636f3d0c4"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Singapore Management University",
                    "country": "Singapore",
                    "study": "BWL and Economics",
                    "agreement": "Faculty Agreement",
                    "url": "https://www.smu.edu.sg/global/study-in-smu"
                },
                "geometry": {
                    "coordinates": [
                        103.850276,
                        1.296466
                    ],
                    "type": "Point"
                },
                "id": "a70a661da3defa1c4ed374b4a3cb8a2b"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Örebro Universitet",
                    "country": "Sweden",
                    "agreement": "SEMP",
                    "url": "https://www.oru.se/english/study/exchange-students/",
                    "study": "BWL, Economics, Informatics"
                },
                "geometry": {
                    "coordinates": [
                        15.249113,
                        59.25473
                    ],
                    "type": "Point"
                },
                "id": "a76db46b44998922ed3d38a7d9d74607"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Handelshøyskolen BI",
                    "country": "Norway",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.bi.edu/programmes-and-individual-courses/exchange-programme/"
                },
                "geometry": {
                    "coordinates": [
                        10.768531,
                        59.948363
                    ],
                    "type": "Point"
                },
                "id": "ab7f0321a98e00efcf2fe37495695e71"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Libera Università di Bolzano",
                    "country": "Italy",
                    "study": "Informatics",
                    "agreement": "SEMP",
                    "url": "https://www.unibz.it/en/applicants/international/incoming-exchange-students/"
                },
                "geometry": {
                    "coordinates": [
                        11.350055,
                        46.498315
                    ],
                    "type": "Point"
                },
                "id": "b856a9fb639ec51f52885a2f5ae76a09"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "University of Lincoln",
                    "agreement": "SEMP",
                    "study": "BWL and Economics",
                    "country": "United Kingdom",
                    "url": "https://www.lincoln.ac.uk/home/studywithus/internationalstudents/"
                },
                "geometry": {
                    "coordinates": [
                        -0.548748,
                        53.228544
                    ],
                    "type": "Point"
                },
                "id": "bc5a69667aaabdab3ad85bff94ec8875"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Hong Kong Polytechnic University",
                    "country": "China",
                    "url": "https://www.polyu.edu.hk/geo/exchange-and-study-abroad/incoming-students/",
                    "study": "BWL and Economics",
                    "agreement": "Faculty Agreement"
                },
                "geometry": {
                    "coordinates": [
                        114.179756,
                        22.304572
                    ],
                    "type": "Point"
                },
                "id": "c355a47327baf05181730f9a8044eca3"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "ESSEC Business School",
                    "country": "France",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://sites.google.com/a/essec.edu/bba-incoming-international-exchange/home"
                },
                "geometry": {
                    "coordinates": [
                        2.077174,
                        49.033481
                    ],
                    "type": "Point"
                },
                "id": "c37ba930d6830201cf2745a8c0a8fab8"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Syddansk Universitet",
                    "agreement": "SEMP",
                    "study": "BWL and Economics",
                    "country": "Denmark",
                    "url": "https://www.sdu.dk/en/uddannelse/exchange_programmes/exchange_facultyofbss"
                },
                "geometry": {
                    "coordinates": [
                        10.428135,
                        55.367904
                    ],
                    "type": "Point"
                },
                "id": "c7541f2284116bd947863ec2be364c30"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Universität Mannheim",
                    "country": "Germany",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.uni-mannheim.de/studium/vom-ausland-nach-mannheim/"
                },
                "geometry": {
                    "coordinates": [
                        8.46456,
                        49.483244
                    ],
                    "type": "Point"
                },
                "id": "ca484381e1124ddd8aae9e7362038cc4"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Università Commerciale Luigi Bocconi",
                    "country": "Italy",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.unibocconi.eu/wps/wcm/connect/Bocconi/SitoPubblico_EN/Navigation+Tree/Home/programs/current+students/Services/International+Relations/International+Students/International+Student+Desk/"
                },
                "geometry": {
                    "coordinates": [
                        9.188678,
                        45.449714
                    ],
                    "type": "Point"
                },
                "id": "caea424d84380cecbbf02a7159d010e3"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Universitat Internacional de Catalunya",
                    "country": "Spain",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.uic.es/en/international/study-uic-barcelona/international-mobility/admission-and-enrolment-exchange-students"
                },
                "geometry": {
                    "coordinates": [
                        2.123529,
                        41.405719
                    ],
                    "type": "Point"
                },
                "id": "cdc6fe97e3322afa3e051ea0b41b21f2"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Universidad Autonoma de Madrid",
                    "country": "Spain",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "http://www.uam.es/UAM/incoming-students?language=en&nodepath=Incoming%20Students"
                },
                "geometry": {
                    "coordinates": [
                        -3.694989,
                        40.545565
                    ],
                    "type": "Point"
                },
                "id": "cec932d9aa01b042d895e4b561990573"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Queen Mary University of London",
                    "country": "United Kingdom",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.qmul.ac.uk/international-students/"
                },
                "geometry": {
                    "coordinates": [
                        -0.039322,
                        51.52472
                    ],
                    "type": "Point"
                },
                "id": "d42fbf91a29c79c723a2a5b2a91be125"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Univerza v Ljubljani",
                    "country": "Slovenia",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.uni-lj.si/study/information/exchange/"
                },
                "geometry": {
                    "coordinates": [
                        14.504128,
                        46.048982
                    ],
                    "type": "Point"
                },
                "id": "d45dec053ce7e973f739c7a6143aa3d2"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Aalto-Yliopisto",
                    "country": "Finland",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://into.aalto.fi/display/enopisk/International+students"
                },
                "geometry": {
                    "coordinates": [
                        24.828341,
                        60.186547
                    ],
                    "type": "Point"
                },
                "id": "ddbd29a0de4a66a580e1e075ddf15648"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "København Handelshøjskolen",
                    "country": "Denmark",
                    "url": "https://www.cbs.dk/en/international-opportunities/international-students",
                    "study": "BWL and Economics",
                    "agreement": "SEMP"
                },
                "geometry": {
                    "coordinates": [
                        12.52475,
                        55.680862
                    ],
                    "type": "Point"
                },
                "id": "e62c3b8b7013777710e5474ea83871ab"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Queen's University",
                    "country": "Canada",
                    "study": "BWL and Economics",
                    "agreement": "Faculty Agreement",
                    "url": "https://www.queensu.ca/artsci/think-and-apply/undergrad/international-students"
                },
                "geometry": {
                    "coordinates": [
                        -76.495213,
                        44.22624
                    ],
                    "type": "Point"
                },
                "id": "e6b71f97a600b6140722d9b73ce59474"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "EDHEC Business School",
                    "country": "France",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://bba.edhec.edu/en/exchange-students"
                },
                "geometry": {
                    "coordinates": [
                        3.166072,
                        50.672982
                    ],
                    "type": "Point"
                },
                "id": "e9343f935476600bb04fc6d6dfcd8014"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "The University of Tokyo",
                    "country": "Japan",
                    "study": "Informatics",
                    "agreement": "Faculty Agreement",
                    "url": "https://www.u-tokyo.ac.jp/adm/inbound/en/programs-ex.html"
                },
                "geometry": {
                    "coordinates": [
                        139.76374,
                        35.711707
                    ],
                    "type": "Point"
                },
                "id": "eb63dc7d9e202b2a399e0a00106da374"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Renmin University of China\t",
                    "country": "China",
                    "study": "BWL and Economics",
                    "agreement": "Faculty Agreement",
                    "url": "https://www.ruc.edu.cn/forinternationalstudents-en"
                },
                "geometry": {
                    "coordinates": [
                        116.307088,
                        39.969776
                    ],
                    "type": "Point"
                },
                "id": "ed02293c242d6252f7d18b71639cbcdf"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Universidade de Sao Paulo",
                    "agreement": "Faculty Agreement",
                    "study": "BWL and Economics",
                    "url": "http://www.usp.br/internationaloffice/en/index.php/admissions/studentexchange",
                    "country": "Brasil"
                },
                "geometry": {
                    "coordinates": [
                        -46.723775,
                        -23.55907
                    ],
                    "type": "Point"
                },
                "id": "f76cf597d3e8b7817e6580e5539c05fd"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Göteborgs Universitet",
                    "country": "Sweden",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.gu.se/en/study-in-gothenburg/exchange-student"
                },
                "geometry": {
                    "coordinates": [
                        11.971299,
                        57.698551
                    ],
                    "type": "Point"
                },
                "id": "faf7ebed35a56e4fed50c313f9690ede"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Universitat Pompeu Fabra",
                    "country": "Spain",
                    "study": "BWL and Economics",
                    "agreement": "SEMP",
                    "url": "https://www.upf.edu/web/incoming"
                },
                "geometry": {
                    "coordinates": [
                        2.179736,
                        41.378997
                    ],
                    "type": "Point"
                },
                "id": "fc5bb5e29b1bed1abcdd15576a074496"
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Wirtschaftsuniversität Wien",
                    "country": "Austria",
                    "study": "BWL and Economics",
                    "url": "https://www.wu.ac.at/en/programs/incoming-students",
                    "agreement": "SEMP"
                },
                "geometry": {
                    "coordinates": [
                        16.408251,
                        48.213675
                    ],
                    "type": "Point"
                },
                "id": "ff05535b4b357e212a2e2cecf138bf24"
            }
        ],
    };

    let newJson = geojson.features.map(element => (
        {
            title: element.properties.title,
            country: element.properties.country,
            area: element.properties.study,
            agreement: element.properties.agreement,
            url: element.properties.url,
            location: JSON.stringify(element.geometry)
        }
    ))

debugger;

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Partner University Map</h1>

            <h3>Privacy Notice</h3>
            <p>In order to display this content, user data is transferred to third parties (<a href={"https://www.openstreetmap.org"}>openstreetmap.org</a>).</p>
            <Button primary href="/all">Accept & Open</Button>
        </div>
    );
}
