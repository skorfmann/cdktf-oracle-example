// https://www.terraform.io/docs/providers/oci/r/analytics_analytics_instance.html
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
      "description": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "email_notification": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "feature_set": {
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
      "idcs_access_token": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "license_type": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "service_url": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "optional": true,
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
      "capacity": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "capacity_type": {
              "type": "string",
              "required": true
            },
            "capacity_value": {
              "type": "number",
              "required": true
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
      "network_endpoint_details": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "network_endpoint_type": {
              "type": "string",
              "required": true
            },
            "subnet_id": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "vcn_id": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "whitelisted_ips": {
              "type": [
                "list",
                "string"
              ],
              "optional": true,
              "computed": true
            }
          },
          "block_types": {
            "whitelisted_vcns": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "id": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "whitelisted_ips": {
                    "type": [
                      "list",
                      "string"
                    ],
                    "optional": true,
                    "computed": true
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

export interface AnalyticsAnalyticsInstanceConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly description?: string;
  readonly emailNotification?: string;
  readonly featureSet: string;
  readonly freeformTags?: { [key: string]: string };
  readonly idcsAccessToken?: string;
  readonly licenseType: string;
  readonly name: string;
  readonly state?: string;
  /** capacity block */
  readonly capacity: AnalyticsAnalyticsInstanceCapacity[];
  /** network_endpoint_details block */
  readonly networkEndpointDetails?: AnalyticsAnalyticsInstanceNetworkEndpointDetails[];
  /** timeouts block */
  readonly timeouts?: AnalyticsAnalyticsInstanceTimeouts;
}
export interface AnalyticsAnalyticsInstanceCapacity {
  readonly capacityType: string;
  readonly capacityValue: number;
}
export interface AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns {
  readonly id?: string;
  readonly whitelistedIps?: string[];
}
export interface AnalyticsAnalyticsInstanceNetworkEndpointDetails {
  readonly networkEndpointType: string;
  readonly subnetId?: string;
  readonly vcnId?: string;
  readonly whitelistedIps?: string[];
  /** whitelisted_vcns block */
  readonly whitelistedVcns?: AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns[];
}
export interface AnalyticsAnalyticsInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class AnalyticsAnalyticsInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AnalyticsAnalyticsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_analytics_analytics_instance',
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
    this._description = config.description;
    this._emailNotification = config.emailNotification;
    this._featureSet = config.featureSet;
    this._freeformTags = config.freeformTags;
    this._idcsAccessToken = config.idcsAccessToken;
    this._licenseType = config.licenseType;
    this._name = config.name;
    this._state = config.state;
    this._capacity = config.capacity;
    this._networkEndpointDetails = config.networkEndpointDetails;
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

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description ?? this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // email_notification - computed: true, optional: true, required: false
  private _emailNotification?: string;
  public get emailNotification() {
    return this._emailNotification ?? this.getStringAttribute('email_notification');
  }
  public set emailNotification(value: string | undefined) {
    this._emailNotification = value;
  }

  // feature_set - computed: false, optional: false, required: true
  private _featureSet: string;
  public get featureSet() {
    return this._featureSet;
  }
  public set featureSet(value: string) {
    this._featureSet = value;
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

  // idcs_access_token - computed: false, optional: true, required: false
  private _idcsAccessToken?: string;
  public get idcsAccessToken() {
    return this._idcsAccessToken;
  }
  public set idcsAccessToken(value: string | undefined) {
    this._idcsAccessToken = value;
  }

  // license_type - computed: false, optional: false, required: true
  private _licenseType: string;
  public get licenseType() {
    return this._licenseType;
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // service_url - computed: true, optional: false, required: true
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
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

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity: AnalyticsAnalyticsInstanceCapacity[];
  public get capacity() {
    return this._capacity;
  }
  public set capacity(value: AnalyticsAnalyticsInstanceCapacity[]) {
    this._capacity = value;
  }

  // network_endpoint_details - computed: false, optional: true, required: false
  private _networkEndpointDetails?: AnalyticsAnalyticsInstanceNetworkEndpointDetails[];
  public get networkEndpointDetails() {
    return this._networkEndpointDetails;
  }
  public set networkEndpointDetails(value: AnalyticsAnalyticsInstanceNetworkEndpointDetails[] | undefined) {
    this._networkEndpointDetails = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AnalyticsAnalyticsInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AnalyticsAnalyticsInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      description: this._description,
      email_notification: this._emailNotification,
      feature_set: this._featureSet,
      freeform_tags: this._freeformTags,
      idcs_access_token: this._idcsAccessToken,
      license_type: this._licenseType,
      name: this._name,
      state: this._state,
      capacity: this._capacity,
      network_endpoint_details: this._networkEndpointDetails,
      timeouts: this._timeouts,
    };
  }
}
