// https://www.terraform.io/docs/providers/oci/r/waas_waas_policy.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "additional_domains": {
        "type": [
          "list",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "cname": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "domain": {
        "type": "string",
        "required": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "origin_groups": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "label": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "origin_group": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "origin": {
                    "type": "string",
                    "required": true
                  },
                  "weight": {
                    "type": "number",
                    "optional": true
                  }
                }
              },
              "min_items": 1
            }
          }
        }
      },
      "origins": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "http_port": {
              "type": "number",
              "optional": true
            },
            "https_port": {
              "type": "number",
              "optional": true
            },
            "label": {
              "type": "string",
              "required": true
            },
            "uri": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "custom_headers": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "name": {
                    "type": "string",
                    "required": true
                  },
                  "value": {
                    "type": "string",
                    "required": true
                  }
                }
              }
            }
          }
        }
      },
      "policy_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "certificate_id": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "cipher_group": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "client_address_header": {
              "type": "string",
              "optional": true
            },
            "is_behind_cdn": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "is_cache_control_respected": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "is_https_enabled": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "is_https_forced": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "is_origin_compression_enabled": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "is_response_buffering_enabled": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "is_sni_enabled": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "tls_protocols": {
              "type": [
                "list",
                "string"
              ],
              "optional": true,
              "computed": true
            },
            "websocket_path_prefixes": {
              "type": [
                "list",
                "string"
              ],
              "optional": true,
              "computed": true
            }
          },
          "block_types": {
            "health_checks": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "expected_response_code_group": {
                    "type": [
                      "list",
                      "string"
                    ],
                    "optional": true,
                    "computed": true
                  },
                  "expected_response_text": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "headers": {
                    "type": [
                      "map",
                      "string"
                    ],
                    "optional": true,
                    "computed": true
                  },
                  "healthy_threshold": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "interval_in_seconds": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "is_enabled": {
                    "type": "bool",
                    "optional": true,
                    "computed": true
                  },
                  "is_response_text_check_enabled": {
                    "type": "bool",
                    "optional": true,
                    "computed": true
                  },
                  "method": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "path": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "timeout_in_seconds": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "unhealthy_threshold": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  }
                }
              },
              "max_items": 1
            },
            "load_balancing_method": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "domain": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "expiration_time_in_seconds": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "method": {
                    "type": "string",
                    "required": true
                  },
                  "name": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "waf_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "origin": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "origin_groups": {
              "type": [
                "list",
                "string"
              ],
              "optional": true,
              "computed": true
            }
          },
          "block_types": {
            "access_rules": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "action": {
                    "type": "string",
                    "required": true
                  },
                  "block_action": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "block_error_page_code": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "block_error_page_description": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "block_error_page_message": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "block_response_code": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "bypass_challenges": {
                    "type": [
                      "list",
                      "string"
                    ],
                    "optional": true,
                    "computed": true
                  },
                  "captcha_footer": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "captcha_header": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "captcha_submit_label": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "captcha_title": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "name": {
                    "type": "string",
                    "required": true
                  },
                  "redirect_response_code": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "redirect_url": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  }
                },
                "block_types": {
                  "criteria": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "condition": {
                          "type": "string",
                          "required": true
                        },
                        "is_case_sensitive": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
                        },
                        "value": {
                          "type": "string",
                          "required": true
                        }
                      }
                    },
                    "min_items": 1
                  },
                  "response_header_manipulation": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "action": {
                          "type": "string",
                          "required": true
                        },
                        "header": {
                          "type": "string",
                          "required": true
                        },
                        "value": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        }
                      }
                    }
                  }
                }
              }
            },
            "address_rate_limiting": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "allowed_rate_per_address": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "block_response_code": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "is_enabled": {
                    "type": "bool",
                    "required": true
                  },
                  "max_delayed_count_per_address": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  }
                }
              },
              "max_items": 1
            },
            "caching_rules": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "action": {
                    "type": "string",
                    "required": true
                  },
                  "caching_duration": {
                    "type": "string",
                    "optional": true
                  },
                  "client_caching_duration": {
                    "type": "string",
                    "optional": true
                  },
                  "is_client_caching_enabled": {
                    "type": "bool",
                    "optional": true,
                    "computed": true
                  },
                  "key": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "name": {
                    "type": "string",
                    "required": true
                  }
                },
                "block_types": {
                  "criteria": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "condition": {
                          "type": "string",
                          "required": true
                        },
                        "value": {
                          "type": "string",
                          "required": true
                        }
                      }
                    },
                    "min_items": 1
                  }
                }
              }
            },
            "captchas": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "failure_message": {
                    "type": "string",
                    "required": true
                  },
                  "footer_text": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "header_text": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "session_expiration_in_seconds": {
                    "type": "number",
                    "required": true
                  },
                  "submit_label": {
                    "type": "string",
                    "required": true
                  },
                  "title": {
                    "type": "string",
                    "required": true
                  },
                  "url": {
                    "type": "string",
                    "required": true
                  }
                }
              }
            },
            "custom_protection_rules": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "action": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "id": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  }
                },
                "block_types": {
                  "exclusions": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "exclusions": {
                          "type": [
                            "list",
                            "string"
                          ],
                          "optional": true,
                          "computed": true
                        },
                        "target": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        }
                      }
                    }
                  }
                }
              }
            },
            "device_fingerprint_challenge": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "action": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "action_expiration_in_seconds": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "failure_threshold": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "failure_threshold_expiration_in_seconds": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "is_enabled": {
                    "type": "bool",
                    "required": true
                  },
                  "max_address_count": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "max_address_count_expiration_in_seconds": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  }
                },
                "block_types": {
                  "challenge_settings": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "block_action": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "block_error_page_code": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "block_error_page_description": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "block_error_page_message": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "block_response_code": {
                          "type": "number",
                          "optional": true,
                          "computed": true
                        },
                        "captcha_footer": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "captcha_header": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "captcha_submit_label": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "captcha_title": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        }
                      }
                    },
                    "max_items": 1
                  }
                }
              },
              "max_items": 1
            },
            "human_interaction_challenge": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "action": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "action_expiration_in_seconds": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "failure_threshold": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "failure_threshold_expiration_in_seconds": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "interaction_threshold": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "is_enabled": {
                    "type": "bool",
                    "required": true
                  },
                  "is_nat_enabled": {
                    "type": "bool",
                    "optional": true,
                    "computed": true
                  },
                  "recording_period_in_seconds": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  }
                },
                "block_types": {
                  "challenge_settings": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "block_action": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "block_error_page_code": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "block_error_page_description": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "block_error_page_message": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "block_response_code": {
                          "type": "number",
                          "optional": true,
                          "computed": true
                        },
                        "captcha_footer": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "captcha_header": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "captcha_submit_label": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "captcha_title": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "set_http_header": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "name": {
                          "type": "string",
                          "required": true
                        },
                        "value": {
                          "type": "string",
                          "required": true
                        }
                      }
                    },
                    "max_items": 1
                  }
                }
              },
              "max_items": 1
            },
            "js_challenge": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "action": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "action_expiration_in_seconds": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "are_redirects_challenged": {
                    "type": "bool",
                    "optional": true,
                    "computed": true
                  },
                  "failure_threshold": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "is_enabled": {
                    "type": "bool",
                    "required": true
                  },
                  "is_nat_enabled": {
                    "type": "bool",
                    "optional": true,
                    "computed": true
                  }
                },
                "block_types": {
                  "challenge_settings": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "block_action": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "block_error_page_code": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "block_error_page_description": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "block_error_page_message": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "block_response_code": {
                          "type": "number",
                          "optional": true,
                          "computed": true
                        },
                        "captcha_footer": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "captcha_header": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "captcha_submit_label": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "captcha_title": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "criteria": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "condition": {
                          "type": "string",
                          "required": true
                        },
                        "is_case_sensitive": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
                        },
                        "value": {
                          "type": "string",
                          "required": true
                        }
                      }
                    }
                  },
                  "set_http_header": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "name": {
                          "type": "string",
                          "required": true
                        },
                        "value": {
                          "type": "string",
                          "required": true
                        }
                      }
                    },
                    "max_items": 1
                  }
                }
              },
              "max_items": 1
            },
            "protection_settings": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "allowed_http_methods": {
                    "type": [
                      "list",
                      "string"
                    ],
                    "optional": true,
                    "computed": true
                  },
                  "block_action": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "block_error_page_code": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "block_error_page_description": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "block_error_page_message": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "block_response_code": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "is_response_inspected": {
                    "type": "bool",
                    "optional": true,
                    "computed": true
                  },
                  "max_argument_count": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "max_name_length_per_argument": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "max_response_size_in_ki_b": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "max_total_name_length_of_arguments": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "media_types": {
                    "type": [
                      "list",
                      "string"
                    ],
                    "optional": true,
                    "computed": true
                  },
                  "recommendations_period_in_days": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  }
                }
              },
              "max_items": 1
            },
            "whitelists": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "address_lists": {
                    "type": [
                      "list",
                      "string"
                    ],
                    "optional": true,
                    "computed": true
                  },
                  "addresses": {
                    "type": [
                      "list",
                      "string"
                    ],
                    "optional": true,
                    "computed": true
                  },
                  "name": {
                    "type": "string",
                    "required": true
                  }
                }
              }
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WaasWaasPolicyConfig extends TerraformMetaArguments {
  readonly additionalDomains?: string[];
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly domain: string;
  readonly freeformTags?: { [key: string]: string };
  /** origin_groups block */
  readonly originGroups?: WaasWaasPolicyOriginGroups[];
  /** origins block */
  readonly origins?: WaasWaasPolicyOrigins[];
  /** policy_config block */
  readonly policyConfig?: WaasWaasPolicyPolicyConfig[];
  /** timeouts block */
  readonly timeouts?: WaasWaasPolicyTimeouts;
  /** waf_config block */
  readonly wafConfig?: WaasWaasPolicyWafConfig[];
}
export interface WaasWaasPolicyOriginGroupsOriginGroup {
  readonly origin: string;
  readonly weight?: number;
}
export interface WaasWaasPolicyOriginGroups {
  readonly label: string;
  /** origin_group block */
  readonly originGroup: WaasWaasPolicyOriginGroupsOriginGroup[];
}
export interface WaasWaasPolicyOriginsCustomHeaders {
  readonly name: string;
  readonly value: string;
}
export interface WaasWaasPolicyOrigins {
  readonly httpPort?: number;
  readonly httpsPort?: number;
  readonly label: string;
  readonly uri: string;
  /** custom_headers block */
  readonly customHeaders?: WaasWaasPolicyOriginsCustomHeaders[];
}
export interface WaasWaasPolicyPolicyConfigHealthChecks {
  readonly expectedResponseCodeGroup?: string[];
  readonly expectedResponseText?: string;
  readonly headers?: { [key: string]: string };
  readonly healthyThreshold?: number;
  readonly intervalInSeconds?: number;
  readonly isEnabled?: boolean;
  readonly isResponseTextCheckEnabled?: boolean;
  readonly method?: string;
  readonly path?: string;
  readonly timeoutInSeconds?: number;
  readonly unhealthyThreshold?: number;
}
export interface WaasWaasPolicyPolicyConfigLoadBalancingMethod {
  readonly domain?: string;
  readonly expirationTimeInSeconds?: number;
  readonly method: string;
  readonly name?: string;
}
export interface WaasWaasPolicyPolicyConfig {
  readonly certificateId?: string;
  readonly cipherGroup?: string;
  readonly clientAddressHeader?: string;
  readonly isBehindCdn?: boolean;
  readonly isCacheControlRespected?: boolean;
  readonly isHttpsEnabled?: boolean;
  readonly isHttpsForced?: boolean;
  readonly isOriginCompressionEnabled?: boolean;
  readonly isResponseBufferingEnabled?: boolean;
  readonly isSniEnabled?: boolean;
  readonly tlsProtocols?: string[];
  readonly websocketPathPrefixes?: string[];
  /** health_checks block */
  readonly healthChecks?: WaasWaasPolicyPolicyConfigHealthChecks[];
  /** load_balancing_method block */
  readonly loadBalancingMethod?: WaasWaasPolicyPolicyConfigLoadBalancingMethod[];
}
export interface WaasWaasPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface WaasWaasPolicyWafConfigAccessRulesCriteria {
  readonly condition: string;
  readonly isCaseSensitive?: boolean;
  readonly value: string;
}
export interface WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation {
  readonly action: string;
  readonly header: string;
  readonly value?: string;
}
export interface WaasWaasPolicyWafConfigAccessRules {
  readonly action: string;
  readonly blockAction?: string;
  readonly blockErrorPageCode?: string;
  readonly blockErrorPageDescription?: string;
  readonly blockErrorPageMessage?: string;
  readonly blockResponseCode?: number;
  readonly bypassChallenges?: string[];
  readonly captchaFooter?: string;
  readonly captchaHeader?: string;
  readonly captchaSubmitLabel?: string;
  readonly captchaTitle?: string;
  readonly name: string;
  readonly redirectResponseCode?: string;
  readonly redirectUrl?: string;
  /** criteria block */
  readonly criteria: WaasWaasPolicyWafConfigAccessRulesCriteria[];
  /** response_header_manipulation block */
  readonly responseHeaderManipulation?: WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation[];
}
export interface WaasWaasPolicyWafConfigAddressRateLimiting {
  readonly allowedRatePerAddress?: number;
  readonly blockResponseCode?: number;
  readonly isEnabled: boolean;
  readonly maxDelayedCountPerAddress?: number;
}
export interface WaasWaasPolicyWafConfigCachingRulesCriteria {
  readonly condition: string;
  readonly value: string;
}
export interface WaasWaasPolicyWafConfigCachingRules {
  readonly action: string;
  readonly cachingDuration?: string;
  readonly clientCachingDuration?: string;
  readonly isClientCachingEnabled?: boolean;
  readonly key?: string;
  readonly name: string;
  /** criteria block */
  readonly criteria: WaasWaasPolicyWafConfigCachingRulesCriteria[];
}
export interface WaasWaasPolicyWafConfigCaptchas {
  readonly failureMessage: string;
  readonly footerText?: string;
  readonly headerText?: string;
  readonly sessionExpirationInSeconds: number;
  readonly submitLabel: string;
  readonly title: string;
  readonly url: string;
}
export interface WaasWaasPolicyWafConfigCustomProtectionRulesExclusions {
  readonly exclusions?: string[];
  readonly target?: string;
}
export interface WaasWaasPolicyWafConfigCustomProtectionRules {
  readonly action?: string;
  readonly id?: string;
  /** exclusions block */
  readonly exclusions?: WaasWaasPolicyWafConfigCustomProtectionRulesExclusions[];
}
export interface WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings {
  readonly blockAction?: string;
  readonly blockErrorPageCode?: string;
  readonly blockErrorPageDescription?: string;
  readonly blockErrorPageMessage?: string;
  readonly blockResponseCode?: number;
  readonly captchaFooter?: string;
  readonly captchaHeader?: string;
  readonly captchaSubmitLabel?: string;
  readonly captchaTitle?: string;
}
export interface WaasWaasPolicyWafConfigDeviceFingerprintChallenge {
  readonly action?: string;
  readonly actionExpirationInSeconds?: number;
  readonly failureThreshold?: number;
  readonly failureThresholdExpirationInSeconds?: number;
  readonly isEnabled: boolean;
  readonly maxAddressCount?: number;
  readonly maxAddressCountExpirationInSeconds?: number;
  /** challenge_settings block */
  readonly challengeSettings?: WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings[];
}
export interface WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings {
  readonly blockAction?: string;
  readonly blockErrorPageCode?: string;
  readonly blockErrorPageDescription?: string;
  readonly blockErrorPageMessage?: string;
  readonly blockResponseCode?: number;
  readonly captchaFooter?: string;
  readonly captchaHeader?: string;
  readonly captchaSubmitLabel?: string;
  readonly captchaTitle?: string;
}
export interface WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader {
  readonly name: string;
  readonly value: string;
}
export interface WaasWaasPolicyWafConfigHumanInteractionChallenge {
  readonly action?: string;
  readonly actionExpirationInSeconds?: number;
  readonly failureThreshold?: number;
  readonly failureThresholdExpirationInSeconds?: number;
  readonly interactionThreshold?: number;
  readonly isEnabled: boolean;
  readonly isNatEnabled?: boolean;
  readonly recordingPeriodInSeconds?: number;
  /** challenge_settings block */
  readonly challengeSettings?: WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings[];
  /** set_http_header block */
  readonly setHttpHeader?: WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader[];
}
export interface WaasWaasPolicyWafConfigJsChallengeChallengeSettings {
  readonly blockAction?: string;
  readonly blockErrorPageCode?: string;
  readonly blockErrorPageDescription?: string;
  readonly blockErrorPageMessage?: string;
  readonly blockResponseCode?: number;
  readonly captchaFooter?: string;
  readonly captchaHeader?: string;
  readonly captchaSubmitLabel?: string;
  readonly captchaTitle?: string;
}
export interface WaasWaasPolicyWafConfigJsChallengeCriteria {
  readonly condition: string;
  readonly isCaseSensitive?: boolean;
  readonly value: string;
}
export interface WaasWaasPolicyWafConfigJsChallengeSetHttpHeader {
  readonly name: string;
  readonly value: string;
}
export interface WaasWaasPolicyWafConfigJsChallenge {
  readonly action?: string;
  readonly actionExpirationInSeconds?: number;
  readonly areRedirectsChallenged?: boolean;
  readonly failureThreshold?: number;
  readonly isEnabled: boolean;
  readonly isNatEnabled?: boolean;
  /** challenge_settings block */
  readonly challengeSettings?: WaasWaasPolicyWafConfigJsChallengeChallengeSettings[];
  /** criteria block */
  readonly criteria?: WaasWaasPolicyWafConfigJsChallengeCriteria[];
  /** set_http_header block */
  readonly setHttpHeader?: WaasWaasPolicyWafConfigJsChallengeSetHttpHeader[];
}
export interface WaasWaasPolicyWafConfigProtectionSettings {
  readonly allowedHttpMethods?: string[];
  readonly blockAction?: string;
  readonly blockErrorPageCode?: string;
  readonly blockErrorPageDescription?: string;
  readonly blockErrorPageMessage?: string;
  readonly blockResponseCode?: number;
  readonly isResponseInspected?: boolean;
  readonly maxArgumentCount?: number;
  readonly maxNameLengthPerArgument?: number;
  readonly maxResponseSizeInKiB?: number;
  readonly maxTotalNameLengthOfArguments?: number;
  readonly mediaTypes?: string[];
  readonly recommendationsPeriodInDays?: number;
}
export interface WaasWaasPolicyWafConfigWhitelists {
  readonly addressLists?: string[];
  readonly addresses?: string[];
  readonly name: string;
}
export interface WaasWaasPolicyWafConfig {
  readonly origin?: string;
  readonly originGroups?: string[];
  /** access_rules block */
  readonly accessRules?: WaasWaasPolicyWafConfigAccessRules[];
  /** address_rate_limiting block */
  readonly addressRateLimiting?: WaasWaasPolicyWafConfigAddressRateLimiting[];
  /** caching_rules block */
  readonly cachingRules?: WaasWaasPolicyWafConfigCachingRules[];
  /** captchas block */
  readonly captchas?: WaasWaasPolicyWafConfigCaptchas[];
  /** custom_protection_rules block */
  readonly customProtectionRules?: WaasWaasPolicyWafConfigCustomProtectionRules[];
  /** device_fingerprint_challenge block */
  readonly deviceFingerprintChallenge?: WaasWaasPolicyWafConfigDeviceFingerprintChallenge[];
  /** human_interaction_challenge block */
  readonly humanInteractionChallenge?: WaasWaasPolicyWafConfigHumanInteractionChallenge[];
  /** js_challenge block */
  readonly jsChallenge?: WaasWaasPolicyWafConfigJsChallenge[];
  /** protection_settings block */
  readonly protectionSettings?: WaasWaasPolicyWafConfigProtectionSettings[];
  /** whitelists block */
  readonly whitelists?: WaasWaasPolicyWafConfigWhitelists[];
}

// Resource

export class WaasWaasPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WaasWaasPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waas_waas_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._additionalDomains = config.additionalDomains;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._domain = config.domain;
    this._freeformTags = config.freeformTags;
    this._originGroups = config.originGroups;
    this._origins = config.origins;
    this._policyConfig = config.policyConfig;
    this._timeouts = config.timeouts;
    this._wafConfig = config.wafConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_domains - computed: true, optional: true, required: false
  private _additionalDomains?: string[];
  public get additionalDomains() {
    return this._additionalDomains ?? this.getListAttribute('additional_domains');
  }
  public set additionalDomains(value: string[] | undefined) {
    this._additionalDomains = value;
  }

  // cname - computed: true, optional: false, required: true
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // domain - computed: false, optional: false, required: true
  private _domain: string;
  public get domain() {
    return this._domain;
  }
  public set domain(value: string) {
    this._domain = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // origin_groups - computed: false, optional: true, required: false
  private _originGroups?: WaasWaasPolicyOriginGroups[];
  public get originGroups() {
    return this._originGroups;
  }
  public set originGroups(value: WaasWaasPolicyOriginGroups[] | undefined) {
    this._originGroups = value;
  }

  // origins - computed: false, optional: true, required: false
  private _origins?: WaasWaasPolicyOrigins[];
  public get origins() {
    return this._origins;
  }
  public set origins(value: WaasWaasPolicyOrigins[] | undefined) {
    this._origins = value;
  }

  // policy_config - computed: false, optional: true, required: false
  private _policyConfig?: WaasWaasPolicyPolicyConfig[];
  public get policyConfig() {
    return this._policyConfig;
  }
  public set policyConfig(value: WaasWaasPolicyPolicyConfig[] | undefined) {
    this._policyConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: WaasWaasPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: WaasWaasPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // waf_config - computed: false, optional: true, required: false
  private _wafConfig?: WaasWaasPolicyWafConfig[];
  public get wafConfig() {
    return this._wafConfig;
  }
  public set wafConfig(value: WaasWaasPolicyWafConfig[] | undefined) {
    this._wafConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_domains: this._additionalDomains,
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      domain: this._domain,
      freeform_tags: this._freeformTags,
      origin_groups: this._originGroups,
      origins: this._origins,
      policy_config: this._policyConfig,
      timeouts: this._timeouts,
      waf_config: this._wafConfig,
    };
  }
}
