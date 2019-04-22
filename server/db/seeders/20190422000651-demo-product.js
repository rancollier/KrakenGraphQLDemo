"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "products",
            [
                {
                    title: "Pannier",
                    description:
                        "Toxic effect of chloroform, undetermined, initial encounter",
                    version: "5.4",
                    cost: 15.21,
                    eqpStatus: "Teal",
                    userId: 3
                },
                {
                    title: "Cardguard",
                    description:
                        "Oth nondisp fx of lower end of r humerus, init for opn fx",
                    version: "9.8.4",
                    cost: 52.21,
                    eqpStatus: "Turquoise",
                    userId: 2
                },
                {
                    title: "Keylex",
                    description:
                        "Toxic effect of venom of reptiles, accidental, subs",
                    version: "0.7.1",
                    cost: 77.98,
                    eqpStatus: "Turquoise",
                    userId: 1
                },
                {
                    title: "Tres-Zap",
                    description:
                        "Intentional self-harm by other specified means, subs encntr",
                    version: "3.9.6",
                    cost: 13.52,
                    eqpStatus: "Teal",
                    userId: 3
                },
                {
                    title: "Tin",
                    description:
                        "Nondisplaced fracture of left tibial tuberosity, sequela",
                    version: "3.5",
                    cost: 17.42,
                    eqpStatus: "Pink",
                    userId: 3
                },
                {
                    title: "Voyatouch",
                    description: "Nondisp fx of acromial pro, unsp shldr, 7thP",
                    version: "7.07",
                    cost: 99.45,
                    eqpStatus: "Indigo",
                    userId: 3
                },
                {
                    title: "Holdlamis",
                    description: "Contusion of bronchus, bilateral",
                    version: "9.1",
                    cost: 48.93,
                    eqpStatus: "Green",
                    userId: 2
                },
                {
                    title: "Cookley",
                    description:
                        "Nondisp fx of body of left calcaneus, init for opn fx",
                    version: "9.1",
                    cost: 56.02,
                    eqpStatus: "Green",
                    userId: 3
                },
                {
                    title: "Subin",
                    description: "Kidney transplant infection",
                    version: "0.8.1",
                    cost: 57.76,
                    eqpStatus: "Orange",
                    userId: 2
                },
                {
                    title: "Subin",
                    description:
                        "Type 1 diab with prolif diab rtnop with trctn dtch n-mcla",
                    version: "0.22",
                    cost: 30.6,
                    eqpStatus: "Green",
                    userId: 3
                },
                {
                    title: "Keylex",
                    description: "Poisoning by amphetamines, assault",
                    version: "7.46",
                    cost: 83.37,
                    eqpStatus: "Aquamarine",
                    userId: 3
                },
                {
                    title: "Bitwolf",
                    description: "Fall into swimming pool",
                    version: "0.48",
                    cost: 93.06,
                    eqpStatus: "Pink",
                    userId: 2
                },
                {
                    title: "Lotstring",
                    description:
                        "Malignant neoplasm of overlapping sites of eye and adnexa",
                    version: "3.5",
                    cost: 65.21,
                    eqpStatus: "Turquoise",
                    userId: 1
                },
                {
                    title: "Lotstring",
                    description: "Unspecified injury of thoracic trachea",
                    version: "0.71",
                    cost: 67.07,
                    eqpStatus: "Turquoise",
                    userId: 1
                },
                {
                    title: "Aerified",
                    description:
                        "Nondisp commnt fx shaft of rad, unsp arm, 7thH",
                    version: "0.28",
                    cost: 89.87,
                    eqpStatus: "Violet",
                    userId: 2
                },
                {
                    title: "Trippledex",
                    description: "Tear of meniscus, current injury",
                    version: "0.26",
                    cost: 37.49,
                    eqpStatus: "Blue",
                    userId: 2
                },
                {
                    title: "Alphazap",
                    description: "Fistula, unspecified ankle",
                    version: "0.1.8",
                    cost: 48.52,
                    eqpStatus: "Indigo",
                    userId: 2
                },
                {
                    title: "Overhold",
                    description:
                        "Unspecified subluxation and dislocation of hip",
                    version: "0.55",
                    cost: 65.06,
                    eqpStatus: "Blue",
                    userId: 2
                },
                {
                    title: "Bitwolf",
                    description: "Panophthalmitis (acute), bilateral",
                    version: "0.96",
                    cost: 25.94,
                    eqpStatus: "Indigo",
                    userId: 1
                },
                {
                    title: "Home Ing",
                    description:
                        "Lead-induced chronic gout, right shoulder, with tophus",
                    version: "0.4.3",
                    cost: 89.04,
                    eqpStatus: "Indigo",
                    userId: 3
                },
                {
                    title: "Solarbreeze",
                    description:
                        "Subluxation of left acromioclavicular joint, sequela",
                    version: "1.9",
                    cost: 58.3,
                    eqpStatus: "Aquamarine",
                    userId: 2
                },
                {
                    title: "Opela",
                    description:
                        "Toxic effect of contact w sea anemone, self-harm, sequela",
                    version: "3.9.1",
                    cost: 67.94,
                    eqpStatus: "Goldenrod",
                    userId: 2
                },
                {
                    title: "Span",
                    description: "Other specified mosquito-borne viral fevers",
                    version: "9.2",
                    cost: 83.68,
                    eqpStatus: "Violet",
                    userId: 3
                },
                {
                    title: "Fix San",
                    description:
                        "Epidur hemor w LOC w death d/t brain injury bf consc, subs",
                    version: "0.9.8",
                    cost: 77.58,
                    eqpStatus: "Goldenrod",
                    userId: 2
                },
                {
                    title: "Asoka",
                    description:
                        "Salter-Harris Type I physeal fracture of r calcaneus, 7thG",
                    version: "8.9.2",
                    cost: 23.2,
                    eqpStatus: "Khaki",
                    userId: 2
                },
                {
                    title: "Konklab",
                    description:
                        "Nondisp avuls fx tuberosity of unsp calcaneus, 7thD",
                    version: "0.2.7",
                    cost: 29.97,
                    eqpStatus: "Green",
                    userId: 3
                },
                {
                    title: "Home Ing",
                    description:
                        "Strain musc/tend ant grp at low leg level, right leg, sqla",
                    version: "0.9.1",
                    cost: 74.4,
                    eqpStatus: "Mauv",
                    userId: 1
                },
                {
                    title: "Konklux",
                    description:
                        "Disp fx of lateral condyle of unsp femr, 7thC",
                    version: "3.1",
                    cost: 57.23,
                    eqpStatus: "Red",
                    userId: 3
                },
                {
                    title: "Wrapsafe",
                    description:
                        "Displaced fracture of pisiform, unspecified wrist",
                    version: "1.8.5",
                    cost: 40.57,
                    eqpStatus: "Fuscia",
                    userId: 1
                },
                {
                    title: "Zontrax",
                    description: "Foreign body in uterus, subsequent encounter",
                    version: "4.4",
                    cost: 87.13,
                    eqpStatus: "Purple",
                    userId: 1
                },
                {
                    title: "Ronstring",
                    description:
                        "Obturator subluxation of right hip, subsequent encounter",
                    version: "0.54",
                    cost: 4.76,
                    eqpStatus: "Violet",
                    userId: 3
                },
                {
                    title: "Zontrax",
                    description:
                        "Major contusion of left kidney, subsequent encounter",
                    version: "1.3.6",
                    cost: 76.94,
                    eqpStatus: "Indigo",
                    userId: 1
                },
                {
                    title: "Bitchip",
                    description:
                        "Strain of intrinsic musc/fasc/tend right thumb at wrs/hnd lv",
                    version: "1.8.1",
                    cost: 65.14,
                    eqpStatus: "Indigo",
                    userId: 1
                },
                {
                    title: "Lotlux",
                    description: "Blister (nonthermal), right thigh, sequela",
                    version: "0.97",
                    cost: 35.21,
                    eqpStatus: "Aquamarine",
                    userId: 3
                },
                {
                    title: "Treeflex",
                    description:
                        "Type 1 diabetes with stable prolif diabetic rtnop, bilateral",
                    version: "0.22",
                    cost: 75.23,
                    eqpStatus: "Teal",
                    userId: 2
                },
                {
                    title: "Regrant",
                    description:
                        "Pnctr w/o foreign body of unsp cheek and TMJ area, sequela",
                    version: "7.1.7",
                    cost: 36.41,
                    eqpStatus: "Goldenrod",
                    userId: 3
                },
                {
                    title: "Alphazap",
                    description:
                        "Rheumatoid polyneurop w rheumatoid arthritis of unsp hand",
                    version: "4.7.9",
                    cost: 83.76,
                    eqpStatus: "Blue",
                    userId: 3
                },
                {
                    title: "Voyatouch",
                    description:
                        "Strain of musc/tend the rotator cuff of left shoulder, init",
                    version: "0.68",
                    cost: 12.22,
                    eqpStatus: "Aquamarine",
                    userId: 3
                },
                {
                    title: "Mat Lam Tam",
                    description:
                        "Jump/div from boat striking water surface causing drown",
                    version: "2.6.4",
                    cost: 28.69,
                    eqpStatus: "Red",
                    userId: 1
                },
                {
                    title: "Vagram",
                    description:
                        "Complete lesion at unsp level of cervical spinal cord, init",
                    version: "0.7.6",
                    cost: 84.94,
                    eqpStatus: "Mauv",
                    userId: 1
                },
                {
                    title: "It",
                    description: "Age-related cataract",
                    version: "0.9.0",
                    cost: 32.2,
                    eqpStatus: "Indigo",
                    userId: 3
                },
                {
                    title: "Voyatouch",
                    description:
                        "Legal intervnt w unsp blunt objects, bystand inj, sequela",
                    version: "8.05",
                    cost: 94.42,
                    eqpStatus: "Blue",
                    userId: 3
                },
                {
                    title: "Pannier",
                    description:
                        "Disp fx of body of left talus, subs for fx w delay heal",
                    version: "8.9.6",
                    cost: 93.55,
                    eqpStatus: "Teal",
                    userId: 1
                },
                {
                    title: "Duobam",
                    description:
                        "Nondisp fx of med phalanx of l mid fngr, 7thD",
                    version: "7.6",
                    cost: 60.75,
                    eqpStatus: "Violet",
                    userId: 3
                },
                {
                    title: "Lotstring",
                    description: "Anonychia",
                    version: "0.50",
                    cost: 39.04,
                    eqpStatus: "Purple",
                    userId: 1
                },
                {
                    title: "Opela",
                    description:
                        "Toxic effect of mycotoxin food contamnt, accidental, subs",
                    version: "5.9",
                    cost: 41.37,
                    eqpStatus: "Violet",
                    userId: 3
                },
                {
                    title: "Cardify",
                    description: "Displ transverse fx shaft of l ulna, 7thM",
                    version: "7.4.0",
                    cost: 86.43,
                    eqpStatus: "Khaki",
                    userId: 1
                },
                {
                    title: "Quo Lux",
                    description:
                        "Fracture oth prt scapula, right shoulder, init for opn fx",
                    version: "0.36",
                    cost: 32.68,
                    eqpStatus: "Turquoise",
                    userId: 1
                },
                {
                    title: "Domainer",
                    description:
                        "Adverse effect of unsp antipsychotics and neuroleptics, subs",
                    version: "9.9.7",
                    cost: 46.25,
                    eqpStatus: "Mauv",
                    userId: 3
                },
                {
                    title: "Namfix",
                    description:
                        "Lacerat extensor musc/fasc/tend right thumb at wrs/hnd lv",
                    version: "1.88",
                    cost: 73.53,
                    eqpStatus: "Khaki",
                    userId: 2
                },
                {
                    title: "Flowdesk",
                    description:
                        "Paralytic calcifcn and ossification of muscle, r low leg",
                    version: "2.6.5",
                    cost: 10.07,
                    eqpStatus: "Pink",
                    userId: 3
                },
                {
                    title: "Bitchip",
                    description:
                        "Corrosion of second degree of left wrist, sequela",
                    version: "5.7",
                    cost: 64.82,
                    eqpStatus: "Goldenrod",
                    userId: 2
                },
                {
                    title: "Tampflex",
                    description:
                        "Toxic effect of lacrimogenic gas, self-harm, subs",
                    version: "0.76",
                    cost: 40.22,
                    eqpStatus: "Crimson",
                    userId: 2
                },
                {
                    title: "Alphazap",
                    description:
                        "Sltr-haris Type III physl fx lower end humer, unsp arm, 7thP",
                    version: "7.9.1",
                    cost: 11.29,
                    eqpStatus: "Red",
                    userId: 3
                },
                {
                    title: "Y-find",
                    description:
                        "Displaced fracture of first metatarsal bone, left foot",
                    version: "3.80",
                    cost: 56.68,
                    eqpStatus: "Turquoise",
                    userId: 1
                },
                {
                    title: "Biodex",
                    description:
                        "Occupant of pk-up/van injured in collision w rail trn/veh",
                    version: "6.7",
                    cost: 75.78,
                    eqpStatus: "Blue",
                    userId: 3
                },
                {
                    title: "Mat Lam Tam",
                    description:
                        "Bucket-hndl tear of medial mensc, crnt injury, r knee, sqla",
                    version: "2.4",
                    cost: 92.46,
                    eqpStatus: "Aquamarine",
                    userId: 3
                },
                {
                    title: "Quo Lux",
                    description:
                        "Burn of unspecified degree of unspecified wrist, init encntr",
                    version: "0.23",
                    cost: 3.87,
                    eqpStatus: "Goldenrod",
                    userId: 1
                },
                {
                    title: "Vagram",
                    description:
                        "Oth disp fx of lower end of right humerus, init for opn fx",
                    version: "0.9.6",
                    cost: 40.21,
                    eqpStatus: "Mauv",
                    userId: 3
                },
                {
                    title: "Matsoft",
                    description:
                        "Pnctr w/o fb of low back & pelv w/o penet retroperiton, init",
                    version: "7.32",
                    cost: 10.43,
                    eqpStatus: "Blue",
                    userId: 3
                },
                {
                    title: "Pannier",
                    description:
                        "Lacerat unsp blood vess at hip and thi lev, left leg, sqla",
                    version: "0.81",
                    cost: 18.16,
                    eqpStatus: "Indigo",
                    userId: 2
                },
                {
                    title: "Redhold",
                    description:
                        "Sprain of interphalangeal joint of right ring finger",
                    version: "6.5",
                    cost: 36.89,
                    eqpStatus: "Goldenrod",
                    userId: 3
                },
                {
                    title: "Fix San",
                    description:
                        "Pathological fracture in other disease, right ankle",
                    version: "7.3.5",
                    cost: 21.91,
                    eqpStatus: "Maroon",
                    userId: 1
                },
                {
                    title: "Solarbreeze",
                    description:
                        "Mech compl of intraocular lens, subsequent encounter",
                    version: "0.13",
                    cost: 64.27,
                    eqpStatus: "Khaki",
                    userId: 1
                },
                {
                    title: "Voltsillam",
                    description: "Exposure to other prolonged low air pressure",
                    version: "7.0",
                    cost: 88.14,
                    eqpStatus: "Purple",
                    userId: 3
                },
                {
                    title: "Stronghold",
                    description:
                        "Blister (nonthermal) of unspecified thumb, sequela",
                    version: "0.6.1",
                    cost: 34.57,
                    eqpStatus: "Aquamarine",
                    userId: 2
                },
                {
                    title: "Konklux",
                    description: "Hesitancy of micturition",
                    version: "8.6.0",
                    cost: 54.99,
                    eqpStatus: "Indigo",
                    userId: 2
                },
                {
                    title: "Tempsoft",
                    description:
                        "Ant cord syndrome at unsp level of cerv spinal cord, init",
                    version: "4.90",
                    cost: 64.88,
                    eqpStatus: "Maroon",
                    userId: 3
                },
                {
                    title: "Tresom",
                    description:
                        "Contusion of right eyelid and periocular area",
                    version: "7.0",
                    cost: 51.25,
                    eqpStatus: "Orange",
                    userId: 2
                },
                {
                    title: "Mat Lam Tam",
                    description:
                        "Complete traumatic amp at knee level, unsp lower leg, init",
                    version: "2.10",
                    cost: 12.49,
                    eqpStatus: "Aquamarine",
                    userId: 2
                },
                {
                    title: "Bamity",
                    description: "Puncture wound with foreign body, right hip",
                    version: "0.87",
                    cost: 40.81,
                    eqpStatus: "Red",
                    userId: 1
                },
                {
                    title: "Overhold",
                    description: "Unsp trochan fx r femr, 7thF",
                    version: "4.44",
                    cost: 52.47,
                    eqpStatus: "Pink",
                    userId: 1
                },
                {
                    title: "Daltfresh",
                    description:
                        "Non-ABO incompat w acute hemolytic transfs react, sequela",
                    version: "3.0",
                    cost: 42.1,
                    eqpStatus: "Goldenrod",
                    userId: 2
                },
                {
                    title: "Zoolab",
                    description:
                        "Mantle cell lymphoma, lymph nodes of multiple sites",
                    version: "6.2",
                    cost: 10.53,
                    eqpStatus: "Orange",
                    userId: 3
                },
                {
                    title: "Flowdesk",
                    description:
                        "Infect/inflm reaction due to oth int orth prosth dev/grft",
                    version: "6.7",
                    cost: 45.1,
                    eqpStatus: "Violet",
                    userId: 1
                },
                {
                    title: "Mat Lam Tam",
                    description:
                        "Glaucomatous flecks (subcapsular), unspecified eye",
                    version: "1.7.7",
                    cost: 4.33,
                    eqpStatus: "Mauv",
                    userId: 3
                },
                {
                    title: "Bytecard",
                    description:
                        "Corrosion of second degree of unsp shoulder, init encntr",
                    version: "2.1",
                    cost: 7.15,
                    eqpStatus: "Pink",
                    userId: 1
                },
                {
                    title: "Ventosanzap",
                    description: "Twin pregnancy, monochorionic/diamniotic",
                    version: "5.5.3",
                    cost: 13.68,
                    eqpStatus: "Purple",
                    userId: 1
                },
                {
                    title: "Fixflex",
                    description: "Algoneurodystrophy, unspecified hand",
                    version: "2.5",
                    cost: 70.65,
                    eqpStatus: "Blue",
                    userId: 3
                },
                {
                    title: "Namfix",
                    description:
                        "Poisoning by oth estrogens and progstrn, undet, sequela",
                    version: "0.98",
                    cost: 95.69,
                    eqpStatus: "Puce",
                    userId: 2
                },
                {
                    title: "Prodder",
                    description: "Loose body in knee",
                    version: "1.57",
                    cost: 66.05,
                    eqpStatus: "Teal",
                    userId: 3
                },
                {
                    title: "Ronstring",
                    description: "Displ commnt fx shaft of rad, r arm, 7thN",
                    version: "3.1.4",
                    cost: 51.21,
                    eqpStatus: "Maroon",
                    userId: 1
                },
                {
                    title: "Holdlamis",
                    description: "Other specified diseases of anus and rectum",
                    version: "0.5.2",
                    cost: 37.82,
                    eqpStatus: "Goldenrod",
                    userId: 3
                },
                {
                    title: "Ronstring",
                    description:
                        "Benign carcinoid tumor of the descending colon",
                    version: "0.17",
                    cost: 19.9,
                    eqpStatus: "Crimson",
                    userId: 2
                },
                {
                    title: "Zoolab",
                    description: "Malignant neoplasm of unspecified epididymis",
                    version: "0.1.8",
                    cost: 66.8,
                    eqpStatus: "Turquoise",
                    userId: 3
                },
                {
                    title: "Kanlam",
                    description:
                        "Nondisp fx of dist pole of navic bone of l wrs, 7thB",
                    version: "5.9.6",
                    cost: 97.15,
                    eqpStatus: "Puce",
                    userId: 2
                },
                {
                    title: "Duobam",
                    description:
                        "Other noninflammatory disorders of uterus, except cervix",
                    version: "9.6",
                    cost: 81.42,
                    eqpStatus: "Aquamarine",
                    userId: 3
                },
                {
                    title: "Zaam-Dox",
                    description:
                        "Superficial injury of wrist, hand and fingers",
                    version: "7.03",
                    cost: 43.45,
                    eqpStatus: "Orange",
                    userId: 3
                },
                {
                    title: "Pannier",
                    description:
                        "Lacerat extn musc/fasc/tend at forarm lv, right arm, subs",
                    version: "6.7",
                    cost: 5.37,
                    eqpStatus: "Red",
                    userId: 2
                },
                {
                    title: "Lotlux",
                    description:
                        "Ant cord syndrome at unsp level of cerv spinal cord, init",
                    version: "0.68",
                    cost: 90.68,
                    eqpStatus: "Fuscia",
                    userId: 3
                },
                {
                    title: "Vagram",
                    description: "Excessive weight gain in pregnancy",
                    version: "2.69",
                    cost: 79.37,
                    eqpStatus: "Purple",
                    userId: 2
                },
                {
                    title: "Alphazap",
                    description:
                        "Oth tear of lat mensc, current injury, unsp knee, init",
                    version: "5.7",
                    cost: 97.1,
                    eqpStatus: "Violet",
                    userId: 3
                },
                {
                    title: "Holdlamis",
                    description: "Familial chondrocalcinosis, left shoulder",
                    version: "0.8.6",
                    cost: 29.64,
                    eqpStatus: "Yellow",
                    userId: 3
                },
                {
                    title: "Redhold",
                    description:
                        "Strain of unspecified muscle and tendon at lower leg level",
                    version: "7.6",
                    cost: 49.33,
                    eqpStatus: "Fuscia",
                    userId: 2
                },
                {
                    title: "Cardify",
                    description:
                        "Drown due to unpowr wtrcrft overturning, init",
                    version: "0.7.1",
                    cost: 65.53,
                    eqpStatus: "Red",
                    userId: 2
                },
                {
                    title: "Matsoft",
                    description: "Corrosion of second degree of upper back",
                    version: "7.92",
                    cost: 13.71,
                    eqpStatus: "Maroon",
                    userId: 2
                },
                {
                    title: "Transcof",
                    description:
                        "Poisoning by unsp psychotropic drug, accidental, sequela",
                    version: "2.4",
                    cost: 56.51,
                    eqpStatus: "Goldenrod",
                    userId: 2
                },
                {
                    title: "Biodex",
                    description:
                        "Strain of intrns musc/fasc/tend r mid finger at wrs/hnd lv",
                    version: "0.3.3",
                    cost: 4.69,
                    eqpStatus: "Yellow",
                    userId: 1
                },
                {
                    title: "Subin",
                    description:
                        "Burn of second degree of unspecified ankle, init encntr",
                    version: "0.5.5",
                    cost: 80.54,
                    eqpStatus: "Maroon",
                    userId: 2
                },
                {
                    title: "Hatity",
                    description:
                        "Explosion and rupture of air tank, initial encounter",
                    version: "5.9.8",
                    cost: 34.78,
                    eqpStatus: "Turquoise",
                    userId: 1
                }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Products", null, {});
    }
};
