// https://www.terraform.io/docs/providers/oci/r/core_instance_configuration.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "deferred_fields": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
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
      "instance_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "source": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "instance_details": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "instance_type": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "block_volumes": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "volume_id": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  }
                },
                "block_types": {
                  "attach_details": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "device": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "display_name": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "is_pv_encryption_in_transit_enabled": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
                        },
                        "is_read_only": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
                        },
                        "is_shareable": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
                        },
                        "type": {
                          "type": "string",
                          "required": true
                        },
                        "use_chap": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "create_details": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "availability_domain": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "backup_policy_id": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "compartment_id": {
                          "type": "string",
                          "optional": true,
                          "computed": true
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
                        "freeform_tags": {
                          "type": [
                            "map",
                            "string"
                          ],
                          "optional": true,
                          "computed": true
                        },
                        "kms_key_id": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "size_in_gbs": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "vpus_per_gb": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        }
                      },
                      "block_types": {
                        "source_details": {
                          "nesting_mode": "list",
                          "block": {
                            "attributes": {
                              "id": {
                                "type": "string",
                                "optional": true,
                                "computed": true
                              },
                              "type": {
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
                  }
                }
              }
            },
            "launch_details": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "availability_domain": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "compartment_id": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "dedicated_vm_host_id": {
                    "type": "string",
                    "optional": true,
                    "computed": true
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
                  "extended_metadata": {
                    "type": [
                      "map",
                      "string"
                    ],
                    "optional": true,
                    "computed": true
                  },
                  "fault_domain": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "freeform_tags": {
                    "type": [
                      "map",
                      "string"
                    ],
                    "optional": true,
                    "computed": true
                  },
                  "ipxe_script": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "is_pv_encryption_in_transit_enabled": {
                    "type": "bool",
                    "optional": true,
                    "computed": true
                  },
                  "launch_mode": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "metadata": {
                    "type": [
                      "map",
                      "string"
                    ],
                    "optional": true,
                    "computed": true
                  },
                  "preferred_maintenance_action": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "shape": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  }
                },
                "block_types": {
                  "agent_config": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "is_management_disabled": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
                        },
                        "is_monitoring_disabled": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "create_vnic_details": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "assign_public_ip": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
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
                        "freeform_tags": {
                          "type": [
                            "map",
                            "string"
                          ],
                          "optional": true,
                          "computed": true
                        },
                        "hostname_label": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "nsg_ids": {
                          "type": [
                            "set",
                            "string"
                          ],
                          "optional": true
                        },
                        "private_ip": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "skip_source_dest_check": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
                        },
                        "subnet_id": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "launch_options": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "boot_volume_type": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "firmware": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "is_consistent_volume_naming_enabled": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
                        },
                        "is_pv_encryption_in_transit_enabled": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
                        },
                        "network_type": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "remote_data_volume_type": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "shape_config": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "ocpus": {
                          "type": "number",
                          "optional": true,
                          "computed": true
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "source_details": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "boot_volume_id": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "boot_volume_size_in_gbs": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "image_id": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "source_type": {
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
            "secondary_vnics": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "display_name": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "nic_index": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  }
                },
                "block_types": {
                  "create_vnic_details": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "assign_public_ip": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
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
                        "freeform_tags": {
                          "type": [
                            "map",
                            "string"
                          ],
                          "optional": true,
                          "computed": true
                        },
                        "hostname_label": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "nsg_ids": {
                          "type": [
                            "set",
                            "string"
                          ],
                          "optional": true
                        },
                        "private_ip": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "skip_source_dest_check": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
                        },
                        "subnet_id": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        }
                      }
                    },
                    "max_items": 1
                  }
                }
              }
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
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CoreInstanceConfigurationConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly instanceId?: string;
  readonly source?: string;
  /** instance_details block */
  readonly instanceDetails?: CoreInstanceConfigurationInstanceDetails[];
  /** timeouts block */
  readonly timeouts?: CoreInstanceConfigurationTimeouts;
}
export interface CoreInstanceConfigurationInstanceDetailsBlockVolumesAttachDetails {
  readonly device?: string;
  readonly displayName?: string;
  readonly isPvEncryptionInTransitEnabled?: boolean;
  readonly isReadOnly?: boolean;
  readonly isShareable?: boolean;
  readonly type: string;
  readonly useChap?: boolean;
}
export interface CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsSourceDetails {
  readonly id?: string;
  readonly type: string;
}
export interface CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetails {
  readonly availabilityDomain?: string;
  readonly backupPolicyId?: string;
  readonly compartmentId?: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly kmsKeyId?: string;
  readonly sizeInGbs?: string;
  readonly vpusPerGb?: string;
  /** source_details block */
  readonly sourceDetails?: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsSourceDetails[];
}
export interface CoreInstanceConfigurationInstanceDetailsBlockVolumes {
  readonly volumeId?: string;
  /** attach_details block */
  readonly attachDetails?: CoreInstanceConfigurationInstanceDetailsBlockVolumesAttachDetails[];
  /** create_details block */
  readonly createDetails?: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetails[];
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfig {
  readonly isManagementDisabled?: boolean;
  readonly isMonitoringDisabled?: boolean;
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetails {
  readonly assignPublicIp?: boolean;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly hostnameLabel?: string;
  readonly nsgIds?: string[];
  readonly privateIp?: string;
  readonly skipSourceDestCheck?: boolean;
  readonly subnetId?: string;
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsLaunchOptions {
  readonly bootVolumeType?: string;
  readonly firmware?: string;
  readonly isConsistentVolumeNamingEnabled?: boolean;
  readonly isPvEncryptionInTransitEnabled?: boolean;
  readonly networkType?: string;
  readonly remoteDataVolumeType?: string;
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsShapeConfig {
  readonly ocpus?: number;
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetails {
  readonly bootVolumeId?: string;
  readonly bootVolumeSizeInGbs?: string;
  readonly imageId?: string;
  readonly sourceType: string;
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetails {
  readonly availabilityDomain?: string;
  readonly compartmentId?: string;
  readonly dedicatedVmHostId?: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly extendedMetadata?: { [key: string]: string };
  readonly faultDomain?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly ipxeScript?: string;
  readonly isPvEncryptionInTransitEnabled?: boolean;
  readonly launchMode?: string;
  readonly metadata?: { [key: string]: string };
  readonly preferredMaintenanceAction?: string;
  readonly shape?: string;
  /** agent_config block */
  readonly agentConfig?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfig[];
  /** create_vnic_details block */
  readonly createVnicDetails?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetails[];
  /** launch_options block */
  readonly launchOptions?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsLaunchOptions[];
  /** shape_config block */
  readonly shapeConfig?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsShapeConfig[];
  /** source_details block */
  readonly sourceDetails?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetails[];
}
export interface CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetails {
  readonly assignPublicIp?: boolean;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly hostnameLabel?: string;
  readonly nsgIds?: string[];
  readonly privateIp?: string;
  readonly skipSourceDestCheck?: boolean;
  readonly subnetId?: string;
}
export interface CoreInstanceConfigurationInstanceDetailsSecondaryVnics {
  readonly displayName?: string;
  readonly nicIndex?: number;
  /** create_vnic_details block */
  readonly createVnicDetails?: CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetails[];
}
export interface CoreInstanceConfigurationInstanceDetails {
  readonly instanceType: string;
  /** block_volumes block */
  readonly blockVolumes?: CoreInstanceConfigurationInstanceDetailsBlockVolumes[];
  /** launch_details block */
  readonly launchDetails?: CoreInstanceConfigurationInstanceDetailsLaunchDetails[];
  /** secondary_vnics block */
  readonly secondaryVnics?: CoreInstanceConfigurationInstanceDetailsSecondaryVnics[];
}
export interface CoreInstanceConfigurationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreInstanceConfiguration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreInstanceConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_instance_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._instanceId = config.instanceId;
    this._source = config.source;
    this._instanceDetails = config.instanceDetails;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // deferred_fields - computed: true, optional: false, required: true
  public get deferredFields() {
    return this.getListAttribute('deferred_fields');
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

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string;
  public get instanceId() {
    return this._instanceId ?? this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string | undefined) {
    this._instanceId = value;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string;
  public get source() {
    return this._source ?? this.getStringAttribute('source');
  }
  public set source(value: string | undefined) {
    this._source = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // instance_details - computed: false, optional: true, required: false
  private _instanceDetails?: CoreInstanceConfigurationInstanceDetails[];
  public get instanceDetails() {
    return this._instanceDetails;
  }
  public set instanceDetails(value: CoreInstanceConfigurationInstanceDetails[] | undefined) {
    this._instanceDetails = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreInstanceConfigurationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreInstanceConfigurationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      instance_id: this._instanceId,
      source: this._source,
      instance_details: this._instanceDetails,
      timeouts: this._timeouts,
    };
  }
}
