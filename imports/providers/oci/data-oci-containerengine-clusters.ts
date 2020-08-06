// https://www.terraform.io/docs/providers/oci/r/data_oci_containerengine_clusters.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "clusters": {
        "type": [
          "list",
          [
            "object",
            {
              "available_kubernetes_upgrades": [
                "list",
                "string"
              ],
              "compartment_id": "string",
              "endpoints": [
                "list",
                [
                  "object",
                  {
                    "kubernetes": "string"
                  }
                ]
              ],
              "id": "string",
              "kms_key_id": "string",
              "kubernetes_version": "string",
              "lifecycle_details": "string",
              "metadata": [
                "list",
                [
                  "object",
                  {
                    "created_by_user_id": "string",
                    "created_by_work_request_id": "string",
                    "deleted_by_user_id": "string",
                    "deleted_by_work_request_id": "string",
                    "time_created": "string",
                    "time_deleted": "string",
                    "time_updated": "string",
                    "updated_by_user_id": "string",
                    "updated_by_work_request_id": "string"
                  }
                ]
              ],
              "name": "string",
              "options": [
                "list",
                [
                  "object",
                  {
                    "add_ons": [
                      "list",
                      [
                        "object",
                        {
                          "is_kubernetes_dashboard_enabled": "bool",
                          "is_tiller_enabled": "bool"
                        }
                      ]
                    ],
                    "admission_controller_options": [
                      "list",
                      [
                        "object",
                        {
                          "is_pod_security_policy_enabled": "bool"
                        }
                      ]
                    ],
                    "kubernetes_network_config": [
                      "list",
                      [
                        "object",
                        {
                          "pods_cidr": "string",
                          "services_cidr": "string"
                        }
                      ]
                    ],
                    "service_lb_subnet_ids": [
                      "list",
                      "string"
                    ]
                  }
                ]
              ],
              "state": "string",
              "vcn_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
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
        "type": [
          "list",
          "string"
        ],
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

export interface DataOciContainerengineClustersConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly name?: string;
  readonly state?: string[];
  /** filter block */
  readonly filter?: DataOciContainerengineClustersFilter[];
}
export class DataOciContainerengineClustersClustersEndpoints extends ComplexComputedList {

  // kubernetes - computed: true, optional: false, required: true
  public get kubernetes() {
    return this.getStringAttribute('kubernetes');
  }
}
export class DataOciContainerengineClustersClustersMetadata extends ComplexComputedList {

  // created_by_user_id - computed: true, optional: false, required: true
  public get createdByUserId() {
    return this.getStringAttribute('created_by_user_id');
  }

  // created_by_work_request_id - computed: true, optional: false, required: true
  public get createdByWorkRequestId() {
    return this.getStringAttribute('created_by_work_request_id');
  }

  // deleted_by_user_id - computed: true, optional: false, required: true
  public get deletedByUserId() {
    return this.getStringAttribute('deleted_by_user_id');
  }

  // deleted_by_work_request_id - computed: true, optional: false, required: true
  public get deletedByWorkRequestId() {
    return this.getStringAttribute('deleted_by_work_request_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_deleted - computed: true, optional: false, required: true
  public get timeDeleted() {
    return this.getStringAttribute('time_deleted');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // updated_by_user_id - computed: true, optional: false, required: true
  public get updatedByUserId() {
    return this.getStringAttribute('updated_by_user_id');
  }

  // updated_by_work_request_id - computed: true, optional: false, required: true
  public get updatedByWorkRequestId() {
    return this.getStringAttribute('updated_by_work_request_id');
  }
}
export class DataOciContainerengineClustersClustersOptionsAddOns extends ComplexComputedList {

  // is_kubernetes_dashboard_enabled - computed: true, optional: false, required: true
  public get isKubernetesDashboardEnabled() {
    return this.getBooleanAttribute('is_kubernetes_dashboard_enabled');
  }

  // is_tiller_enabled - computed: true, optional: false, required: true
  public get isTillerEnabled() {
    return this.getBooleanAttribute('is_tiller_enabled');
  }
}
export class DataOciContainerengineClustersClustersOptionsAdmissionControllerOptions extends ComplexComputedList {

  // is_pod_security_policy_enabled - computed: true, optional: false, required: true
  public get isPodSecurityPolicyEnabled() {
    return this.getBooleanAttribute('is_pod_security_policy_enabled');
  }
}
export class DataOciContainerengineClustersClustersOptionsKubernetesNetworkConfig extends ComplexComputedList {

  // pods_cidr - computed: true, optional: false, required: true
  public get podsCidr() {
    return this.getStringAttribute('pods_cidr');
  }

  // services_cidr - computed: true, optional: false, required: true
  public get servicesCidr() {
    return this.getStringAttribute('services_cidr');
  }
}
export class DataOciContainerengineClustersClustersOptions extends ComplexComputedList {

  // add_ons - computed: true, optional: false, required: true
  public get addOns() {
    return 'not implemented' as any;
  }

  // admission_controller_options - computed: true, optional: false, required: true
  public get admissionControllerOptions() {
    return 'not implemented' as any;
  }

  // kubernetes_network_config - computed: true, optional: false, required: true
  public get kubernetesNetworkConfig() {
    return 'not implemented' as any;
  }

  // service_lb_subnet_ids - computed: true, optional: false, required: true
  public get serviceLbSubnetIds() {
    return this.getListAttribute('service_lb_subnet_ids');
  }
}
export class DataOciContainerengineClustersClusters extends ComplexComputedList {

  // available_kubernetes_upgrades - computed: true, optional: false, required: true
  public get availableKubernetesUpgrades() {
    return this.getListAttribute('available_kubernetes_upgrades');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // endpoints - computed: true, optional: false, required: true
  public get endpoints() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // kubernetes_version - computed: true, optional: false, required: true
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // metadata - computed: true, optional: false, required: true
  public get metadata() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // options - computed: true, optional: false, required: true
  public get options() {
    return 'not implemented' as any;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // vcn_id - computed: true, optional: false, required: true
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
}
export interface DataOciContainerengineClustersFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciContainerengineClusters extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciContainerengineClustersConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_containerengine_clusters',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._name = config.name;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clusters - computed: true, optional: false, required: true
  public clusters(index: string) {
    return new DataOciContainerengineClustersClusters(this, 'clusters', index);
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
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
  private _state?: string[];
  public get state() {
    return this._state;
  }
  public set state(value: string[] | undefined) {
    this._state = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciContainerengineClustersFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciContainerengineClustersFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      name: this._name,
      state: this._state,
      filter: this._filter,
    };
  }
}
