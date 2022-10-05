import {Abi} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0xb02c4aaca9884eb2977faa082865d6573cf5f549d43b8a3dfbd929e7a3e9ed35",
    "language": "ink! 3.3.0",
    "compiler": "rustc 1.65.0-nightly"
  },
  "contract": {
    "name": "button",
    "version": "0.1.0",
    "authors": [
      "Cardinal Cryptography"
    ]
  },
  "V3": {
    "spec": {
      "constructors": [
        {
          "args": [
            {
              "label": "ticket_token",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 2
              }
            },
            {
              "label": "reward_token",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 2
              }
            },
            {
              "label": "button_lifetime",
              "type": {
                "displayName": [
                  "BlockNumber"
                ],
                "type": 1
              }
            },
            {
              "label": "scoring",
              "type": {
                "displayName": [
                  "Scoring"
                ],
                "type": 6
              }
            }
          ],
          "docs": [],
          "label": "new",
          "payable": false,
          "selector": "0x9bae9d5e"
        }
      ],
      "docs": [],
      "events": [
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "reward_token",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 2
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "ticket_token",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 2
              }
            },
            {
              "docs": [],
              "indexed": false,
              "label": "start",
              "type": {
                "displayName": [
                  "BlockNumber"
                ],
                "type": 1
              }
            },
            {
              "docs": [],
              "indexed": false,
              "label": "deadline",
              "type": {
                "displayName": [
                  "BlockNumber"
                ],
                "type": 1
              }
            }
          ],
          "docs": [
            " Event emitted when TheButton is created"
          ],
          "label": "ButtonCreated"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "iteration",
              "type": {
                "displayName": [
                  "u64"
                ],
                "type": 0
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "by",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 2
              }
            },
            {
              "docs": [],
              "indexed": false,
              "label": "when",
              "type": {
                "displayName": [
                  "BlockNumber"
                ],
                "type": 1
              }
            }
          ],
          "docs": [
            " Event emitted when TheButton is pressed"
          ],
          "label": "ButtonPressed"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": false,
              "label": "when",
              "type": {
                "displayName": [
                  "BlockNumber"
                ],
                "type": 1
              }
            }
          ],
          "docs": [
            " Event emitted when the finished game is reset and pressiah is rewarded"
          ],
          "label": "GameReset"
        }
      ],
      "messages": [
        {
          "args": [],
          "docs": [
            " Returns the current deadline",
            "",
            " Deadline is the block number at which the game will end if there are no more participants"
          ],
          "label": "deadline",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "BlockNumber"
            ],
            "type": 1
          },
          "selector": "0x1f48bede"
        },
        {
          "args": [],
          "docs": [
            " Returns the current iteration number"
          ],
          "label": "iteration",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "u64"
            ],
            "type": 0
          },
          "selector": "0x84ad923e"
        },
        {
          "args": [],
          "docs": [
            " Returns the buttons status"
          ],
          "label": "is_dead",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "bool"
            ],
            "type": 7
          },
          "selector": "0x958a890a"
        },
        {
          "args": [],
          "docs": [
            " Returns the last player who pressed the button.",
            " If button is dead, this is The Pressiah."
          ],
          "label": "last_presser",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "Option"
            ],
            "type": 8
          },
          "selector": "0x713e8f6c"
        },
        {
          "args": [],
          "docs": [
            " Returns the current access control contract address"
          ],
          "label": "access_control",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "AccountId"
            ],
            "type": 2
          },
          "selector": "0xf8e6bc11"
        },
        {
          "args": [],
          "docs": [
            " Returns address of the game's reward token"
          ],
          "label": "reward_token",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "AccountId"
            ],
            "type": 2
          },
          "selector": "0x0b067d01"
        },
        {
          "args": [],
          "docs": [
            " Returns address of the game's ticket token"
          ],
          "label": "ticket_token",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "AccountId"
            ],
            "type": 2
          },
          "selector": "0xda49c9d7"
        },
        {
          "args": [],
          "docs": [
            " Returns own code hash"
          ],
          "label": "code_hash",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "ButtonResult"
            ],
            "type": 9
          },
          "selector": "0xbd69cea7"
        },
        {
          "args": [],
          "docs": [
            " Presses the button",
            "",
            " If called on alive button, instantaneously mints reward tokens to the caller"
          ],
          "label": "press",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "ButtonResult"
            ],
            "type": 15
          },
          "selector": "0x55d7a21d"
        },
        {
          "args": [],
          "docs": [
            " Resets the game",
            "",
            " Erases the storage and pays award to the Pressiah",
            " Can be called by any account on behalf of a player",
            " Can only be called after button's deadline"
          ],
          "label": "reset",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "ButtonResult"
            ],
            "type": 15
          },
          "selector": "0xdbd37e6c"
        },
        {
          "args": [
            {
              "label": "new_access_control",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 2
              }
            }
          ],
          "docs": [
            " Sets new access control contract address",
            "",
            " Should only be called by the contract owner",
            " Implementing contract is responsible for setting up proper AccessControl"
          ],
          "label": "set_access_control",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "ButtonResult"
            ],
            "type": 15
          },
          "selector": "0x5c864ac6"
        },
        {
          "args": [],
          "docs": [
            " Terminates the contract",
            "",
            " Should only be called by the contract Owner"
          ],
          "label": "terminate",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "ButtonResult"
            ],
            "type": 15
          },
          "selector": "0x476d839f"
        }
      ]
    },
    "storage": {
      "cell": {
        "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "ty": 0
      }
    },
    "types": [
      {
        "id": 0,
        "type": {
          "def": {
            "primitive": "u64"
          }
        }
      },
      {
        "id": 1,
        "type": {
          "def": {
            "primitive": "u32"
          }
        }
      },
      {
        "id": 2,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 3,
                  "typeName": "[u8; 32]"
                }
              ]
            }
          },
          "path": [
            "ink_env",
            "types",
            "AccountId"
          ]
        }
      },
      {
        "id": 3,
        "type": {
          "def": {
            "array": {
              "len": 32,
              "type": 4
            }
          }
        }
      },
      {
        "id": 4,
        "type": {
          "def": {
            "primitive": "u8"
          }
        }
      },
      {
        "id": 5,
        "type": {
          "def": {
            "primitive": "u128"
          }
        }
      },
      {
        "id": 6,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "EarlyBirdSpecial"
                },
                {
                  "index": 1,
                  "name": "BackToTheFuture"
                },
                {
                  "index": 2,
                  "name": "ThePressiahCometh"
                }
              ]
            }
          },
          "path": [
            "button",
            "button_game",
            "Scoring"
          ]
        }
      },
      {
        "id": 7,
        "type": {
          "def": {
            "primitive": "bool"
          }
        }
      },
      {
        "id": 8,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "None"
                },
                {
                  "fields": [
                    {
                      "type": 2
                    }
                  ],
                  "index": 1,
                  "name": "Some"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 2
            }
          ],
          "path": [
            "Option"
          ]
        }
      },
      {
        "id": 9,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 10
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 11
                    }
                  ],
                  "index": 1,
                  "name": "Err"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 10
            },
            {
              "name": "E",
              "type": 11
            }
          ],
          "path": [
            "Result"
          ]
        }
      },
      {
        "id": 10,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 3,
                  "typeName": "[u8; 32]"
                }
              ]
            }
          },
          "path": [
            "ink_env",
            "types",
            "Hash"
          ]
        }
      },
      {
        "id": 11,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "BeforeDeadline"
                },
                {
                  "index": 1,
                  "name": "AfterDeadline"
                },
                {
                  "fields": [
                    {
                      "type": 12,
                      "typeName": "Role"
                    }
                  ],
                  "index": 2,
                  "name": "MissingRole"
                },
                {
                  "fields": [
                    {
                      "type": 13,
                      "typeName": "PSP22Error"
                    }
                  ],
                  "index": 3,
                  "name": "PSP22Error"
                },
                {
                  "fields": [
                    {
                      "type": 14,
                      "typeName": "String"
                    }
                  ],
                  "index": 4,
                  "name": "InkEnvError"
                },
                {
                  "index": 5,
                  "name": "CantRetrieveOwnCodeHash"
                }
              ]
            }
          },
          "path": [
            "button",
            "errors",
            "GameError"
          ]
        }
      },
      {
        "id": 12,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 2,
                      "typeName": "AccountId"
                    }
                  ],
                  "index": 0,
                  "name": "Admin"
                },
                {
                  "fields": [
                    {
                      "type": 2,
                      "typeName": "AccountId"
                    }
                  ],
                  "index": 1,
                  "name": "Owner"
                },
                {
                  "fields": [
                    {
                      "type": 10,
                      "typeName": "Hash"
                    }
                  ],
                  "index": 2,
                  "name": "Initializer"
                }
              ]
            }
          },
          "path": [
            "access_control",
            "access_control",
            "Role"
          ]
        }
      },
      {
        "id": 13,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 14,
                      "typeName": "String"
                    }
                  ],
                  "index": 0,
                  "name": "Custom"
                },
                {
                  "index": 1,
                  "name": "InsufficientBalance"
                },
                {
                  "index": 2,
                  "name": "InsufficientAllowance"
                },
                {
                  "index": 3,
                  "name": "ZeroRecipientAddress"
                },
                {
                  "index": 4,
                  "name": "ZeroSenderAddress"
                },
                {
                  "fields": [
                    {
                      "type": 14,
                      "typeName": "String"
                    }
                  ],
                  "index": 5,
                  "name": "SafeTransferCheckFailed"
                }
              ]
            }
          },
          "path": [
            "openbrush_contracts",
            "traits",
            "errors",
            "psp22",
            "PSP22Error"
          ]
        }
      },
      {
        "id": 14,
        "type": {
          "def": {
            "primitive": "str"
          }
        }
      },
      {
        "id": 15,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 16
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 11
                    }
                  ],
                  "index": 1,
                  "name": "Err"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 16
            },
            {
              "name": "E",
              "type": 11
            }
          ],
          "path": [
            "Result"
          ]
        }
      },
      {
        "id": 16,
        "type": {
          "def": {
            "tuple": []
          }
        }
      }
    ]
  }
}

const _abi = new Abi(metadata)

export function decodeEvent(hex: string): Event {
  return _abi.decodeEvent(hex)
}

export function decodeMessage(hex: string): Message {
  return _abi.decodeMessage(hex)
}

export function decodeConstructor(hex: string): Constructor {
  return _abi.decodeConstructor(hex)
}

export type Event = Event_ButtonCreated | Event_ButtonPressed | Event_GameReset

export interface Event_ButtonCreated {
  __kind: 'ButtonCreated'
  rewardToken: AccountId
  ticketToken: AccountId
  start: BlockNumber
  deadline: BlockNumber
}

export interface Event_ButtonPressed {
  __kind: 'ButtonPressed'
  iteration: u64
  by: AccountId
  when: BlockNumber
}

export interface Event_GameReset {
  __kind: 'GameReset'
  when: BlockNumber
}

export type Message = Message_deadline | Message_iteration | Message_is_dead | Message_last_presser | Message_access_control | Message_reward_token | Message_ticket_token | Message_code_hash | Message_press | Message_reset | Message_set_access_control | Message_terminate

/**
 *  Returns the current deadline
 * 
 *  Deadline is the block number at which the game will end if there are no more participants
 */
export interface Message_deadline {
  __kind: 'deadline'
}

/**
 *  Returns the current iteration number
 */
export interface Message_iteration {
  __kind: 'iteration'
}

/**
 *  Returns the buttons status
 */
export interface Message_is_dead {
  __kind: 'is_dead'
}

/**
 *  Returns the last player who pressed the button.
 *  If button is dead, this is The Pressiah.
 */
export interface Message_last_presser {
  __kind: 'last_presser'
}

/**
 *  Returns the current access control contract address
 */
export interface Message_access_control {
  __kind: 'access_control'
}

/**
 *  Returns address of the game's reward token
 */
export interface Message_reward_token {
  __kind: 'reward_token'
}

/**
 *  Returns address of the game's ticket token
 */
export interface Message_ticket_token {
  __kind: 'ticket_token'
}

/**
 *  Returns own code hash
 */
export interface Message_code_hash {
  __kind: 'code_hash'
}

/**
 *  Presses the button
 * 
 *  If called on alive button, instantaneously mints reward tokens to the caller
 */
export interface Message_press {
  __kind: 'press'
}

/**
 *  Resets the game
 * 
 *  Erases the storage and pays award to the Pressiah
 *  Can be called by any account on behalf of a player
 *  Can only be called after button's deadline
 */
export interface Message_reset {
  __kind: 'reset'
}

/**
 *  Sets new access control contract address
 * 
 *  Should only be called by the contract owner
 *  Implementing contract is responsible for setting up proper AccessControl
 */
export interface Message_set_access_control {
  __kind: 'set_access_control'
  newAccessControl: AccountId
}

/**
 *  Terminates the contract
 * 
 *  Should only be called by the contract Owner
 */
export interface Message_terminate {
  __kind: 'terminate'
}

export type Constructor = Constructor_new

export interface Constructor_new {
  __kind: 'new'
  ticketToken: AccountId
  rewardToken: AccountId
  buttonLifetime: BlockNumber
  scoring: Scoring
}

export type AccountId = Uint8Array

export type BlockNumber = number

export type u64 = bigint

export type Scoring = Scoring_EarlyBirdSpecial | Scoring_BackToTheFuture | Scoring_ThePressiahCometh

export interface Scoring_EarlyBirdSpecial {
  __kind: 'EarlyBirdSpecial'
}

export interface Scoring_BackToTheFuture {
  __kind: 'BackToTheFuture'
}

export interface Scoring_ThePressiahCometh {
  __kind: 'ThePressiahCometh'
}

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
