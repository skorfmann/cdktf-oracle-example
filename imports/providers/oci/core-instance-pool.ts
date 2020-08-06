// https://www.terraform.io/docs/providers/oci/r/core_instance_pool.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "actual_size": {
        "type": "number",
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
      "instance_configuration_id": {
        "type": "string",
        "required": true
      },
      "size": {
        "type": "number",
        "required": true
      },
      "state": {
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
      "load_balancers": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "backend_set_name": {
              "type": "string",
              "required": true
            },
            "id": {
              "type": "string",
              "computed": true
            },
            "instance_pool_id": {
              "type": "string",
              "computed": true
            },
            "load_balancer_id": {
              "type": "string",
              "required": true
            },
            "port": {
              "type": "number",
              "required": true
            },
            "state": {
              "type": "string",
              "computed": true
            },
            "vnic_selection": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "placement_configurations": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "availability_domain": {
              "type": "string",
              "required": true
            },
            "fault_domains": {
              "type": [
                "list",
                "string"
              ],
              "optional": true,
              "computed": true
            },
            "primary_subnet_id": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "secondary_vnic_subnets": {
              "nesting_mode": "list",
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
        "min_items": 1
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

export interface CoreInstancePoolConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly instanceConfigurationId: string;
  readonly size: number;
  readonly state?: string;
  /** load_balancers block */
  readonly loadBalancers?: CoreInstancePoolLoadBalancers[];
  /** placement_configurations block */
  readonly placementConfigurations: CoreInstancePoolPlacementConfigurations[];
  /** timeouts block */
  readonly timeouts?: CoreInstancePoolTimeouts;
}
export interface CoreInstancePoolLoadBalancers {
  readonly backendSetName: string;
  readonly loadBalancerId: string;
  readonly port: number;
  readonly vnicSelection: string;
}
export interface CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets {
  readonly displayName?: string;
  readonly subnetId: string;
}
export interface CoreInstancePoolPlacementConfigurations {
  readonly availabilityDomain: string;
  readonly faultDomains?: string[];
  readonly primarySubnetId: string;
  /** secondary_vnic_subnets block */
  readonly secondaryVnicSubnets?: CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets[];
}
export interface CoreInstancePoolTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreInstancePool extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreInstancePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_instance_pool',
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
    this._instanceConfigurationId = config.instanceConfigurationId;
    this._size = config.size;
    this._state = config.state;
    this._loadBalancers = config.loadBalancers;
    this._placementConfigurations = config.placementConfigurations;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actual_size - computed: true, optional: false, required: true
  public get actualSize() {
    return this.getNumberAttribute('actual_size');
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

  // instance_configuration_id - computed: false, optional: false, required: true
  private _instanceConfigurationId: string;
  public get instanceConfigurationId() {
    return this._instanceConfigurationId;
  }
  public set instanceConfigurationId(value: string) {
    this._instanceConfigurationId = value;
  }

  // size - computed: false, optional: false, required: true
  private _size: number;
  public get size() {
    return this._size;
  }
  public set size(value: number) {
    this._size = value;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state ?? this.getStringAttribute('state');
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // load_balancers - computed: false, optional: true, required: false
  private _loadBalancers?: CoreInstancePoolLoadBalancers[];
  public get loadBalancers() {
    return this._loadBalancers;
  }
  public set loadBalancers(value: CoreInstancePoolLoadBalancers[] | undefined) {
    this._loadBalancers = value;
  }

  // placement_configurations - computed: false, optional: false, required: true
  private _placementConfigurations: CoreInstancePoolPlacementConfigurations[];
  public get placementConfigurations() {
    return this._placementConfigurations;
  }
  public set placementConfigurations(value: CoreInstancePoolPlacementConfigurations[]) {
    this._placementConfigurations = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreInstancePoolTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreInstancePoolTimeouts | undefined) {
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
      instance_configuration_id: this._instanceConfigurationId,
      size: this._size,
      state: this._state,
      load_balancers: this._loadBalancers,
      placement_configurations: this._placementConfigurations,
      timeouts: this._timeouts,
    };
  }
}
