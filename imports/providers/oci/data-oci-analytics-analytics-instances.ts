// https://www.terraform.io/docs/providers/oci/r/data_oci_analytics_analytics_instances.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "analytics_instances": {
        "type": [
          "list",
          [
            "object",
            {
              "capacity": [
                "list",
                [
                  "object",
                  {
                    "capacity_type": "string",
                    "capacity_value": "number"
                  }
                ]
              ],
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "description": "string",
              "email_notification": "string",
              "feature_set": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "idcs_access_token": "string",
              "license_type": "string",
              "name": "string",
              "network_endpoint_details": [
                "list",
                [
                  "object",
                  {
                    "network_endpoint_type": "string",
                    "subnet_id": "string",
                    "vcn_id": "string",
                    "whitelisted_ips": [
                      "list",
                      "string"
                    ],
                    "whitelisted_vcns": [
                      "list",
                      [
                        "object",
                        {
                          "id": "string",
                          "whitelisted_ips": [
                            "list",
                            "string"
                          ]
                        }
                      ]
                    ]
                  }
                ]
              ],
              "service_url": "string",
              "state": "string",
              "time_created": "string",
              "time_updated": "string"
            }
          ]
        ],
        "computed": true
      },
      "capacity_type": {
        "type": "string",
        "optional": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "feature_set": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true
      },
      "state": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciAnalyticsAnalyticsInstancesConfig extends TerraformMetaArguments {
  readonly capacityType?: string;
  readonly compartmentId: string;
  readonly featureSet?: string;
  readonly name?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciAnalyticsAnalyticsInstancesFilter[];
}
export class DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity extends ComplexComputedList {

  // capacity_type - computed: true, optional: false, required: true
  public get capacityType() {
    return this.getStringAttribute('capacity_type');
  }

  // capacity_value - computed: true, optional: false, required: true
  public get capacityValue() {
    return this.getNumberAttribute('capacity_value');
  }
}
export class DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // whitelisted_ips - computed: true, optional: false, required: true
  public get whitelistedIps() {
    return this.getListAttribute('whitelisted_ips');
  }
}
export class DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails extends ComplexComputedList {

  // network_endpoint_type - computed: true, optional: false, required: true
  public get networkEndpointType() {
    return this.getStringAttribute('network_endpoint_type');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vcn_id - computed: true, optional: false, required: true
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }

  // whitelisted_ips - computed: true, optional: false, required: true
  public get whitelistedIps() {
    return this.getListAttribute('whitelisted_ips');
  }

  // whitelisted_vcns - computed: true, optional: false, required: true
  public get whitelistedVcns() {
    return 'not implemented' as any;
  }
}
export class DataOciAnalyticsAnalyticsInstancesAnalyticsInstances extends ComplexComputedList {

  // capacity - computed: true, optional: false, required: true
  public get capacity() {
    return 'not implemented' as any;
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // email_notification - computed: true, optional: false, required: true
  public get emailNotification() {
    return this.getStringAttribute('email_notification');
  }

  // feature_set - computed: true, optional: false, required: true
  public get featureSet() {
    return this.getStringAttribute('feature_set');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_access_token - computed: true, optional: false, required: true
  public get idcsAccessToken() {
    return this.getStringAttribute('idcs_access_token');
  }

  // license_type - computed: true, optional: false, required: true
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_endpoint_details - computed: true, optional: false, required: true
  public get networkEndpointDetails() {
    return 'not implemented' as any;
  }

  // service_url - computed: true, optional: false, required: true
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
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
}
export interface DataOciAnalyticsAnalyticsInstancesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciAnalyticsAnalyticsInstances extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciAnalyticsAnalyticsInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_analytics_analytics_instances',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._capacityType = config.capacityType;
    this._compartmentId = config.compartmentId;
    this._featureSet = config.featureSet;
    this._name = config.name;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analytics_instances - computed: true, optional: false, required: true
  public analyticsInstances(index: string) {
    return new DataOciAnalyticsAnalyticsInstancesAnalyticsInstances(this, 'analytics_instances', index);
  }

  // capacity_type - computed: false, optional: true, required: false
  private _capacityType?: string;
  public get capacityType() {
    return this._capacityType;
  }
  public set capacityType(value: string | undefined) {
    this._capacityType = value;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // feature_set - computed: false, optional: true, required: false
  private _featureSet?: string;
  public get featureSet() {
    return this._featureSet;
  }
  public set featureSet(value: string | undefined) {
    this._featureSet = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciAnalyticsAnalyticsInstancesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciAnalyticsAnalyticsInstancesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_type: this._capacityType,
      compartment_id: this._compartmentId,
      feature_set: this._featureSet,
      name: this._name,
      state: this._state,
      filter: this._filter,
    };
  }
}
