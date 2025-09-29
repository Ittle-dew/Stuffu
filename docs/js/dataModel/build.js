const CLASS_LIST = {
    "fr": [ 
        "Feca", "Osamodas", "Enutrof", "Sram", 
        "Xelor", "Ecaflip", "Eniripsa", "Iop", 
        "Cra", "Sadida", "Sacrieur", "Pandawa", 
        "Roublard", "Zobal", "Ouginak", "Steamer",
        "Eliotrope", "Huppermage"
    ], 
    "en": [ 
        "Feca", "Osamodas", "Enutrof", "Sram", 
        "Xelor", "Ecaflip", "Eniripsa", "Iop", 
        "Cra", "Sadida", "Sacrier", "Pandawa", 
        "Rogue", "Masqueraider", "Ouginak", "Foggernaut",
        "Eliotrope", "Huppermage"
    ],
};

const BUILD_DATA = {
  
    
      
        
            "Huppermage DPT [MELEE] 245 Opti": {
                "image": "assets/builds/Huppermage DPT.png",
                "url": "https://zenithwakfu.com/builder/pwssw",
                "keywords": ["Opti"],
                "class": "Huppermage",
                "description": "Gameplay Principalement mélée - Terre",
                "tranche": 245
                }
            ,
            "Ecaflip SUPPORT [PUCIF] 245 Opti": {
                "image": "assets/builds/Ecaflip SUPPORT.png",
                "url": "https://zenithwakfu.com/builder/1tk28",
                "keywords": ["Opti"],
                "class": "Ecaflip",
                "description": "Gameplay basé autours de PUCIF de l'ecaflip !",
                "tranche": 245
            }
            ,
            "Enutrof SUPPORT [ABANDON] 245 Opti": {
                "image": "assets/builds/Enutrof SUPPORT.png",
                "url": "https://zenithwakfu.com/builder/ctzuw",
                "keywords": ["Opti"],
                "class": "Enutrof",
                "description": "Gameplay basé autours du retrait résistance et retrait PM",
                "tranche": 245
            }
            ,
            "Cra DPT [TRI-ELEMENT] 245 Opti": {
                "image": "assets/builds/Cra DPT.png",
                "url": "https://zenithwakfu.com/builder/nhv8j",
                "keywords": ["Opti"],
                "class": "Cra",
                "description": "Gameplay TRI-ELEMENT autours de Elementalisme !",
                "tranche": 245
            }
            ,
            "Xelor DPT [EAU FEU] 245 Opti": {
                "image": "assets/builds/Xelor DPT [Eau Feu].png",
                "url": "https://zenithwakfu.com/builder/onndc",
                "keywords": ["Opti"],
                "class": "Xelor",
                "description": "Build Classique Xelor DPT",
                "tranche": 245
            }
        ,
            "Osamodas SUPPORT [ARMURE] 245 Opti": {
            "image": "assets/builds/Osamodas SUPPORT [Shield].png",
            "url": "https://zenithwakfu.com/builder/y9ayo",
            "keywords": ["Opti"],
            "class": "Osamodas",
            "description": "Gameplay base autours du shield grâce au item %armure donnée de la tranche !",
            "tranche": 245
            }
        ,
            "Iop DPT [FEU TERRE] 245 Opti": {
            "image": "assets/builds/Iop DPT[Feu Terre].png",
            "url": "https://zenithwakfu.com/builder/76cko",
            "keywords": ["Opti"],
            "class": "Iop",
            "description": "Gameplay Feu-Terre Spé Zoning et clear de salle !",
            "tranche": 245
            }
        ,
            "Eniripsa SUPPORT [SOIN ARMURE] 245 Opti": {
            "image": "assets/builds/Eniripsa SUPPORT [Soin Shield].png",
            "url": "https://zenithwakfu.com/builder/tjbqt",
            "keywords": ["Opti"],
            "class": "Eniripsa",
            "description": "Gameplay autours de Distribution maxant l'amure et le soin réalisé ! ",
            "tranche": 245
            }
        ,
        "Pandawa SUPPORT [PLACEUR SOIN] 245 Opti": {
            "image": "assets/builds/Pandawa SUPPORT [Placeur Soin].png",
            "url": "https://zenithwakfu.com/builder/xrrmc",
            "keywords": ["Opti"],
            "class": "Pandawa",
            "description": "Gameplay permettant un soin d'appoint non négligeable avec le Panda les tours où il n'a pas besoin de placer.",
            "tranche": 245
            }
        ,
            "Steamer DPT [DIRECT] 110 Opti": {
            "image": "assets/builds/Steamer DPT [Direct].png",
            "url": "https://zenithwakfu.com/builder/9jvjn",
            "keywords": ["Opti"],
            "class": "Steamer",
            "description": "",
            "tranche": 110
            }
        ,
            "Enutrof SUPPORT [ABANDON] 110 Low Cost": {
        "image": "assets/builds/Enutrof SUPPORT [ABANDON] 110.png",
        "url": "https://www.zenithwakfu.com/builder/cd686",
        "keywords": ["Low Cost"],
        "class": "Enutrof",
        "description": "Le stuff n'a pas les subli abandon mais il est prêt pour en recevoir et être facile à améliorer !",
        "tranche": 110
        },
            "Osamodas SUPPORT [ABANDON] 110 Opti": {
            "image": "assets/builds/Osamodas SUPPORT [Abandon].png",
            "url": "https://www.zenithwakfu.com/builder/416c3",
            "keywords": ["Opti"],
            "class": "Osamodas",
            "description": "",
            "tranche": 110
            }
        ,
            "Sadida DPT [POISON POUPEE] 110 Opti": {
            "image": "assets/builds/Sadida DPT [POISON + POUPEE].png",
            "url": "https://zenithwakfu.com/builder/32e98",
            "keywords": ["Opti"],
            "class": "Sadida",
            "description": "Necessite d'avoir de quoi abuser des retraits PA/PM dans votre composition pour profiter du Sadi !",
            "tranche": 110
        },
        
        "Ouginak DPT [DIRECT] 110 Mid Cost": {
        "image": "assets/builds/Ouginak DPT [Direct] 110.png",
        "url": "https://zenithwakfu.com/builder/0ruzb",
        "keywords": ["Mid Cost"],
        "class": "Ouginak",
        "description": "Croc futé convertie auto la parade en CC quand tu es en Ougi garou, donc avec ce build vous avez 94%cc dès que vous êtes transformé. J'ai mis des sauvegardes car régulierement elles sont en dessous des 500.000/u ",
        "tranche": 110
        }
        ,
        
        "Sadida SUPPORT [SOIN] 110 Mid Cost": {
        "image": "assets/builds/Sadida SUPPORT [Soin] 110.png",
        "url": "https://www.zenithwakfu.com/builder/91980",
        "keywords": ["Mid Cost"],
        "class": "Sadida",
        "description": "",
        "tranche": 110
        }
        ,
        "Eniripsa SUPPORT [SOIN] 110 Low Cost": {
        "image": "assets/builds/Eniripsa SUPPORT [SOIN] 110.png",
        "url": "https://www.zenithwakfu.com/builder/c86e0",
        "keywords": ["Low Cost"],
        "class": "Eniripsa",
        "description": "",
        "tranche": 110
        },
        "Sacrieur DPT [MELEE BERSERK] 110 Low Cost": {
        "image": "assets/builds/Sacrieur DPT [MELEE BERSERK] 110.png",
        "url": "https://www.zenithwakfu.com/builder/62edf",
        "keywords": ["Low Cost"],
        "class": "Sacrieur",
        "description": "",
        "tranche": 110
        }
        ,
        "Eniripsa SUPPORT [SOIN] 110 Mid Cost": {
        "image": "assets/builds/Eniripsa SUPP [SOIN] 110.png",
        "url": "https://www.zenithwakfu.com/builder/xd9bf",
        "keywords": ["Mid Cost"],
        "class": "Eniripsa",
        "description": "Vous pouvez mettre un Royal Mimint si vous préferez gagner un PO au détriment d'un PA. Un familier maitrise soin est l'idéal, mais celui-ci fera l'affaire le temps de vous procurer mieux !",
        "tranche": 110
        }
        ,
        "Steamer DPT [DISTANCE] 110 Mid Cost": {
        "image": "assets/builds/Steamer DPT [DISTANCE] 110.png",
        "url": "https://zenithwakfu.com/builder/nn88y",
        "keywords": ["Mid Cost"],
        "class": "Steamer",
        "description": "",
        "tranche": 110
        }
        ,
        "Ecaflip SUPPORT [SOIN BOOST] 110 Opti": {
        "image": "assets/builds/Ecaflip SUPPORT [SOIN BOOST] 110.png",
        "url": "https://www.zenithwakfu.com/builder/ssnhy",
        "keywords": ["Opti"],
        "class": "Ecaflip",
        "description": "",
        "tranche": 110
        }
        ,
        "Feca SUPPORT [ABANDON] 110 Opti": {
        "image": "assets/builds/Feca SUPPORT [ABANDON] 110.png",
        "url": "https://www.zenithwakfu.com/builder/f9a4d",
        "keywords": ["Opti"],
        "class": "Feca",
        "description": "Nécessite de viser les 84% de parade pour le combo PAISIBLE !",
        "tranche": 110
        }
        ,
        "Xelor DPT [EAU FEU] 110 Mid Cost": {
        "image": "assets/builds/Xelor DPT [EAU FEU] 110.png",
        "url": "https://www.zenithwakfu.com/builder/d4e5a",
        "keywords": ["Mid Cost"],
        "class": "Xelor",
        "description": "",
        "tranche": 110
        }
        ,
      "Feca SUPPORT [ARMURE] 110 low Cost": {
          "image": "assets/builds/Feca SUPPORT [ARMURE] 110 low Cost.png",
          "url": "https://www.zenithwakfu.com/builder/a9180",
          "keywords": ["Low Cost"],
          "class": "Feca",
          "description": "",
          "tranche": 110
        }
      ,
        "Osa SUPPORT [ARMURE] 110 low Cost": {
          "image": "assets/builds/Osa SUPPORT [ARMURE] 110 low Cost.png",
          "url": "https://www.zenithwakfu.com/builder/a9180",
          "keywords": ["Low Cost"],
          "class": "Osamodas",
          "description": "",
          "tranche": 110
        }
    ,
      "Zobal SUPPORT [SOIN] 110 Low cost": {
        "image": "assets/builds/Zobal SUPPORT [SOIN] 110 Low cost.png",
        "url": "https://www.zenithwakfu.com/builder/a9180",
        "keywords": ["Low Cost"],
        "class": "Zobal",
        "description": "",
        "tranche": 110
      }
    ,
      "Panda SUPPORT [PLACEUR] 110 Opti": {
        "image": "assets/builds/Panda SUPPORT [PLACEUR] 110 Opti.png",
        "url": "https://www.zenithwakfu.com/builder/aa949",
        "keywords": ["Opti"],
        "class": "Pandawa",
        "description": "",
        "tranche": 110
      }
    ,
      "Panda SUPPORT [PLACEUR] 110 Low cost": {
        "image": "assets/builds/Panda SUPPORT [PLACEUR] 110 Low cost.png",
        "url": "https://www.zenithwakfu.com/builder/e0711",
        "keywords": ["Low Cost"],
        "class": "Pandawa",
        "description": "",
        "tranche": 110
      }
    ,
      "Sacri DPT [BERSERK] 110 Opti": {
        "image": "assets/builds/Sacri DPT [BERSERK] 110 Opti.png",
        "url": "https://www.zenithwakfu.com/builder/e3c23",
        "keywords": ["Opti"],
        "class": "Sacrieur",
        "description": "",
        "tranche": 110
      }
    ,
      "Pandawa SUPPORT [PLACEUR] 50 Low Cost": {
        "image": "assets/builds/Pandawa SUPPORT [PLACEUR] 50 Low Cost.png",
        "url": "https://zenithwakfu.com/builder/nahtg",
        "keywords": ["Opti"],
        "class": "Pandawa",
        "description": "",
        "tranche": 50
      }
    ,
    "Huppermage DPT [Mêlée] 80 Mid Cost": {
        "image": "assets/builds/Huppermage DPT [Mêlée] 80 Mid Cost.png",
        "url": "https://zenithwakfu.com/builder/696e2",
        "keywords": ["Mid Cost"],
        "class": "Huppermage",
        "description": "Familier mono-élémentaire à rajouter si vous avez le budget/la patience d'en monter un",
        "tranche": 80
      }
  ,

  "Roublard DPT [DIRECT ET BOMBE] 80 Lowcost": {
    "image": "assets/builds/Roublard DPT [DIRECT ET BOMBE] 80 Lowcost.png",
    "url": "https://www.zenithwakfu.com/builder/nt3gp",
    "keywords": ["Low Cost"],
    "class": "Roublard",
    "description": "En familier vraiment mettez ce qui vous passe sous la main, ce n'est pas obligatoire ! Les sublis ne sont pas obligatoires, c'est du bonus si vous pouvez car elles ne coûtent vraiment rien. Améliorable selon votre budget et prix : [Epaulettes Prespic] et [Ceinture Pagne du Grand Orrok]",
    "tranche": 80
  }
,
  "Osamodas SUPPORT [RETRAIT RES ET ARMURE] 125 Mid-Cost": {
    "image": "assets/builds/Osamodas SUPPORT [RETRAIT RES ET ARMURE] 125 Mid-Cost.png",
    "url": "https://www.zenithwakfu.com/builder/d7bdd",
    "keywords": ["Mid Cost"],
    "class": "Osamodas",
    "description": "",
    "tranche": 125
  }
,
  "Ecaflip SUPP [SOIN BOOST] 125 OPTI": {
    "image": "assets/builds/Ecaflip SUPP [SOIN BOOST] 125 OPTI.png",
    "url": "https://www.zenithwakfu.com/builder/cuwjf",
    "keywords": ["Opti"],
    "class": "Ecaflip",
    "description": "Gameplay PUCIF avec Revigoration !",
    "tranche": 125
  }
,
  "Eniripsa SUPPORT [SOIN] 125 low cost": {
    "image": "assets/builds/Eniripsa SUPPORT [SOIN] 125 low cost.png",
    "url": "https://www.zenithwakfu.com/builder/8311f",
    "keywords": ["Low Cost"],
    "class": "Eniripsa",
    "description": "",
    "tranche": 125
  }
,
  "Feca SUPPORT [ARMURE] 125 Mid cost": {
    "image": "assets/builds/Feca SUPPORT [ARMURE] 125 Mid cost.png",
    "url": "https://zenithwakfu.com/builder/25531",
    "keywords": ["Mid Cost"],
    "class": "Feca",
    "description": "",
    "tranche": 125
  }
,
  "Pandawa SUPPORT [PLACEUR] 125 low cost": {
    "image": "assets/builds/Pandawa SUPPORT [PLACEUR] 125 low cost.png",
    "url": "https://www.zenithwakfu.com/builder/b0e15",
    "keywords": ["Low Cost"],
    "class": "Pandawa",
    "description": "",
    "tranche": 125
  }
,
  "Osa SUPPORT [ARMURE RETRAIT RES] 140 Low Cost": {
    "image": "assets/builds/Osa SUPPORT [ARMURE RETRAIT RES] 140 Low Cost.png",
    "url": "https://zenithwakfu.com/builder/xq9d1",
    "keywords": ["Low Cost"],
    "class": "Osamodas",
    "description": "",
    "tranche": 140
  }
,
  "Cra DPT [DEMESURE] 140 OPTI": {
    "image": "assets/builds/Cra DPT [DEMESURE] 140 OPTI.png",
    "url": "https://zenithwakfu.com/builder/l10i1",
    "keywords": ["Opti"],
    "class": "Cra",
    "description": "",
    "tranche": 140
  }
,
  "Cra DPT [TRI ELEMENT] 140 Mid cost": {
    "image": "assets/builds/Cra DPT [TRI ELEMENT] 140 Mid cost.png",
    "url": "https://zenithwakfu.com/builder/z5jn5",
    "keywords": ["Mid Cost"],
    "class": "Cra",
    "description": "",
    "tranche": 140
  }
,
  "Eliotrope DPT [DISTANCE] 140 Mid Cost": {
    "image": "assets/builds/Eliotrope DPT [DISTANCE] 140 Mid Cost.png",
    "url": "https://zenithwakfu.com/builder/ej1tg",
    "keywords": ["Mid Cost"],
    "class": "Eliotrope",
    "description": "Il faut jouer avec Réminescence, et faire exaltation chaque tour pour finir en Serein et proc les 40cc de dimension blanche en perma !",
    "tranche": 140
  }
,
  "Xelor DPT [DISTANCE] 140 Low cost": {
    "image": "assets/builds/Xelor DPT [DISTANCE] 140 Low cost.png",
    "url": "https://www.zenithwakfu.com/builder/e5f1f",
    "keywords": ["Low Cost"],
    "class": "Xelor",
    "description": "",
    "tranche": 140
  }
,
  "Eniripsa SUPP [DISTANCE SOIN] Mid Cost": {
    "image": "assets/builds/Eniripsa SUPP [DISTANCE SOIN] Mid Cost.png",
    "url": "https://www.zenithwakfu.com/builder/86164",
    "keywords": ["Mid Cost"],
    "class": "Eniripsa",
    "description": "",
    "tranche": 140
  }
,
  "Eliotrope DPT [DISTANCE] 140 Low cost": {
    "image": "assets/builds/Eliotrope DPT [DISTANCE] 140 Low cost.png",
    "url": "https://zenithwakfu.com/builder/734e8",
    "keywords": ["Low Cost"],
    "class": "Eliotrope",
    "description": "",
    "tranche": 140
  }
,
  "Ouginak DPT [MELEE ENFLA] 140 Mid cost": {
    "image": "assets/builds/Ouginak DPT [MELEE ENFLA] 140 Mid cost.png",
    "url": "https://zenithwakfu.com/builder/jzd2v",
    "keywords": ["Mid Cost"],
    "class": "Ouginak",
    "description": "",
    "tranche": 140
  }
,
  "Ecaflip SUPP [SOIN BOOST] 140 OPTI": {
    "image": "assets/builds/Ecaflip SUPP [SOIN BOOST] 140 OPTI.png",
    "url": "https://www.zenithwakfu.com/builder/oehhm",
    "keywords": ["Opti"],
    "class": "Ecaflip",
    "description": "",
    "tranche": 140
  }
,
  "Xelor DPT [FEU EAU] 140 OPTI": {
    "image": "assets/builds/Xelor DPT [FEU EAU] 140 OPTI.png",
    "url": "https://www.zenithwakfu.com/builder/iac9e",
    "keywords": ["Opti"],
    "class": "Xelor",
    "description": "",
    "tranche": 140
  }
,
  "Enutrof DPT [MELEE] 140 OPTI": {
    "image": "assets/builds/Enutrof DPT [MELEE] 140 OPTI.png",
    "url": "https://zenithwakfu.com/builder/fe753",
    "keywords": ["Opti"],
    "class": "Enutrof",
    "description": "",
    "tranche": 140
  }
};

export { BUILD_DATA, CLASS_LIST };

