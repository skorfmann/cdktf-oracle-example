// https://www.terraform.io/docs/providers/oci/r/core_cluster_network.html
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
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "instance_pools": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "compartment_id": {
              "type": "string",
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
              "computed": true
            },
            "instance_configuration_id": {
              "type": "string",
              "required": true
            },
            "load_balancers": {
              "type": [
                "list",
                [
                  "object",
                  {
                    "backend_set_name": "string",
                    "id": "string",
                    "instance_pool_id": "string",
                    "load_balancer_id": "string",
                    "port": "number",
                    "state": "string",
                    "vnic_selection": "string"
                  }
                ]
              ],
              "computed": true
            },
            "placement_configurations": {
              "type": [
                "list",
                [
                  "object",
                  {
                    "availability_domain": "string",
                    "fault_domains": [
                      "list",
                      "string"
                    ],
                    "primary_subnet_id": "string",
                    "secondary_vnic_subnets": [
                      "list",
                      [
                        "object",
                        {
                          "display_name": "string",
                          "subnet_id": "string"
                        }
                      ]
                    ]
                  }
                ]
              ],
              "computed": true
            },
            "size": {
              "type": "number",
              "required": true
            },
            "state": {
              "type": "string",
              "computed": true
            },
            "time_created": {
              "type": "string",
              "computed": true
            }
          }
        },
        "min_items": 1
      },
      "placement_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "availability_domain": {
              "type": "string",
              "required": true
            },
            "primary_subnet_id": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "secondary_vnic_subnets": {
              "nesting_mode": "set",
              "block": {
                "attributes": {
                  "display_name": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "subnet_id": {
                    "type": "string",
                    "required": true
                  }
                }
              }
            }
          }
        },
        "min_items": 1,
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

export interface CoreClusterNetworkConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  /** instance_pools block */
  readonly instancePools: CoreClusterNetworkInstancePools[];
  /** placement_configuration block */
  readonly placementConfiguration: CoreClusterNetworkPlacementConfiguration[];
  /** timeouts block */
  readonly timeouts?: CoreClusterNetworkTimeouts;
}
export interface CoreClusterNetworkInstancePools {
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly instanceConfigurationId: string;
  readonly size: number;
}
export interface CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets {
  readonly displayName?: string;
  readonly subnetId: string;
}
export interface CoreClusterNetworkPlacementConfiguration {
  readonly availabilityDomain: string;
  readonly primarySubnetId: string;
  /** secondary_vnic_subnets block */
  readonly secondaryVnicSubnets?: CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets[];
}
export interface CoreClusterNetworkTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreClusterNetwork extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreClusterNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_cluster_network',
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
    this._instancePools = config.instancePools;
    this._placementConfiguration = config.placementConfiguration;
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

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // instance_pools - computed: false, optional: false, required: true
  private _instancePools: CoreClusterNetworkInstancePools[];
  public get instancePools() {
    return this._instancePools;
  }
  public set instancePools(value: CoreClusterNetworkInstancePools[]) {
    this._instancePools = value;
  }

  // placement_configuration - computed: false, optional: false, required: true
  private _placementConfiguration: CoreClusterNetworkPlacementConfiguration[];
  public get placementConfiguration() {
    return this._placementConfiguration;
  }
  public set placementConfiguration(value: CoreClusterNetworkPlacementConfiguration[]) {
    this._placementConfiguration = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreClusterNetworkTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreClusterNetworkTimeouts | undefined) {
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
      instance_pools: this._instancePools,
      placement_configuration: this._placementConfiguration,
      timeouts: this._timeouts,
    };
  }
}
