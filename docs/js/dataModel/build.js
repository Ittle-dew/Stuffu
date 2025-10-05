const CLASS_LIST = {
    "fr": [
        "Cra", "Ecaflip", "Eliotrope", "Eniripsa",
        "Enutrof", "Feca", "Huppermage", "Iop",
        "Osamodas", "Ouginak", "Pandawa", "Roublard",
        "Sacrieur", "Sadida", "Sram", "Steamer",
        "Xelor", "Zobal"
    ], 
    "en": [
        "Cra", "Ecaflip", "Eliotrope", "Eniripsa",
        "Enutrof", "Feca", "Foggernaut", "Huppermage",
        "Iop", "Masqueraider", "Osamodas", "Ouginak",
        "Pandawa", "Rogue", "Sacrier", "Sadida",
        "Sram", "Xelor"
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
                            ,
                              "Eniripsa HYBRIDE [DPT ET SUPP] 140 OPTI": {
                                "image": "assets/builds/Eniripsa HYBRIDE [DPT ET SUPP] 140 OPTI.png",
                                "url": "https://www.zenithwakfu.com/builder/c0211",
                                "keywords": ["Opti"],
                                "class": "Eniripsa",
                                "description": "",
                                "tranche": 140
                              }
                            ,
                              "Sadida DPT [POISON POUEE] 140 OPTI": {
                                "image": "assets/builds/Sadida DPT [POISON POUEE] 140 OPTI.png",
                                "url": "https://zenithwakfu.com/builder/37g77",
                                "keywords": ["Opti"],
                                "class": "Sadida",
                                "description": "",
                                "tranche": 140
                              }
                            ,
                          
                            "Ouginak DPT [MELEE] 140 Low cost": {
                              "image": "assets/builds/Ouginak DPT [MELEE] 140 Low cost.png",
                              "url": "https://zenithwakfu.com/builder/xic2q",
                              "keywords": ["Low Cost"],
                              "class": "Ouginak",
                              "description": "",
                              "tranche": 140
                            }
                          ,
                            "Sacrieur DPT [MELEE BERSERK] 140 Mid cost": {
                              "image": "assets/builds/Sacrieur DPT [MELEE BERSERK] 140 Mid cost.png",
                              "url": "https://www.zenithwakfu.com/builder/3512c",
                              "keywords": ["Mid Cost"],
                              "class": "Sacrieur",
                              "description": "",
                              "tranche": 140
                            }
                          ,
                            "Feca SUPPORT [ARMURE] 140 OPTI": {
                              "image": "assets/builds/Feca SUPPORT [ARMURE] 140 OPTI.png",
                              "url": "https://www.zenithwakfu.com/builder/3512c",
                              "keywords": ["Opti"],
                              "class": "Feca",
                              "description": "Necessite 82-84 de parade et 6PM pour proc le combo 100% parade hors de votre tour avec PAISIBLE",
                              "tranche": 140
                            }
                          ,
                            "Iop DPT [FEU TERRE] 140 OPTI": {
                              "image": "assets/builds/Iop DPT [FEU TERRE] 140 OPTI.png",
                              "url": "https://zenithwakfu.com/builder/og0dv",
                              "keywords": ["Opti"],
                              "class": "Iop",
                              "description": "",
                              "tranche": 140
                            }
                          ,
                "Sram DPT [MELEE DOS] 140 Mid cost": {
                              "image": "assets/builds/Sram DPT [MELEE DOS] 140 Mid cost.png",
                              "url": "https://www.zenithwakfu.com/builder/b5856",
                              "keywords": ["Mid Cost"],
                              "class": "Sram",
                              "description": "",
                              "tranche": 140
                            }
                          ,
                            "Eliotrope DPT [MELEE ZONE] 155 OPTI": {
                              "image": "assets/builds/Eliotrope DPT [MELEE ZONE] 155 OPTI.png",
                              "url": "https://zenithwakfu.com/builder/zlpbw",
                              "keywords": ["Opti"],
                              "class": "Eliotrope",
                              "description": "Avec ce build, il faut utiliser 2 pa avec Pulsation pour SOIN un allié pour proc lunatique 2 pour le tours d'après !",
                              "tranche": 155
                            }
                          ,
                          "Enutrof DPT [DEMESURE] 155 OPTI": {
                              "image": "assets/builds/Enutrof DPT [DEMESURE] 155 OPTI.png",
                              "url": "https://zenithwakfu.com/builder/cxxzz",
                              "keywords": ["Opti"],
                              "class": "Enutrof",
                              "description": "",
                              "tranche": 155
                            }
                          ,
                            "Sram DPT [MELEE DOS] 155 Mid cost": {
                              "image": "assets/builds/Sram DPT [MELEE DOS] 155 Mid cost.png",
                              "url": "https://zenithwakfu.com/builder/bae9k",
                              "keywords": ["Mid Cost"],
                              "class": "Sram",
                              "description": "",
                              "tranche": 155
                            }
                          ,
                            "Eliotrope DPT [DISTANCE TRI ELEMENT] 155 OPTI": {
                              "image": "assets/builds/Eliotrope DPT [DISTANCE TRI ELEMENT] 155 OPTI.png",
                              "url": "https://zenithwakfu.com/builder/0uov4",
                              "keywords": ["Opti"],
                              "class": "Eliotrope",
                              "description": "",
                              "tranche": 155
                            }
                          ,
                            "Ecaflip SUPP [SOIN BOOST] 155 OPTI": {
                              "image": "assets/builds/Ecaflip SUPP [SOIN BOOST] 155 OPTI.png",
                              "url": "https://zenithwakfu.com/builder/52kop",
                              "keywords": ["Opti"],
                              "class": "Ecaflip",
                              "description": "",
                              "tranche": 155
                            }
                          ,
                            "Steamer DPT [DISTANCE] 155 OPTI": {
                              "image": "assets/builds/Steamer DPT [DISTANCE] 155 OPTI.png",
                              "url": "https://zenithwakfu.com/builder/txur0",
                              "keywords": ["Opti"],
                              "class": "Steamer",
                              "description": "",
                              "tranche": 155
                            }
                          ,
                            "Ouginak DPT [OFFTANK POISON] 155 Low Cost": {
                              "image": "assets/builds/Ouginak DPT [OFFTANK POISON] 155 Low Cost.png",
                              "url": "https://zenithwakfu.com/builder/c4870",
                              "keywords": ["Low Cost"],
                              "class": "Ouginak",
                              "description": "",
                              "tranche": 155
                            }
                          ,
                            "Sadida SUPP [SOIN] 155 Low cost": {
                              "image": "assets/builds/Sadida SUPP [SOIN] 155 Low cost.png",
                              "url": "https://zenithwakfu.com/builder/84e89",
                              "keywords": ["Low Cost"],
                              "class": "Sadida",
                              "description": "",
                              "tranche": 155
                            }
                          ,
                            "Sadida DPT [POISON] 155 Opti": {
                              "image": "assets/builds/Sadida DPT [POISON] 155 Opti.png",
                              "url": "https://zenithwakfu.com/builder/25a79",
                              "keywords": ["Opti"],
                              "class": "Sadida",
                              "description": "",
                              "tranche": 155
                            }
                          ,
                            "Osamodas SUPPORT [ABANDON] 155 OPTI": {
                              "image": "assets/builds/Osamodas SUPPORT [ABANDON] 155 OPTI.png",
                              "url": "https://www.zenithwakfu.com/builder/468ce",
                              "keywords": ["Opti"],
                              "class": "Osamodas",
                              "description": "",
                              "tranche": 155
                            }
                          ,
                            "Eniripsa SUPP [SOIN] 155 Low cost": {
                              "image": "assets/builds/Eniripsa SUPP [SOIN] 155 Low cost.png",
                              "url": "https://zenithwakfu.com/builder/f9ec8",
                              "keywords": ["Low Cost"],
                              "class": "Eniripsa",
                              "description": "",
                              "tranche": 155
                            }
                          ,
                            "Sadida SUPP [SOIN] 155 Mid cost": {
                              "image": "assets/builds/Sadida SUPP [SOIN] 155 Mid cost.png",
                              "url": "https://zenithwakfu.com/builder/c801e",
                              "keywords": ["Mid Cost"],
                              "class": "Sadida",
                              "description": "",
                              "tranche": 155
                            }
                          ,
                            "Pandawa SUPPORT [PLACEUR] 155 OPTI": {
                              "image": "assets/builds/Pandawa SUPPORT [PLACEUR] 155 OPTI.png",
                              "url": "https://www.zenithwakfu.com/builder/36b7e",
                              "keywords": ["Opti"],
                              "class": "Pandawa",
                              "description": "",
                              "tranche": 155
                            }
                          ,
                            "Eniripsa SUPPORT [SOIN] 155 OPTI": {
                              "image": "assets/builds/Eniripsa SUPPORT [SOIN] 155 OPTI.png",
                              "url": "https://www.zenithwakfu.com/builder/4e142",
                              "keywords": ["Opti"],
                              "class": "Eniripsa",
                              "description": "",
                              "tranche": 155
                            }
                          ,
                            "Feca SUPPORT [ABANDON] 155 OPTI": {
                              "image": "assets/builds/Feca SUPPORT [ABANDON] 155 OPTI.png",
                              "url": "https://www.zenithwakfu.com/builder/73e26",
                              "keywords": ["Opti"],
                              "class": "Feca",
                              "description": "",
                              "tranche": 155
                            }
                          ,
                            "Xelor DPT [ROUAGE] 155 OPTI": {
                              "image": "assets/builds/Xelor DPT [ROUAGE] 155 OPTI.png",
                              "url": "https://zenithwakfu.com/builder/624a1",
                              "keywords": ["Opti"],
                              "class": "Xelor",
                              "description": "Pourquoi un xelor sans maitrise secondaire? Le principe de ce build est assez simple: Il est très fléxible. Vous avez perma 100% cc, et vous pouvez très simplement switch de mode. ",
                              "tranche": 155
                            },
                            "Pandawa SUPPORT [PLACEUR] 155 low cost": {
                              "image": "assets/builds/Pandawa SUPPORT [PLACEUR] 155 low cost.png",
                              "url": "https://zenithwakfu.com/builder/5c1c0",
                              "keywords": ["Low Cost"],
                              "class": "Pandawa",
                              "description": "",
                              "tranche": 155
                            }
                          ,
                            "Iop DPT [FEU TERRE] 155 OPTI": {
                              "image": "assets/builds/Iop DPT [FEU TERRE] 155 OPTI.png",
                              "url": "https://zenithwakfu.com/builder/xjbsp",
                              "keywords": ["Opti"],
                              "class": "Iop",
                              "description": "",
                              "tranche": 155
                            }
                          ,
                            "Ouginak DPT [DIRECT] 155 OPTI": {
                              "image": "assets/builds/Ouginak DPT [DIRECT] 155 OPTI.png",
                              "url": "https://zenithwakfu.com/builder/w8pxy",
                              "keywords": ["Opti"],
                              "class": "Ouginak",
                              "description": "",
                              "tranche": 155
                            }
                          ,
                            "Zobal SUPP [PLACEUR ARMURE] 155 OPTI": {
                              "image": "assets/builds/Zobal SUPP [PLACEUR ARMURE] 155 OPTI.png",
                              "url": "https://zenithwakfu.com/builder/162ce",
                              "keywords": ["Opti"],
                              "class": "Zobal",
                              "description": "A noter que le build a 1po pour le zobal et pas pour le double, l'abandon donnant son bonus après que le maniement bouclier n'aie fixé la po à 0.",
                              "tranche": 155
                            }
                          ,
                            "Cra DPT [TRI ELEMENT] 155 OPTI": {
                              "image": "assets/builds/Cra DPT [TRI ELEMENT] 155 OPTI.png",
                              "url": "https://zenithwakfu.com/builder/sasgx",
                              "keywords": ["Opti"],
                              "class": "Cra",
                              "description": "",
                              "tranche": 155
                            }
                          ,
                            "Roublard DPT [BOMBE INDIRECT] 155 OPTI": {
                              "image": "assets/builds/Roublard DPT [BOMBE INDIRECT] 155 OPTI.png",
                              "url": "https://zenithwakfu.com/builder/cd518",
                              "keywords": ["Opti"],
                              "class": "Roublard",
                              "description": "",
                              "tranche": 155
                            }
                          ,
                            "Huppermage DPT [CONSTANT] 155 Opti": {
                              "image": "assets/builds/Huppermage DPT [CONSTANT] 155 Opti.png",
                              "url": "https://www.zenithwakfu.com/builder/abb7b",
                              "keywords": ["Opti"],
                              "class": "Huppermage",
                              "description": "Coeur Terre à privilégier mais peut se jouer avec tous les Coeurs.",
                              "tranche": 155
                            }
                          ,
                            "Feca SUPPORT [ARMURE BOOST] 155 Low cost": {
                              "image": "assets/builds/Feca SUPPORT [ARMURE BOOST] 155 Low cost.png",
                              "url": "https://zenithwakfu.com/builder/042e9",
                              "keywords": ["Low Cost"],
                              "class": "Feca",
                              "description": "",
                              "tranche": 155
                            }
                        ,
                  
                    "Enutrof SUPPORT [NO SECONDAIRE] 110 Low cost": {
                      "image": "assets/builds/Enutrof SUPPORT [NO SECONDAIRE] 110 Low cost.png",
                      "url": "https://www.zenithwakfu.com/builder/cd686",
                      "keywords": ["Low Cost"],
                      "class": "Enutrof",
                      "description": "Pret pour recevoir des subli type \"abandon\"",
                      "tranche": 110
                    }
                ,
            
              "Eniripsa SUPPORT [SOIN DISTANCE] 140 Mid-Cost": {
                "image": "assets/builds/Eniripsa SUPPORT [SOIN DISTANCE] 140 Mid-Cost.png",
                "url": "https://www.zenithwakfu.com/builder/86164",
                "keywords": ["Mid Cost"],
                "class": "Eniripsa",
                "description": "",
                "tranche": 140
              }
            ,
              "Roublard DPT [DIRECT ET BOMBE] 140 LOWCOST": {
                "image": "assets/builds/Roublard DPT [DIRECT ET BOMBE] 140 LOWCOST.png",
                "url": "https://www.zenithwakfu.com/builder/sfyxr",
                "keywords": ["Low Cost"],
                "class": "Roublard",
                "description": "Volontairement pas de maîtrise dos dans le choix des items car 2 Boss 140 ne sont pas attaquables de dos: Potofeu/Chêne Mou. Influence Paradoxale 1/2 est un bon compromis lowcost et jouer Influence du Wakfu I x 2 est une meilleure option mais ça peut être assez cher selon le marché",
                "tranche": 140
              }
          ,
            "Steamer DPT [DIRECT] 110 OPTI": {
              "image": "assets/builds/Steamer DPT [DIRECT] 110 OPTI.png",
              "url": "https://zenithwakfu.com/builder/9jvjn",
              "keywords": ["Opti"],
              "class": "Steamer",
              "description": "",
              "tranche": 110
            }
          ,
      
        "Sacrieur SUPPORT [PLACEUR] 170 Low cost": {
          "image": "assets/builds/Sacrieur SUPPORT [PLACEUR] 170 Low cost.png",
          "url": "https://www.zenithwakfu.com/builder/doiff",
          "keywords": ["Low Cost"],
          "class": "Sacrieur",
          "description": "",
          "tranche": 170
        }
      ,
        "Steamer SUPPORT [ARMURE] 170 Low cost": {
          "image": "assets/builds/Steamer SUPPORT [ARMURE] 170 Low cost.png",
          "url": "https://www.zenithwakfu.com/builder/0ktin",
          "keywords": ["Low Cost"],
          "class": "Steamer",
          "description": "",
          "tranche": 170
        }
      ,
        "Xelor DPT [FEU EAU] 170 OPTI": {
          "image": "assets/builds/Xelor DPT [FEU EAU] 170 OPTI.png",
          "url": "https://zenithwakfu.com/builder/adxoz",
          "keywords": ["Opti"],
          "class": "Xelor",
          "description": "",
          "tranche": 170
        }
      ,
        "Ecaflip SUPP [SOIN BOOST] 170 OPTI": {
          "image": "assets/builds/Ecaflip SUPP [SOIN BOOST] 170 OPTI.png",
          "url": "https://zenithwakfu.com/builder/3j1c8",
          "keywords": ["Opti"],
          "class": "Ecaflip",
          "description": "",
          "tranche": 170
        }
      ,
        "Osamodas SUPPORT [BOOST] 170 Low Cost": {
          "image": "assets/builds/Osamodas SUPPORT [BOOST] 170 Low Cost.png",
          "url": "https://www.zenithwakfu.com/builder/4077a",
          "keywords": ["Low Cost"],
          "class": "Osamodas",
          "description": "",
          "tranche": 170
        }
      ,
        "Osamodas SUPPORT [ABANDON] 170 Mid cost": {
          "image": "assets/builds/Osamodas SUPPORT [ABANDON] 170 Mid cost.png",
          "url": "https://www.zenithwakfu.com/builder/535e7",
          "keywords": ["Mid Cost"],
          "class": "Osamodas",
          "description": "",
          "tranche": 170
        }
      ,
        "Féca SUPPORT [ABANDON] 170 Opti": {
          "image": "assets/builds/Féca SUPPORT [ABANDON] 170 Opti.png",
          "url": "https://www.zenithwakfu.com/builder/ab147",
          "keywords": ["Opti"],
          "class": "Feca",
          "description": "Il y a moyen de marginalement l'améliorer, et que certains items peuvent être préférés à d'autres si on privilégie certaines stats au détriment d'autres (Coiffe de Javého par exemple pour gagner 1PO de plus en échange d'un peu d'armure donnée)",
          "tranche": 170
        }
      ,
        "Zobal SUPP [SOIN] 170 mid cost": {
          "image": "assets/builds/Zobal SUPP [SOIN] 170 mid cost.png",
          "url": "https://zenithwakfu.com/builder/d4d71",
          "keywords": ["Mid Cost"],
          "class": "Zobal",
          "description": "",
          "tranche": 170
        }
      ,
        "Eniripsa SUPPORT [SOIN] 170 Opti": {
          "image": "assets/builds/Eniripsa SUPPORT [SOIN] 170 Opti.png",
          "url": "https://zenithwakfu.com/builder/xd8yk",
          "keywords": ["Opti"],
          "class": "Eniripsa",
          "description": "",
          "tranche": 170
        }
      ,
        "Eni SUPPORT [SOIN] 170 low cost": {
          "image": "assets/builds/Eni SUPPORT [SOIN] 170 low cost.png",
          "url": "https://www.zenithwakfu.com/builder/f8d1d",
          "keywords": ["Low Cost"],
          "class": "Eniripsa",
          "description": "",
          "tranche": 170
        }
      ,
        "Xelor DPT [DISTANCE] 170 Low cost": {
          "image": "assets/builds/Xelor DPT [DISTANCE] 170 Low cost.png",
          "url": "https://www.zenithwakfu.com/builder/9378b",
          "keywords": ["Low Cost"],
          "class": "Xelor",
          "description": "",
          "tranche": 170
        }
      ,
        "Sadida DPT [POUPEE POISON] 170 MID COST": {
          "image": "assets/builds/Sadida DPT [POUPEE POISON] 170 MID COST.png",
          "url": "https://zenithwakfu.com/builder/3c562",
          "keywords": ["Mid Cost"],
          "class": "Sadida",
          "description": "",
          "tranche": 170
        }
      ,
        "Sadida SUPPORT [SOIN ARMURE] 170 Low Cost": {
          "image": "assets/builds/Sadida SUPPORT [SOIN ARMURE] 170 Low Cost.png",
          "url": "https://zenithwakfu.com/builder/aacfc",
          "keywords": ["Low Cost"],
          "class": "Sadida",
          "description": "",
          "tranche": 170
        }
      ,
      "Iop DPT [FEU TERRE 170 OPTI": {
          "image": "assets/builds/Iop DPT [FEU TERRE 170 OPTI.png",
          "url": "https://zenithwakfu.com/builder/ez0bj",
          "keywords": ["Opti"],
          "class": "Iop",
          "description": "",
          "tranche": 170
        }
    ,
      "Enutrof DPT [MELEE] 170 OPTI": {
        "image": "assets/builds/Enutrof DPT [MELEE] 170 OPTI.png",
        "url": "https://www.zenithwakfu.com/builder/b6atm",
        "keywords": ["Opti"],
        "class": "Enutrof",
        "description": "",
        "tranche": 170
      }
    ,
      "Cra DPT [TRI ELEMENT] 170 OPTI": {
        "image": "assets/builds/Cra DPT [TRI ELEMENT] 170 OPTI.png",
        "url": "https://zenithwakfu.com/builder/8bnrb",
        "keywords": ["Opti"],
        "class": "Cra",
        "description": "",
        "tranche": 170
      }
    ,
      "Sacrieur DPT [MELEE] 170 Mid-Cost": {
        "image": "assets/builds/Sacrieur DPT [MELEE] 170 Mid-Cost.png",
        "url": "https://www.zenithwakfu.com/builder/a163b",
        "keywords": ["Mid Cost"],
        "class": "Sacrieur",
        "description": "",
        "tranche": 170
      }
    ,
      "Sram DPT [MELEE DOS] 170 Opti": {
        "image": "assets/builds/Sram DPT [MELEE DOS] 170 Opti.png",
        "url": "https://www.zenithwakfu.com/builder/63e34",
        "keywords": ["Opti"],
        "class": "Sram",
        "description": "",
        "tranche": 170
      }
    ,
      "Sacrieur DPT [MELEE] 170 OPTI": {
        "image": "assets/builds/Sacrieur DPT [MELEE] 170 OPTI.png",
        "url": "https://www.zenithwakfu.com/builder/b13eb",
        "keywords": ["Opti"],
        "class": "Sacrieur",
        "description": "",
        "tranche": 170
      }
    ,
      "Sacrieur DPT [MELEE] 170 Low cost": {
        "image": "assets/builds/Sacrieur DPT [MELEE] 170 Low cost.png",
        "url": "https://www.zenithwakfu.com/builder/f4da3",
        "keywords": ["Low Cost"],
        "class": "Sacrieur",
        "description": "",
        "tranche": 170
      }
    ,
      "Eliotrope DPT [MELEE] 170 Low cost": {
        "image": "assets/builds/Eliotrope DPT [MELEE] 170 Low cost.png",
        "url": "https://www.zenithwakfu.com/builder/478d8",
        "keywords": ["Low Cost"],
        "class": "Eliotrope",
        "description": "",
        "tranche": 170
      }
    ,
      "Panda SUPPORT [PLACEUR] 170 Opti": {
        "image": "assets/builds/Panda SUPPORT [PLACEUR] 170 Opti.png",
        "url": "https://www.zenithwakfu.com/builder/d135c",
        "keywords": ["Opti"],
        "class": "Pandawa",
        "description": "",
        "tranche": 170
      }
    ,
      "Panda SUPPORT [PLACEUR] 170 Low cost": {
        "image": "assets/builds/Panda SUPPORT [PLACEUR] 170 Low cost.png",
        "url": "https://www.zenithwakfu.com/builder/6ae6e",
        "keywords": ["Low Cost"],
        "class": "Pandawa",
        "description": "",
        "tranche": 170
      }
    ,
      "Eni SUPPORT [SOIN] 170 Mid Cost": {
        "image": "assets/builds/Eni SUPPORT [SOIN] 170 Mid Cost.png",
        "url": "https://www.zenithwakfu.com/builder/6ae6e",
        "keywords": ["Mid Cost"],
        "class": "Eniripsa",
        "description": "",
        "tranche": 170
      }
    ,
      "Ecaflip DPT [DISTANCE] 170 low cost": {
        "image": "assets/builds/Ecaflip DPT [DISTANCE] 170 low cost.png",
        "url": "https://www.zenithwakfu.com/builder/1fb74",
        "keywords": ["Low Cost"],
        "class": "Ecaflip",
        "description": "",
        "tranche": 170
      }
    ,
      "Ecaflip DPT [ELEMENTAIRE] 170 Opti": {
        "image": "assets/builds/Ecaflip DPT [ELEMENTAIRE] 170 Opti.png",
        "url": "https://www.zenithwakfu.com/builder/336de",
        "keywords": ["Opti"],
        "class": "Ecaflip",
        "description": "",
        "tranche": 170
      }
    ,
      "Feca SUPPORT [ARMURE] 170 Low Cost": {
        "image": "assets/builds/Feca SUPPORT [ARMURE] 170 Low Cost.png",
        "url": "https://www.zenithwakfu.com/builder/85cab",
        "keywords": ["Low Cost"],
        "class": "Feca",
        "description": "",
        "tranche": 170
      }
    ,
      "Ecaflip SUPPORT [SOIN BOOST] 185 OPTI": {
        "image": "assets/builds/Ecaflip SUPPORT [SOIN BOOST] 185 OPTI.png",
        "url": "https://zenithwakfu.com/builder/ggwi3",
        "keywords": ["Opti"],
        "class": "Ecaflip",
        "description": "",
        "tranche": 185
      }
    ,
      "Pandawa SUPP [PLACEUR] 185 opti": {
        "image": "assets/builds/Pandawa SUPP [PLACEUR] 185 opti.png",
        "url": "https://zenithwakfu.com/builder/1dd7a",
        "keywords": ["Opti"],
        "class": "Pandawa",
        "description": "",
        "tranche": 185
      }
    ,
      "Sadi SUPPORT [SOIN ARMURE] 185 OPTI": {
        "image": "assets/builds/Sadi SUPPORT [SOIN ARMURE] 185 OPTI.png",
        "url": "https://zenithwakfu.com/builder/539b2",
        "keywords": ["Opti"],
        "class": "Sadida",
        "description": "",
        "tranche": 185
      }
    ,
      "Ouginak DPT [DIRECT] 185 OPTI": {
        "image": "assets/builds/Ouginak DPT [DIRECT] 185 OPTI.png",
        "url": "https://zenithwakfu.com/builder/cw2cd",
        "keywords": ["Opti"],
        "class": "Ouginak",
        "description": "",
        "tranche": 185
      }
    ,
      "Iop DPT [FEU TERRE] 185 OPTI": {
        "image": "assets/builds/Iop DPT [FEU TERRE] OPTI.png",
        "url": "https://zenithwakfu.com/builder/5mfb6",
        "keywords": ["Opti"],
        "class": "Iop",
        "description": "",
        "tranche": 185
      }
    ,
      "Feca SUPPORT [ARMURE] 185 Opti": {
        "image": "assets/builds/Feca SUPPORT [ARMURE] 185 Opti.png",
        "url": "https://zenithwakfu.com/builder/9a438",
        "keywords": ["Opti"],
        "class": "Feca",
        "description": "",
        "tranche": 185
      }
    ,
      "Feca SUPPORT [ARMURE] 185 Mid cost": {
        "image": "assets/builds/Feca SUPPORT [ARMURE] 185 Mid cost.png",
        "url": "https://zenithwakfu.com/builder/ae59e",
        "keywords": ["Mid Cost"],
        "class": "Feca",
        "description": "",
        "tranche": 185
      }
    ,
      "Sacrieur DPT [MELEE] 185 OPTI": {
        "image": "assets/builds/Sacrieur DPT [MELEE] 185 OPTI.png",
        "url": "https://www.zenithwakfu.com/builder/fe6b5",
        "keywords": ["Opti"],
        "class": "Sacrieur",
        "description": "",
        "tranche": 185
      }
    ,
      "Feca DPT [GLYPHE PAIR] 200 OPTI": {
        "image": "assets/builds/Feca DPT [GLYPHE PAIR] 200 OPTI.png",
        "url": "https://zenithwakfu.com/builder/2k2py",
        "keywords": ["Opti"],
        "class": "Feca",
        "description": "le +12 pa ajouté c'est pour simuler le nombre de PA que vous avez tour pair => 12 + 2 [Dofus prisma] + 2 [Wé] + 3 [Sauvegarde] + 5 [ +2 goutte +3 bergé] = 24pa T2/T4 à condition d'utiliser goutte sur un allié + pacif dans le vide",
        "tranche": 200
      }
    ,
      "Feca SUPPORT [ARMURE] 200 OPTI": {
        "image": "assets/builds/Feca SUPPORT [ARMURE] 200 OPTI.png",
        "url": "https://www.zenithwakfu.com/builder/8aed4",
        "keywords": ["Opti"],
        "class": "Feca",
        "description": "",
        "tranche": 200
      }
    ,
      "Feca SUPPORT [ARMURE TANKY] 200 OPTI": {
        "image": "assets/builds/Feca SUPPORT [ARMURE TANKY] 200 OPTI.png",
        "url": "https://www.zenithwakfu.com/builder/e1511",
        "keywords": ["Opti"],
        "class": "Feca",
        "description": "",
        "tranche": 200
      }
    ,
      "Feca SUPP [ARMURE] 200 low cost": {
        "image": "assets/builds/Feca SUPP [ARMURE] 200 low cost.png",
        "url": "https://zenithwakfu.com/builder/8518f",
        "keywords": ["Low Cost"],
        "class": "Feca",
        "description": "",
        "tranche": 200
      }
    ,
      "Osamodas SUPP [SOIN BOOST] 200 OPTI": {
        "image": "assets/builds/Osamodas SUPP [SOIN BOOST] 200 OPTI.png",
        "url": "https://zenithwakfu.com/builder/cefog",
        "keywords": ["Opti"],
        "class": "Osamodas",
        "description": "",
        "tranche": 200
      }
    ,
      "Osamodas SUPPORT [RETRAIT RES BOOST] 200 Low Cost": {
        "image": "assets/builds/Osamodas SUPPORT [RETRAIT RES BOOST] 200 Low Cost.png",
        "url": "https://zenithwakfu.com/builder/0dd6d",
        "keywords": ["Low Cost"],
        "class": "Osamodas",
        "description": "",
        "tranche": 200
      }
    ,
      "Osamodas SUPPORT [RETRAIT RES BOOST] 200 Mid-Cost": {
        "image": "assets/builds/Osamodas SUPPORT [RETRAIT RES BOOST] 200 Mid-Cost.png",
        "url": "https://zenithwakfu.com/builder/0992a",
        "keywords": ["Mid Cost"],
        "class": "Osamodas",
        "description": "",
        "tranche": 200
      }
    ,
  "Osamodas DPT [INVOC ENFLA] 200 OPTI": {
        "image": "assets/builds/Osamodas DPT [INVOC ENFLA] 200 OPTI.png",
        "url": "https://www.zenithwakfu.com/builder/0deed",
        "keywords": ["Opti"],
        "class": "Osamodas",
        "description": "",
        "tranche": 200
      }
    ,
      "Osamodas DPT [INVOC] 200 Low cost": {
        "image": "assets/builds/Osamodas DPT [INVOC] 200 Low cost.png",
        "url": "https://www.zenithwakfu.com/builder/63145",
        "keywords": ["Low Cost"],
        "class": "Osamodas",
        "description": "",
        "tranche": 200
      }
    ,
      "Osamodas DPT [DRAGOSA] 200 OPTI": {
        "image": "assets/builds/Osamodas DPT [DRAGOSA] 200 OPTI.png",
        "url": "https://www.zenithwakfu.com/builder/3bc3f",
        "keywords": ["Opti"],
        "class": "Osamodas",
        "description": "",
        "tranche": 200
      }
    ,
      "Enutrof HYBRIDE [SUPP DPT] 200 OPTI": {
        "image": "assets/builds/Enutrof HYBRIDE [SUPP DPT] 200 OPTI.png",
        "url": "https://zenithwakfu.com/builder/orsas",
        "keywords": ["Opti"],
        "class": "Enutrof",
        "description": "",
        "tranche": 200
      }
    ,
      "Enutrof DPT [MELEE] 200 Mid-Cost": {
        "image": "assets/builds/Enutrof DPT [MELEE] 200 Mid-Cost.png",
        "url": "https://zenithwakfu.com/builder/6213c",
        "keywords": ["Mid Cost"],
        "class": "Enutrof",
        "description": "",
        "tranche": 200
      }
    ,
      "Enutrof DPT [MELEE] 200 Low Cost": {
        "image": "assets/builds/Enutrof DPT [MELEE] 200 Low Cost.png",
        "url": "https://zenithwakfu.com/builder/eb294",
        "keywords": ["Low Cost"],
        "class": "Enutrof",
        "description": "",
        "tranche": 200
      }
    ,
      "Enutrof DPT [MELEE] 200 Opti": {
        "image": "assets/builds/Enutrof DPT [MELEE] 200 Opti.png",
        "url": "https://zenithwakfu.com/builder/c65f0",
        "keywords": ["Opti"],
        "class": "Enutrof",
        "description": "",
        "tranche": 200
      }
    ,
      "Enutrof SUPPORT [RETRAIT RES ET PM] 200 Low-Cost": {
        "image": "assets/builds/Enutrof SUPPORT [RETRAIT RES ET PM] 200 Low-Cost.png",
        "url": "https://zenithwakfu.com/builder/a913d",
        "keywords": ["Low Cost"],
        "class": "Enutrof",
        "description": "",
        "tranche": 200
      }
    ,
      "Enutrof SUPPORT [RETRAIT RES ET PM] 200 Mid-Cost": {
        "image": "assets/builds/Enutrof SUPPORT [RETRAIT RES ET PM] 200 Mid-Cost.png",
        "url": "https://zenithwakfu.com/builder/38333",
        "keywords": ["Mid Cost"],
        "class": "Enutrof",
        "description": "",
        "tranche": 200
      }
    ,
      "Enutrof SUPPORT [RETRAIT RES PM SOIN] 200 OPTI": {
        "image": "assets/builds/Enutrof SUPPORT [RETRAIT RES PM SOIN] 200 OPTI.png",
        "url": "https://zenithwakfu.com/builder/52cd1",
        "keywords": ["Opti"],
        "class": "Enutrof",
        "description": "Vous pouvez changer Engagement par Pacte Wakfu si vous voulez plus de volonté et un peu osef sur les soin !",
        "tranche": 200
      }
    ,
      "Sram DPT [MELEE] 200 OPTI": {
        "image": "assets/builds/Sram DPT [MELEE] 200 OPTI.png",
        "url": "https://zenithwakfu.com/builder/bmb46",
        "keywords": ["Opti"],
        "class": "Sram",
        "description": "",
        "tranche": 200
      }
    ,
      "Sram DPT [MELEE] 200 Low cost": {
        "image": "assets/builds/Sram DPT [MELEE] 200 Low cost.png",
        "url": "https://www.zenithwakfu.com/builder/ea84c",
        "keywords": ["Low Cost"],
        "class": "Sram",
        "description": "",
        "tranche": 200
      }
    ,
      "Sram DPT [MELEE] 200 Mid cost": {
        "image": "assets/builds/Sram DPT [MELEE] 200 Mid cost.png",
        "url": "https://www.zenithwakfu.com/builder/75017",
        "keywords": ["Mid Cost"],
        "class": "Sram",
        "description": "",
        "tranche": 200
      }
    ,
      "Sram DPT [MELEE] 200 Opti": {
        "image": "assets/builds/Sram DPT [MELEE] 200 Opti.png",
        "url": "https://www.zenithwakfu.com/builder/354d5",
        "keywords": ["Opti"],
        "class": "Sram",
        "description": "",
        "tranche": 200
      }
    ,
      "Xelor DPT [DISTANCE] 200 Mid cost": {
        "image": "assets/builds/Xelor DPT [DISTANCE] 200 Mid cost.png",
        "url": "https://www.zenithwakfu.com/builder/h2yd1",
        "keywords": ["Mid Cost"],
        "class": "Xelor",
        "description": "",
        "tranche": 200
      }
    ,
      "Xelor DPT [DISTANCE] 200 OPTI": {
        "image": "assets/builds/Xelor DPT [DISTANCE] 200 OPTI.png",
        "url": "https://www.zenithwakfu.com/builder/vlp2d",
        "keywords": ["Opti"],
        "class": "Xelor",
        "description": "",
        "tranche": 200
      }
    ,
      "Xelor SUPPORT [PLACEUR BOOST PA] OPTI": {
        "image": "assets/builds/Xelor SUPPORT [PLACEUR BOOST PA] OPTI.png",
        "url": "https://zenithwakfu.com/builder/542c8",
        "keywords": ["Opti"],
        "class": "Xelor",
        "description": "",
        "tranche": 200
      }
    ,
      "Xelor DPT [DISTANCE] 200 Ultra Opti": {
        "image": "assets/builds/Xelor DPT [DISTANCE] 200 Ultra Opti.png",
        "url": "https://www.zenithwakfu.com/builder/5bde9",
        "keywords": ["Opti"],
        "class": "Xelor",
        "description": "",
        "tranche": 200
      }
    ,
      "Xelor DPT [DISTANCE] 200 Low cost": {
        "image": "assets/builds/Xelor DPT [DISTANCE] 200 Low cost.png",
        "url": "https://www.zenithwakfu.com/builder/e0570",
        "keywords": ["Low Cost"],
        "class": "Xelor",
        "description": "",
        "tranche": 200
      }
    ,
      "Ecaflip SUPP [SOIN BOOST] 200 OPTI": {
        "image": "assets/builds/Ecaflip SUPP [SOIN BOOST] 200 OPTI.png",
        "url": "https://zenithwakfu.com/builder/knz1i",
        "keywords": ["Opti"],
        "class": "Ecaflip",
        "description": "",
        "tranche": 200
      }
    ,
      "Ecaflip DPT [NEUTRALITE] 200 OPTI": {
        "image": "assets/builds/Ecaflip DPT [NEUTRALITE] 200 OPTI.png",
        "url": "https://zenithwakfu.com/builder/56460",
        "keywords": ["Opti"],
        "class": "Ecaflip",
        "description": "",
        "tranche": 200
      }
    ,
      "Ecaflip SUPP [SOIN] 200 Low cost": {
        "image": "assets/builds/Ecaflip SUPP [SOIN] 200 Low cost.png",
        "url": "https://www.zenithwakfu.com/builder/046fa",
        "keywords": ["Opti"],
        "class": "Ecaflip",
        "description": "",
        "tranche": 200
      }
    ,
      "Eniripsa SUPPORT [SOIN] 200 OPTI": {
        "image": "assets/builds/Eniripsa SUPPORT [SOIN] 200 OPTI.png",
        "url": "https://www.zenithwakfu.com/builder/dvbua",
        "keywords": ["Opti"],
        "class": "Eniripsa",
        "description": "Eni opti 4 po > 7po via sentinelle",
        "tranche": 200
      }
    ,
      "Eniripsa SUPPORT [SOIN] 200 MID COST": {
        "image": "assets/builds/Eniripsa SUPPORT [SOIN] 200 MID COST.png",
        "url": "https://www.zenithwakfu.com/builder/361rq",
        "keywords": ["Mid Cost"],
        "class": "Eniripsa",
        "description": "",
        "tranche": 200
      }
    ,
      "Eniripsa SUPPORT [SOIN] 200 LOW COST": {
        "image": "assets/builds/Eniripsa SUPPORT [SOIN] 200 LOW COST.png",
        "url": "https://www.zenithwakfu.com/builder/e60ab",
        "keywords": ["Low Cost"],
        "class": "Eniripsa",
        "description": "",
        "tranche": 200
      }
    ,
      "Iop DPT [MELEE] 200 Mid Cost": {
      "image": "assets/builds/Iop DPT [MELEE] 200 Mid Cost.png",
      "url": "https://zenithwakfu.com/builder/475lu",
      "keywords": ["Mid Cost"],
      "class": "Iop",
      "description": "",
      "tranche": 200
    },
      "Iop DPT [FEU TERRE] 200 Mid Cost": {
        "image": "assets/builds/Iop DPT [FEU TERRE] 200 Mid Cost.png",
        "url": "https://zenithwakfu.com/builder/475lu",
        "keywords": ["Mid Cost"],
        "class": "Iop",
        "description": "",
        "tranche": 200
      }
    ,
      "Iop DPT [FEU TERRE] 200 OPTI": {
        "image": "assets/builds/Iop DPT [FEU TERRE] 200 OPTI.png",
        "url": "https://zenithwakfu.com/builder/jnhfm",
        "keywords": ["Opti"],
        "class": "Iop",
        "description": "Le stuff est marqué en 14 pa, et dit donc que la Ceinture est \"Pas valide\", mais hors combat vous êtes en 11/8 et donc ça marche. 2 Pa de M2M et 1 Pa de Force Vitale!",
        "tranche": 200
      }
    ,
      "Cra DPT [DEMESURE] 200 OPTI": {
        "image": "assets/builds/Cra DPT [DEMESURE] 200 OPTI.png",
        "url": "https://zenithwakfu.com/builder/wmzts",
        "keywords": ["Opti"],
        "class": "Cra",
        "description": "",
        "tranche": 200
      }
    ,
      "Cra DPT [TRI ELEMENT] 200 OPTI": {
        "image": "assets/builds/Cra DPT [TRI ELEMENT] 200 OPTI.png",
        "url": "https://zenithwakfu.com/builder/pxmwr",
        "keywords": ["Opti"],
        "class": "Cra",
        "description": "",
        "tranche": 200
      }
    ,
    "Sadida DPT [POISON] 200 OPTI": {
        "image": "assets/builds/Sadida DPT [POISON] 200 OPTI.png",
        "url": "https://zenithwakfu.com/builder/a8b6b",
        "keywords": ["Opti"],
        "class": "Sadida",
        "description": "",
        "tranche": 200
      }
  ,
    "Sadida DPT [POISON POUPEE] 200 OPTI": {
      "image": "assets/builds/Sadida DPT [POISON POUPEE] 200 OPTI.png",
      "url": "https://zenithwakfu.com/builder/be44c",
      "keywords": ["Opti"],
      "class": "Sadida",
      "description": "",
      "tranche": 200
    }
  ,
    "Sadida HYBRIDE [POUPEE] 200 OPTI": {
      "image": "assets/builds/Sadida HYBRIDE [POUPEE] 200 OPTI.png",
      "url": "https://www.zenithwakfu.com/builder/bd806",
      "keywords": ["Opti"],
      "class": "Sadida",
      "description": "",
      "tranche": 200
    }
  ,
    "Sacrieur DPT [MELEE ENFLA] 200 Mid cost": {
      "image": "assets/builds/Sacrieur DPT [MELEE ENFLA] 200 Mid cost.png",
      "url": "https://zenithwakfu.com/builder/5bad9",
      "keywords": ["Mid Cost"],
      "class": "Sacrieur",
      "description": "",
      "tranche": 200
    }
  ,
    "Sacrieur DPT [MELEE ENFLA] 200 Opti": {
      "image": "assets/builds/Sacrieur DPT [MELEE ENFLA] 200 Opti.png",
      "url": "https://www.zenithwakfu.com/builder/1c860",
      "keywords": ["Opti"],
      "class": "Sacrieur",
      "description": "",
      "tranche": 200
    }
  ,
    "Sacrieur DPT [MELEE] 200 Low Cost": {
      "image": "assets/builds/Sacrieur DPT [MELEE] 200 Low Cost.png",
      "url": "https://www.zenithwakfu.com/builder/70ee0",
      "keywords": ["Low Cost"],
      "class": "Sacrieur",
      "description": "",
      "tranche": 200
    }
  ,
    "Pandawa SUPPORT [PLACEUR] 200 OPTI": {
      "image": "assets/builds/Pandawa SUPPORT [PLACEUR] 200 OPTI.png",
      "url": "https://www.zenithwakfu.com/builder/8e6d2",
      "keywords": ["Opti"],
      "class": "Pandawa",
      "description": "",
      "tranche": 200
    }
  ,
    "Pandawa SUPPORT [PLACEUR] 200 Low Cost": {
      "image": "assets/builds/Pandawa SUPPORT [PLACEUR] 200 Low Cost.png",
      "url": "https://www.zenithwakfu.com/builder/452db",
      "keywords": ["Low Cost"],
      "class": "Pandawa",
      "description": "",
      "tranche": 200
    }
  ,
    "Roublard DPT [Direct ET Bombes] 200 MID COST": {
      "image": "assets/builds/Roublard DPT [Direct ET Bombes] 200 MID COST.png",
      "url": "https://www.zenithwakfu.com/builder/gctwk",
      "keywords": ["Mid Cost"],
      "class": "Roublard",
      "description": "",
      "tranche": 200
    }
  ,
    "Roublard DPT [Direct ET Bombes] 200 OPTI": {
      "image": "assets/builds/Roublard DPT [Direct ET Bombes] 200 OPTI.png",
      "url": "https://www.zenithwakfu.com/builder/fvfbg",
      "keywords": ["Opti"],
      "class": "Roublard",
      "description": "Vous pouvez mettre une dague Erreotype si vous préferez avoir 6 PW (bien que 5 puissent suffir pour maximiser la puissance brute avant un burst ou une explosion si vous êtres très à l'aise sur la gestion de vos PW en combat). Pour rester hybride Vous pouvez jouer aussi Excès I, calibrage, à votre convenance ! ",
      "tranche": 200
    }
  ,
    "Roublard DPT [Direct ET Bombes] 200 LOWCOST": {
      "image": "assets/builds/Roublard DPT [Direct ET Bombes] 200 LOWCOST.png",
      "url": "https://zenithwakfu.com/builder/hbprf",
      "keywords": ["Low Cost"],
      "class": "Roublard",
      "description": "Les chasses vertes sur la ceinture sont envisageables aussi. La maîtrise dos est bien même si moins générique. Mais surtout cela permet de switch pour des résistances feu (importantes en 200).",
      "tranche": 200
    }
  ,
    "Zobal DPT [MELEE COLISION] 200 OPTI": {
      "image": "assets/builds/Zobal DPT [MELEE COLISION] 200 OPTI.png",
      "url": "https://www.zenithwakfu.com/builder/144d1",
      "keywords": ["Opti"],
      "class": "Zobal",
      "description": "Ne fonctionne pas/très mal sur tout les mobs/boss qui sont stabilisé (ou 3x3)",
      "tranche": 200
    }
  ,
    "Zobal SUPPORT [SOIN PLACEUR] 200 Low cost": {
      "image": "assets/builds/Zobal SUPPORT [SOIN PLACEUR] 200 Low cost.png",
      "url": "https://www.zenithwakfu.com/builder/7629c",
      "keywords": ["Low Cost"],
      "class": "Zobal",
      "description": "",
      "tranche": 200
    }
  ,
    "Zobal SUPPORT [SOIN PLACEUR] 200 Opti": {
      "image": "assets/builds/Zobal SUPPORT [SOIN PLACEUR] 200 Opti.png",
      "url": "https://www.zenithwakfu.com/builder/c8d62",
      "keywords": ["Opti"],
      "class": "Zobal",
      "description": "",
      "tranche": 200
    }
  ,
    "Zobal SUPPORT [PLACEUR TANKY] 200 Opti": {
      "image": "assets/builds/Zobal SUPPORT [PLACEUR TANKY] 200 Opti.png",
      "url": "https://www.zenithwakfu.com/builder/e2236",
      "keywords": ["Opti"],
      "class": "Zobal",
      "description": "",
      "tranche": 200
    }
  ,
    "Ouginak DPT [DIRECT] 200 Opti": {
      "image": "assets/builds/Ouginak DPT [DIRECT] 200 Opti.png",
      "url": "https://zenithwakfu.com/builder/h5drc",
      "keywords": ["Opti"],
      "class": "Ouginak",
      "description": "",
      "tranche": 200
    }
  ,
    "Ouginak DPT [DIRECT] 200 Opti Sans CDO": {
      "image": "assets/builds/Ouginak DPT [DIRECT] 200 Opti Sans CDO.png",
      "url": "https://zenithwakfu.com/builder/tgmnw",
      "keywords": ["Opti"],
      "class": "Ouginak",
      "description": "",
      "tranche": 200
    }
  ,
    "Steamer DPT [Distance] 200 OPTI": {
      "image": "assets/builds/Steamer DPT [Distance] 200 OPTI.png",
      "url": "https://www.zenithwakfu.com/builder/m6f9c",
      "keywords": ["Opti"],
      "class": "Steamer",
      "description": "",
      "tranche": 200
    }
  ,
    "Steamer DPT [ARMURE] 200 OPTI": {
      "image": "assets/builds/Steamer DPT [ARMURE] 200 OPTI.png",
      "url": "https://zenithwakfu.com/builder/jdpan",
      "keywords": ["Opti"],
      "class": "Steamer",
      "description": "",
      "tranche": 200
    }
  ,
    "Elio DPT [DISTANCE TRI ELEMENT] 200 OPTI": {
      "image": "assets/builds/Elio DPT [DISTANCE TRI ELEMENT] 200 OPTI.png",
      "url": "https://zenithwakfu.com/builder/6cgxn",
      "keywords": ["Opti"],
      "class": "Eliotrope",
      "description": "",
      "tranche": 200
    }
  ,
    "Elio DPT [DISTANCE] 200 Mid cost": {
      "image": "assets/builds/Elio DPT [DISTANCE] 200 Mid cost.png",
      "url": "https://zenithwakfu.com/builder/1vybz",
      "keywords": ["Mid Cost"],
      "class": "Eliotrope",
      "description": "",
      "tranche": 200
    }
  ,
    "Elio DPT [DISTANCE] 200 Low cost": {
      "image": "assets/builds/Elio DPT [DISTANCE] 200 Low cost.png",
      "url": "https://www.zenithwakfu.com/builder/debfd",
      "keywords": ["Low Cost"],
      "class": "Eliotrope",
      "description": "",
      "tranche": 200
    }
  ,
    "Huppermage DPT [MELEE] 200 Mid-Cost": {
      "image": "assets/builds/Huppermage DPT [MELEE] 200 Mid-Cost.png",
      "url": "https://zenithwakfu.com/builder/c8f01",
      "keywords": ["Mid Cost"],
      "class": "Huppermage",
      "description": "",
      "tranche": 200
    }
  ,
    "Huppermage DPT [MELEE] 200 Low-Cost": {
      "image": "assets/builds/Huppermage DPT [MELEE] 200 Low-Cost.png",
      "url": "https://zenithwakfu.com/builder/4ef47",
      "keywords": ["Low Cost"],
      "class": "Huppermage",
      "description": "",
      "tranche": 200
    }
  ,
    "Huppermage DPT [MELEE] 200 OPTI": {
      "image": "assets/builds/Huppermage DPT [MELEE] 200 OPTI.png",
      "url": "https://zenithwakfu.com/builder/4ef47",
      "keywords": ["Opti"],
      "class": "Huppermage",
      "description": "Hupper principalement maîtrise elem avec un peu de mêlée/crit, le but est d'avoir 100% CC tout seul et de se jouer avec le gameplay Constant Terre, via les Passifs Extensions des Sens et Transcendance Runique",
      "tranche": 200
    }
  ,
    "Huppermage DPT [NEUTRALITE] 200 OPTI": {
      "image": "assets/builds/Huppermage DPT [NEUTRALITE] OPTI.png",
      "url": "https://www.zenithwakfu.com/builder/b5e8b",
      "keywords": ["Opti"],
      "class": "Huppermage",
      "description": "",
      "tranche": 200
    }
  ,
    "Iop DPT [Terre Feu] 155 Mid cost": {
      "image": "assets/builds/Iop DPT [Terre Feu] 155 Mid cost.png",
      "url": "https://zenithwakfu.com/builder/wu8lt",
      "keywords": ["Mid Cost"],
      "class": "Iop",
      "description": "Stuff principalement axé pour zoning avec Colère + Ravage. Prioriser les PP avec les 7pm pour avoir 24 di !",
      "tranche": 155
    }
  ,
    "Steamer SUPPORT [Armure] 155 OPTI": {
      "image": "assets/builds/Steamer SUPPORT [Armure] 155 OPTI.png",
      "url": "https://www.zenithwakfu.com/builder/aylgz",
      "keywords": ["Opti"],
      "class": "Steamer",
      "description": "Merci Shodan pour ce build ! ",
      "tranche": 155
    }
  ,
    "Ecaflip SUPP [SOIN BOOST] 215 OPTI": {
      "image": "assets/builds/Ecaflip SUPP [SOIN BOOST] 215 OPTI.png",
      "url": "https://zenithwakfu.com/builder/b4c40",
      "keywords": ["Opti"],
      "class": "Ecaflip",
      "description": "",
      "tranche": 215
    }
  ,
    "Xelor DPT [Distance] 215 OPTI": {
      "image": "assets/builds/Xelor DPT [Distance] 215 OPTI.png",
      "url": "https://www.zenithwakfu.com/builder/e0227",
      "keywords": ["Opti"],
      "class": "Xelor",
      "description": "",
      "tranche": 215
    }
  ,
    "Iop DPT [Terre Feu] 215 OPTI": {
      "image": "assets/builds/Iop DPT [Terre Feu] 215 OPTI.png",
      "url": "https://zenithwakfu.com/builder/n5wmz",
      "keywords": ["Opti"],
      "class": "Iop",
      "description": "",
      "tranche": 215
    }
  ,
    "Feca SUPP [ARMURE] 215 Full opti": {
      "image": "assets/builds/Feca SUPP [ARMURE] 215 Full opti.png",
      "url": "https://zenithwakfu.com/builder/n5wmz",
      "keywords": ["Opti"],
      "class": "Feca",
      "description": "",
      "tranche": 215
    }
  ,
    "Feca SUPPORT [PAISIBLE] 230 opti": {
      "image": "assets/builds/Feca SUPPORT [PAISIBLE] 230 opti.png",
      "url": "https://www.zenithwakfu.com/builder/19adb",
      "keywords": ["Opti"],
      "class": "Feca",
      "description": "",
      "tranche": 230
    }
  ,
    "Osamodas SUPPORT [ARMURE BOOST] OPTI": {
      "image": "assets/builds/Osamodas SUPPORT [ARMURE BOOST] OPTI.png",
      "url": "https://zenithwakfu.com/builder/tlfqg",
      "keywords": ["Opti"],
      "class": "Osamodas",
      "description": "",
      "tranche": 230
    }
  ,
    "Osamodas SUPPORT [RETRAIT RES BOOST] 230 Low Cost": {
      "image": "assets/builds/Osamodas SUPPORT [RETRAIT RES BOOST] 230 Low Cost.png",
      "url": "https://www.zenithwakfu.com/builder/89400",
      "keywords": ["Low Cost"],
      "class": "Osamodas",
      "description": "",
      "tranche": 230
    }
,
  "Osamodas SUPPORT [ARMURE RETRAIT RES] 230 OPTI": {
    "image": "assets/builds/Osamodas SUPPORT [ARMURE RETRAIT RES] 230 OPTI.png",
    "url": "https://zenithwakfu.com/builder/tlfqg",
    "keywords": ["Opti"],
    "class": "Osamodas",
    "description": "",
    "tranche": 230
  }
,
  "Enutrof DPT [MELEE] 230 OPTI": {
    "image": "assets/builds/Enutrof DPT [MELEE] 230 OPTI.png",
    "url": "https://zenithwakfu.com/builder/y9esf",
    "keywords": ["Opti"],
    "class": "Enutrof",
    "description": "",
    "tranche": 230
  }
,
  "Enutrof SUPPORT [RETRAIT RES PM] 230 OPTI": {
    "image": "assets/builds/Enutrof SUPPORT [RETRAIT RES PM] 230 OPTI.png",
    "url": "https://zenithwakfu.com/builder/4d464",
    "keywords": ["Opti"],
    "class": "Enutrof",
    "description": "",
    "tranche": 230
  }
,
  "Enutrof SUPPORT [RETRAIT RES PM] 230 Mid Cost": {
    "image": "assets/builds/Enutrof SUPPORT [RETRAIT RES PM] 230 Mid Cost.png",
    "url": "https://zenithwakfu.com/builder/8331a",
    "keywords": ["Mid Cost"],
    "class": "Enutrof",
    "description": "",
    "tranche": 230
  }
,
  "Enutrof SUPPORT [RETRAIT RES SOIN SECONDAIRE] 230 OPTI": {
    "image": "assets/builds/Enutrof SUPPORT [RETRAIT RES SOIN SECONDAIRE] 230 OPTI.png",
    "url": "https://zenithwakfu.com/builder/deeed",
    "keywords": ["Opti"],
    "class": "Enutrof",
    "description": "",
    "tranche": 230
  }
,
  "Sram DPT [MELEE] 230 Mid cost": {
    "image": "assets/builds/Sram DPT [MELEE] 230 Mid cost.png",
    "url": "https://zenithwakfu.com/builder/f64a4",
    "keywords": ["Opti"],
    "class": "Sram",
    "description": "Merci Yosuu pour ce build !",
    "tranche": 230
  }
,
  "Xelor DPT [ROUAGE] 230 OPTI": {
    "image": "assets/builds/Xelor DPT [ROUAGE] 230 OPTI.png",
    "url": "https://zenithwakfu.com/builder/fcf75",
    "keywords": ["Opti"],
    "class": "Xelor",
    "description": "Gameplay ROUAGE ! Très compliqué à mettre en place, n'existe pas vraiment en Low Cost",
    "tranche": 230
  }
,
  "Xelor DPT [DISTANCE] 230 Low Cost": {
    "image": "assets/builds/Xelor DPT [DISTANCE] 230 Low Cost.png",
    "url": "https://zenithwakfu.com/builder/48768",
    "keywords": ["Low Cost"],
    "class": "Xelor",
    "description": "",
    "tranche": 230
  }
,
  "Xelor DPT [DISTANCE] 230 OPTI": {
    "image": "assets/builds/Xelor DPT [DISTANCE] 230 OPTI.png",
    "url": "https://zenithwakfu.com/builder/c6lu6",
    "keywords": ["Opti"],
    "class": "Xelor",
    "description": "",
    "tranche": 230
  }
,
  "Ecaflip SUPP [PUCIF] 230 OPTI": {
    "image": "assets/builds/Ecaflip SUPP [PUCIF] 230 OPTI.png",
    "url": "https://zenithwakfu.com/builder/maykz",
    "keywords": ["Opti"],
    "class": "Ecaflip",
    "description": "Gameplay SOIN DELAYER !",
    "tranche": 230
  }
,
  "Eniripsa SUPPORT [SOIN ARMURE] 230 OPTI": {
    "image": "assets/builds/Eniripsa SUPPORT [SOIN ARMURE] 230 OPTI.png",
    "url": "https://www.zenithwakfu.com/builder/28e78",
    "keywords": ["Opti"],
    "class": "Eniripsa",
    "description": "Gameplay autour de DISTRIBUTION pour donner de l'armure !",
    "tranche": 230
  }
,
  "Eniripsa SUPPORT [SOIN PUR] 230 OPTI": {
    "image": "assets/builds/Eniripsa SUPPORT [SOIN PUR] 230 OPTI.png",
    "url": "https://www.zenithwakfu.com/builder/4b4a5",
    "keywords": ["Opti"],
    "class": "Eniripsa",
    "description": "",
    "tranche": 230
  }
,
  "Iop DPT [MELEE] 230 OPTI": {
    "image": "assets/builds/Iop DPT [MELEE] 230 OPTI.png",
    "url": "https://zenithwakfu.com/builder/lj7g1",
    "keywords": ["Opti"],
    "class": "Iop",
    "description": "",
    "tranche": 230
  }
,
  "Cra DPT [DEMESURE] 230 Mid Cost": {
    "image": "assets/builds/Cra DPT [DEMESURE] 230 Mid Cost.png",
    "url": "https://zenithwakfu.com/builder/zgatz",
    "keywords": ["Mid Cost"],
    "class": "Cra",
    "description": "Investir dans \"Démesuré\" permet d'avoir facilement beaucoup de CC même en mid cost !",
    "tranche": 230
  }
,
  "Cra DPT [DISTANCE BERSERK] 230 OPTI": {
    "image": "assets/builds/Cra DPT [DISTANCE BERSERK] 230 OPTI.png",
    "url": "https://www.zenithwakfu.com/builder/63xpq",
    "keywords": ["Mid Cost"],
    "class": "Cra",
    "description": "Profiter de \"Carapace Sanguine\" pour avoir du shield et perma -50% (Build test, fonctionnel mais pas essayé en situation)",
    "tranche": 230
  }
,
  "Cra DPT [TRI ELEMENT] 230 OPTI": {
    "image": "assets/builds/Cra DPT [TRI ELEMENT] 230 OPTI.png",
    "url": "https://zenithwakfu.com/builder/qmz1r",
    "keywords": ["Mid Cost"],
    "class": "Cra",
    "description": "Build Tri-Element, adaptez vous en DJ et taper sur les faiblesse élementaires !",
    "tranche": 230
  }
,
  "Sadida DPT [POISON] 230 Opti": {
    "image": "assets/builds/Sadida DPT [POISON] 230 Opti.png",
    "url": "https://zenithwakfu.com/builder/04ff3",
    "keywords": ["Opti"],
    "class": "Sadida",
    "description": "",
    "tranche": 230
  }
,
  "Sadida SUPPORT [SOIN SHIELD] 230 Opti": {
    "image": "assets/builds/Sadida SUPPORT [SOIN SHIELD] 230 Opti.png",
    "url": "https://www.zenithwakfu.com/builder/42025",
    "keywords": ["Opti"],
    "class": "Sadida",
    "description": "",
    "tranche": 230
  }
};

export { BUILD_DATA, CLASS_LIST };

