"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "users",
            [
                {
                    firstName: "Parul",
                    lastName: "Sinha",
                    email: "psinha@kraken.com",
                    createdAt: "2018-06-22 13:47:36",
                    updatedAt: "2018-06-22 13:47:36"
                },
                {
                    firstName: "Randy",
                    lastName: "Collier",
                    email: "rcollier@kraken.com",
                    createdAt: "2018-06-22 13:47:36",
                    updatedAt: "2018-06-22 13:47:36"
                },
                {
                    firstName: "Alain",
                    lastName: "O'Henehan",
                    email: "aohenehan0@redcross.org",
                    createdAt: "2018-06-22 13:47:36",
                    updatedAt: "2018-06-22 13:47:36"
                },
                {
                    firstName: "Hilly",
                    lastName: "Di Francecshi",
                    email: "hdifrancecshi1@statcounter.com",
                    createdAt: "2018-07-27 08:02:52",
                    updatedAt: "2018-07-27 08:02:52"
                },
                {
                    firstName: "Lutero",
                    lastName: "Comi",
                    email: "lcomi2@gov.uk",
                    createdAt: "2018-12-19 14:08:17",
                    updatedAt: "2018-12-19 14:08:17"
                },
                {
                    firstName: "Chery",
                    lastName: "Ceschelli",
                    email: "cceschelli3@zimbio.com",
                    createdAt: "2018-05-02 16:43:17",
                    updatedAt: "2018-05-02 16:43:17"
                },
                {
                    firstName: "Doria",
                    lastName: "Helgass",
                    email: "dhelgass4@canalblog.com",
                    createdAt: "2018-09-25 04:49:57",
                    updatedAt: "2018-09-25 04:49:57"
                },
                {
                    firstName: "Way",
                    lastName: "Bewshea",
                    email: "wbewshea5@jalbum.net",
                    createdAt: "2018-11-05 09:59:46",
                    updatedAt: "2018-11-05 09:59:46"
                },
                {
                    firstName: "Beitris",
                    lastName: "Dingate",
                    email: "bdingate6@purevolume.com",
                    createdAt: "2018-05-22 06:16:31",
                    updatedAt: "2018-05-22 06:16:31"
                },
                {
                    firstName: "Brietta",
                    lastName: "Torresi",
                    email: "btorresi7@liveinternet.ru",
                    createdAt: "2018-12-09 03:31:13",
                    updatedAt: "2018-12-09 03:31:13"
                },
                {
                    firstName: "Gusella",
                    lastName: "Morando",
                    email: "gmorando8@imageshack.us",
                    createdAt: "2018-06-23 11:43:51",
                    updatedAt: "2018-06-23 11:43:51"
                },
                {
                    firstName: "Aprilette",
                    lastName: "Briggdale",
                    email: "abriggdale9@lulu.com",
                    createdAt: "2018-11-21 10:11:11",
                    updatedAt: "2018-11-21 10:11:11"
                },
                {
                    firstName: "Jaime",
                    lastName: "Sail",
                    email: "jsaila@netvibes.com",
                    createdAt: "2019-04-04 13:36:44",
                    updatedAt: "2019-04-04 13:36:44"
                },
                {
                    firstName: "Pierette",
                    lastName: "Tumber",
                    email: "ptumberb@sohu.com",
                    createdAt: "2018-07-11 02:30:28",
                    updatedAt: "2018-07-11 02:30:28"
                },
                {
                    firstName: "Selie",
                    lastName: "Lloyd",
                    email: "slloydc@oaic.gov.au",
                    createdAt: "2019-03-08 03:56:37",
                    updatedAt: "2019-03-08 03:56:37"
                },
                {
                    firstName: "Sherm",
                    lastName: "Flag",
                    email: "sflagd@soup.io",
                    createdAt: "2018-10-19 17:57:06",
                    updatedAt: "2018-10-19 17:57:06"
                },
                {
                    firstName: "Griswold",
                    lastName: "Ricker",
                    email: "grickere@statcounter.com",
                    createdAt: "2018-10-24 01:09:22",
                    updatedAt: "2018-10-24 01:09:22"
                },
                {
                    firstName: "Reuven",
                    lastName: "Rozenbaum",
                    email: "rrozenbaumf@istockphoto.com",
                    createdAt: "2019-03-01 10:43:27",
                    updatedAt: "2019-03-01 10:43:27"
                },
                {
                    firstName: "Leland",
                    lastName: "Ossenna",
                    email: "lossennag@time.com",
                    createdAt: "2019-03-04 05:06:45",
                    updatedAt: "2019-03-04 05:06:45"
                },
                {
                    firstName: "Wendel",
                    lastName: "Heephy",
                    email: "wheephyh@youku.com",
                    createdAt: "2019-03-03 21:30:58",
                    updatedAt: "2019-03-03 21:30:58"
                },
                {
                    firstName: "Dolly",
                    lastName: "Membry",
                    email: "dmembryi@wsj.com",
                    createdAt: "2018-11-30 09:59:51",
                    updatedAt: "2018-11-30 09:59:51"
                },
                {
                    firstName: "Dionysus",
                    lastName: "Ossipenko",
                    email: "dossipenkoj@thetimes.co.uk",
                    createdAt: "2018-09-11 05:54:15",
                    updatedAt: "2018-09-11 05:54:15"
                },
                {
                    firstName: "Giraldo",
                    lastName: "Brophy",
                    email: "gbrophyk@smugmug.com",
                    createdAt: "2018-10-26 14:43:46",
                    updatedAt: "2018-10-26 14:43:46"
                },
                {
                    firstName: "Val",
                    lastName: "Madner",
                    email: "vmadnerl@google.com",
                    createdAt: "2019-01-16 13:08:09",
                    updatedAt: "2019-01-16 13:08:09"
                },
                {
                    firstName: "Rachele",
                    lastName: "Crank",
                    email: "rcrankm@vinaora.com",
                    createdAt: "2019-02-28 11:18:54",
                    updatedAt: "2019-02-28 11:18:54"
                },
                {
                    firstName: "Otho",
                    lastName: "Jordi",
                    email: "ojordin@is.gd",
                    createdAt: "2018-09-01 12:45:59",
                    updatedAt: "2018-09-01 12:45:59"
                },
                {
                    firstName: "Garrott",
                    lastName: "Clibbery",
                    email: "gclibberyo@walmart.com",
                    createdAt: "2018-05-25 21:40:34",
                    updatedAt: "2018-05-25 21:40:34"
                },
                {
                    firstName: "Aland",
                    lastName: "Hengoed",
                    email: "ahengoedp@de.vu",
                    createdAt: "2018-09-17 20:26:43",
                    updatedAt: "2018-09-17 20:26:43"
                },
                {
                    firstName: "Rossie",
                    lastName: "MacGruer",
                    email: "rmacgruerq@answers.com",
                    createdAt: "2018-05-02 12:36:57",
                    updatedAt: "2018-05-02 12:36:57"
                },
                {
                    firstName: "Abigale",
                    lastName: "Ericssen",
                    email: "aericssenr@wiley.com",
                    createdAt: "2018-07-13 13:04:12",
                    updatedAt: "2018-07-13 13:04:12"
                },
                {
                    firstName: "Fonz",
                    lastName: "McKeon",
                    email: "fmckeons@vkontakte.ru",
                    createdAt: "2018-05-14 13:55:04",
                    updatedAt: "2018-05-14 13:55:04"
                },
                {
                    firstName: "Tallia",
                    lastName: "Mundee",
                    email: "tmundeet@is.gd",
                    createdAt: "2018-10-15 00:35:48",
                    updatedAt: "2018-10-15 00:35:48"
                },
                {
                    firstName: "Terrill",
                    lastName: "Daburn",
                    email: "tdaburnu@mtv.com",
                    createdAt: "2018-05-23 15:44:32",
                    updatedAt: "2018-05-23 15:44:32"
                },
                {
                    firstName: "Antonino",
                    lastName: "Fahy",
                    email: "afahyv@who.int",
                    createdAt: "2019-01-30 03:37:24",
                    updatedAt: "2019-01-30 03:37:24"
                },
                {
                    firstName: "Sallyanne",
                    lastName: "Ploughwright",
                    email: "sploughwrightw@google.pl",
                    createdAt: "2018-10-24 17:09:38",
                    updatedAt: "2018-10-24 17:09:38"
                },
                {
                    firstName: "Thomasina",
                    lastName: "John",
                    email: "tjohnx@hp.com",
                    createdAt: "2018-10-30 17:01:11",
                    updatedAt: "2018-10-30 17:01:11"
                },
                {
                    firstName: "Enriqueta",
                    lastName: "Niess",
                    email: "eniessy@pcworld.com",
                    createdAt: "2018-10-24 16:54:15",
                    updatedAt: "2018-10-24 16:54:15"
                },
                {
                    firstName: "Kaye",
                    lastName: "Kleinber",
                    email: "kkleinberz@prlog.org",
                    createdAt: "2019-03-20 18:30:05",
                    updatedAt: "2019-03-20 18:30:05"
                },
                {
                    firstName: "Garrard",
                    lastName: "Dibner",
                    email: "gdibner10@wix.com",
                    createdAt: "2019-02-07 03:18:45",
                    updatedAt: "2019-02-07 03:18:45"
                },
                {
                    firstName: "Sigrid",
                    lastName: "Sprules",
                    email: "ssprules11@imgur.com",
                    createdAt: "2018-05-10 16:16:15",
                    updatedAt: "2018-05-10 16:16:15"
                },
                {
                    firstName: "Papageno",
                    lastName: "Zoren",
                    email: "pzoren12@360.cn",
                    createdAt: "2018-04-23 05:22:39",
                    updatedAt: "2018-04-23 05:22:39"
                },
                {
                    firstName: "Rinaldo",
                    lastName: "Lowes",
                    email: "rlowes13@mtv.com",
                    createdAt: "2018-08-07 22:28:32",
                    updatedAt: "2018-08-07 22:28:32"
                },
                {
                    firstName: "Cesar",
                    lastName: "Pursey",
                    email: "cpursey14@ameblo.jp",
                    createdAt: "2018-06-17 12:42:11",
                    updatedAt: "2018-06-17 12:42:11"
                },
                {
                    firstName: "Arvie",
                    lastName: "Kyles",
                    email: "akyles15@photobucket.com",
                    createdAt: "2019-01-18 17:56:15",
                    updatedAt: "2019-01-18 17:56:15"
                },
                {
                    firstName: "Allie",
                    lastName: "McCanny",
                    email: "amccanny16@ifeng.com",
                    createdAt: "2018-08-17 11:57:29",
                    updatedAt: "2018-08-17 11:57:29"
                },
                {
                    firstName: "Thom",
                    lastName: "Ronchka",
                    email: "tronchka17@last.fm",
                    createdAt: "2018-09-28 01:55:43",
                    updatedAt: "2018-09-28 01:55:43"
                },
                {
                    firstName: "Melina",
                    lastName: "Cleugher",
                    email: "mcleugher18@cargocollective.com",
                    createdAt: "2018-12-13 22:27:52",
                    updatedAt: "2018-12-13 22:27:52"
                },
                {
                    firstName: "Cynthie",
                    lastName: "Spoure",
                    email: "cspoure19@dmoz.org",
                    createdAt: "2018-12-25 19:45:00",
                    updatedAt: "2018-12-25 19:45:00"
                },
                {
                    firstName: "Alane",
                    lastName: "Minillo",
                    email: "aminillo1a@kickstarter.com",
                    createdAt: "2019-03-22 20:32:20",
                    updatedAt: "2019-03-22 20:32:20"
                },
                {
                    firstName: "Flem",
                    lastName: "Siman",
                    email: "fsiman1b@typepad.com",
                    createdAt: "2019-02-03 16:14:18",
                    updatedAt: "2019-02-03 16:14:18"
                },
                {
                    firstName: "Ashlan",
                    lastName: "Sharma",
                    email: "asharma1c@people.com.cn",
                    createdAt: "2019-04-09 04:36:06",
                    updatedAt: "2019-04-09 04:36:06"
                },
                {
                    firstName: "Alta",
                    lastName: "Stoeckle",
                    email: "astoeckle1d@tripod.com",
                    createdAt: "2018-10-10 02:53:17",
                    updatedAt: "2018-10-10 02:53:17"
                },
                {
                    firstName: "Silvio",
                    lastName: "Crucitti",
                    email: "scrucitti1e@usgs.gov",
                    createdAt: "2019-03-16 15:13:25",
                    updatedAt: "2019-03-16 15:13:25"
                },
                {
                    firstName: "Brinna",
                    lastName: "Minghetti",
                    email: "bminghetti1f@rakuten.co.jp",
                    createdAt: "2018-12-11 04:12:45",
                    updatedAt: "2018-12-11 04:12:45"
                },
                {
                    firstName: "Marylee",
                    lastName: "Hayworth",
                    email: "mhayworth1g@foxnews.com",
                    createdAt: "2018-12-03 18:27:57",
                    updatedAt: "2018-12-03 18:27:57"
                },
                {
                    firstName: "Bink",
                    lastName: "Havesides",
                    email: "bhavesides1h@ifeng.com",
                    createdAt: "2018-05-25 14:47:25",
                    updatedAt: "2018-05-25 14:47:25"
                },
                {
                    firstName: "Friedrick",
                    lastName: "Kilgour",
                    email: "fkilgour1i@engadget.com",
                    createdAt: "2019-02-05 19:24:03",
                    updatedAt: "2019-02-05 19:24:03"
                },
                {
                    firstName: "Rycca",
                    lastName: "Lambol",
                    email: "rlambol1j@cdbaby.com",
                    createdAt: "2019-04-03 13:10:30",
                    updatedAt: "2019-04-03 13:10:30"
                },
                {
                    firstName: "Mallory",
                    lastName: "Laird-Craig",
                    email: "mlairdcraig1k@github.io",
                    createdAt: "2019-03-12 23:47:27",
                    updatedAt: "2019-03-12 23:47:27"
                },
                {
                    firstName: "Smitty",
                    lastName: "West",
                    email: "swest1l@sogou.com",
                    createdAt: "2018-10-28 21:06:48",
                    updatedAt: "2018-10-28 21:06:48"
                },
                {
                    firstName: "Danyette",
                    lastName: "Duffitt",
                    email: "dduffitt1m@163.com",
                    createdAt: "2018-10-24 14:45:23",
                    updatedAt: "2018-10-24 14:45:23"
                },
                {
                    firstName: "Hamnet",
                    lastName: "Shawell",
                    email: "hshawell1n@photobucket.com",
                    createdAt: "2019-03-06 22:19:22",
                    updatedAt: "2019-03-06 22:19:22"
                },
                {
                    firstName: "Demetrius",
                    lastName: "Semple",
                    email: "dsemple1o@hao123.com",
                    createdAt: "2019-03-31 03:56:29",
                    updatedAt: "2019-03-31 03:56:29"
                },
                {
                    firstName: "Chandra",
                    lastName: "Batrick",
                    email: "cbatrick1p@hao123.com",
                    createdAt: "2018-06-30 07:19:01",
                    updatedAt: "2018-06-30 07:19:01"
                },
                {
                    firstName: "Randall",
                    lastName: "Po",
                    email: "rpo1q@cnet.com",
                    createdAt: "2019-03-30 21:03:42",
                    updatedAt: "2019-03-30 21:03:42"
                },
                {
                    firstName: "Judi",
                    lastName: "Myhill",
                    email: "jmyhill1r@theatlantic.com",
                    createdAt: "2018-05-22 03:09:56",
                    updatedAt: "2018-05-22 03:09:56"
                },
                {
                    firstName: "Ulrich",
                    lastName: "Birbeck",
                    email: "ubirbeck1s@ycombinator.com",
                    createdAt: "2018-12-06 09:31:03",
                    updatedAt: "2018-12-06 09:31:03"
                },
                {
                    firstName: "Karlotte",
                    lastName: "Swynley",
                    email: "kswynley1t@bloglovin.com",
                    createdAt: "2018-06-07 17:10:48",
                    updatedAt: "2018-06-07 17:10:48"
                },
                {
                    firstName: "Grete",
                    lastName: "Enrich",
                    email: "genrich1u@netscape.com",
                    createdAt: "2019-02-08 06:42:00",
                    updatedAt: "2019-02-08 06:42:00"
                },
                {
                    firstName: "Sutherland",
                    lastName: "Chevers",
                    email: "schevers1v@woothemes.com",
                    createdAt: "2018-10-27 05:26:49",
                    updatedAt: "2018-10-27 05:26:49"
                },
                {
                    firstName: "Heinrick",
                    lastName: "Daltrey",
                    email: "hdaltrey1w@chronoengine.com",
                    createdAt: "2018-12-08 18:54:26",
                    updatedAt: "2018-12-08 18:54:26"
                },
                {
                    firstName: "Isacco",
                    lastName: "Kruszelnicki",
                    email: "ikruszelnicki1x@forbes.com",
                    createdAt: "2018-08-18 16:31:12",
                    updatedAt: "2018-08-18 16:31:12"
                },
                {
                    firstName: "Joelle",
                    lastName: "Spores",
                    email: "jspores1y@topsy.com",
                    createdAt: "2019-03-28 18:26:38",
                    updatedAt: "2019-03-28 18:26:38"
                },
                {
                    firstName: "Audy",
                    lastName: "Renzini",
                    email: "arenzini1z@toplist.cz",
                    createdAt: "2018-12-28 06:43:50",
                    updatedAt: "2018-12-28 06:43:50"
                },
                {
                    firstName: "Portie",
                    lastName: "Siman",
                    email: "psiman20@slate.com",
                    createdAt: "2018-12-31 16:57:29",
                    updatedAt: "2018-12-31 16:57:29"
                },
                {
                    firstName: "Hercules",
                    lastName: "Matchett",
                    email: "hmatchett21@github.io",
                    createdAt: "2018-05-14 02:52:39",
                    updatedAt: "2018-05-14 02:52:39"
                },
                {
                    firstName: "Candida",
                    lastName: "O'Skehan",
                    email: "coskehan22@latimes.com",
                    createdAt: "2019-02-19 08:48:43",
                    updatedAt: "2019-02-19 08:48:43"
                },
                {
                    firstName: "Marissa",
                    lastName: "Seymark",
                    email: "mseymark23@webs.com",
                    createdAt: "2018-12-18 07:42:05",
                    updatedAt: "2018-12-18 07:42:05"
                },
                {
                    firstName: "Vida",
                    lastName: "Anthona",
                    email: "vanthona24@nhs.uk",
                    createdAt: "2018-11-01 19:45:46",
                    updatedAt: "2018-11-01 19:45:46"
                },
                {
                    firstName: "Zsa zsa",
                    lastName: "Frascone",
                    email: "zfrascone25@newsvine.com",
                    createdAt: "2019-04-07 02:36:15",
                    updatedAt: "2019-04-07 02:36:15"
                },
                {
                    firstName: "Stevie",
                    lastName: "Roggers",
                    email: "sroggers26@wp.com",
                    createdAt: "2018-09-06 03:48:26",
                    updatedAt: "2018-09-06 03:48:26"
                },
                {
                    firstName: "Andriana",
                    lastName: "Hambridge",
                    email: "ahambridge27@people.com.cn",
                    createdAt: "2018-08-17 23:44:20",
                    updatedAt: "2018-08-17 23:44:20"
                },
                {
                    firstName: "Emilio",
                    lastName: "Langley",
                    email: "elangley28@baidu.com",
                    createdAt: "2019-02-09 08:55:29",
                    updatedAt: "2019-02-09 08:55:29"
                },
                {
                    firstName: "Tristam",
                    lastName: "Vannuccini",
                    email: "tvannuccini29@webs.com",
                    createdAt: "2019-04-05 14:47:11",
                    updatedAt: "2019-04-05 14:47:11"
                },
                {
                    firstName: "Pascal",
                    lastName: "Tallis",
                    email: "ptallis2a@domainmarket.com",
                    createdAt: "2019-03-09 06:58:20",
                    updatedAt: "2019-03-09 06:58:20"
                },
                {
                    firstName: "Freddie",
                    lastName: "Raffin",
                    email: "fraffin2b@nymag.com",
                    createdAt: "2018-11-25 06:16:10",
                    updatedAt: "2018-11-25 06:16:10"
                },
                {
                    firstName: "Bianca",
                    lastName: "Ortes",
                    email: "bortes2c@cbc.ca",
                    createdAt: "2018-04-27 02:19:28",
                    updatedAt: "2018-04-27 02:19:28"
                },
                {
                    firstName: "Rhody",
                    lastName: "Kyne",
                    email: "rkyne2d@statcounter.com",
                    createdAt: "2018-09-01 07:35:17",
                    updatedAt: "2018-09-01 07:35:17"
                },
                {
                    firstName: "Kalila",
                    lastName: "Kinchley",
                    email: "kkinchley2e@hhs.gov",
                    createdAt: "2019-01-26 21:47:25",
                    updatedAt: "2019-01-26 21:47:25"
                },
                {
                    firstName: "Sayre",
                    lastName: "Roocroft",
                    email: "sroocroft2f@redcross.org",
                    createdAt: "2018-12-02 12:19:23",
                    updatedAt: "2018-12-02 12:19:23"
                },
                {
                    firstName: "Tatiana",
                    lastName: "Tokley",
                    email: "ttokley2g@answers.com",
                    createdAt: "2018-07-27 12:53:09",
                    updatedAt: "2018-07-27 12:53:09"
                },
                {
                    firstName: "Desiri",
                    lastName: "Maypother",
                    email: "dmaypother2h@earthlink.net",
                    createdAt: "2019-01-16 06:34:12",
                    updatedAt: "2019-01-16 06:34:12"
                },
                {
                    firstName: "Barbra",
                    lastName: "Jeffcoat",
                    email: "bjeffcoat2i@multiply.com",
                    createdAt: "2018-10-04 07:02:25",
                    updatedAt: "2018-10-04 07:02:25"
                },
                {
                    firstName: "Gerri",
                    lastName: "Newiss",
                    email: "gnewiss2j@ehow.com",
                    createdAt: "2019-04-14 23:38:58",
                    updatedAt: "2019-04-14 23:38:58"
                },
                {
                    firstName: "Powell",
                    lastName: "Delgado",
                    email: "pdelgado2k@bandcamp.com",
                    createdAt: "2019-02-12 07:18:19",
                    updatedAt: "2019-02-12 07:18:19"
                },
                {
                    firstName: "Coreen",
                    lastName: "Hordell",
                    email: "chordell2l@guardian.co.uk",
                    createdAt: "2018-09-17 03:17:35",
                    updatedAt: "2018-09-17 03:17:35"
                },
                {
                    firstName: "Karel",
                    lastName: "Edworthye",
                    email: "kedworthye2m@archive.org",
                    createdAt: "2018-09-14 20:25:09",
                    updatedAt: "2018-09-14 20:25:09"
                },
                {
                    firstName: "Adriana",
                    lastName: "Swallwell",
                    email: "aswallwell2n@hao123.com",
                    createdAt: "2018-09-13 05:17:09",
                    updatedAt: "2018-09-13 05:17:09"
                },
                {
                    firstName: "Thornie",
                    lastName: "Jozwiak",
                    email: "tjozwiak2o@e-recht24.de",
                    createdAt: "2018-06-09 02:54:33",
                    updatedAt: "2018-06-09 02:54:33"
                },
                {
                    firstName: "Waylan",
                    lastName: "Fairman",
                    email: "wfairman2p@stanford.edu",
                    createdAt: "2019-02-19 15:58:01",
                    updatedAt: "2019-02-19 15:58:01"
                },
                {
                    firstName: "Paton",
                    lastName: "Thorington",
                    email: "pthorington2q@wufoo.com",
                    createdAt: "2018-12-30 21:53:58",
                    updatedAt: "2018-12-30 21:53:58"
                },
                {
                    firstName: "Abramo",
                    lastName: "Steuart",
                    email: "asteuart2r@newyorker.com",
                    createdAt: "2018-08-27 18:22:29",
                    updatedAt: "2018-08-27 18:22:29"
                }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("users", null, {});
    }
};
