// https://www.terraform.io/docs/providers/oci/r/containerengine_cluster.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "available_kubernetes_upgrades": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "endpoints": {
        "type": [
          "list",
          [
            "object",
            {
              "kubernetes": "string"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kms_key_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kubernetes_version": {
        "type": "string",
        "required": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "metadata": {
        "type": [
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
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "vcn_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "options": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "service_lb_subnet_ids": {
              "type": [
                "list",
                "string"
              ],
              "optional": true,
              "computed": true
            }
          },
          "block_types": {
            "add_ons": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "is_kubernetes_dashboard_enabled": {
                    "type": "bool",
                    "optional": true,
                    "computed": true
                  },
                  "is_tiller_enabled": {
                    "type": "bool",
                    "optional": true,
                    "computed": true
                  }
                }
              },
              "max_items": 1
            },
            "admission_controller_options": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "is_pod_security_policy_enabled": {
                    "type": "bool",
                    "optional": true,
                    "computed": true
                  }
                }
              },
              "max_items": 1
            },
            "kubernetes_network_config": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "pods_cidr": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "services_cidr": {
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
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface ContainerengineClusterConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly kmsKeyId?: string;
  readonly kubernetesVersion: string;
  readonly name: string;
  readonly vcnId: string;
  /** options block */
  readonly options?: ContainerengineClusterOptions[];
  /** timeouts block */
  readonly timeouts?: ContainerengineClusterTimeouts;
}
export class ContainerengineClusterEndpoints extends ComplexComputedList {

  // kubernetes - computed: true, optional: false, required: true
  public get kubernetes() {
    return this.getStringAttribute('kubernetes');
  }
}
export class ContainerengineClusterMetadata extends ComplexComputedList {

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
export interface ContainerengineClusterOptionsAddOns {
  readonly isKubernetesDashboardEnabled?: boolean;
  readonly isTillerEnabled?: boolean;
}
export interface ContainerengineClusterOptionsAdmissionControllerOptions {
  readonly isPodSecurityPolicyEnabled?: boolean;
}
export interface ContainerengineClusterOptionsKubernetesNetworkConfig {
  readonly podsCidr?: string;
  readonly servicesCidr?: string;
}
export interface ContainerengineClusterOptions {
  readonly serviceLbSubnetIds?: string[];
  /** add_ons block */
  readonly addOns?: ContainerengineClusterOptionsAddOns[];
  /** admission_controller_options block */
  readonly admissionControllerOptions?: ContainerengineClusterOptionsAdmissionControllerOptions[];
  /** kubernetes_network_config block */
  readonly kubernetesNetworkConfig?: ContainerengineClusterOptionsKubernetesNetworkConfig[];
}
export interface ContainerengineClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ContainerengineCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ContainerengineClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_containerengine_cluster',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._kmsKeyId = config.kmsKeyId;
    this._kubernetesVersion = config.kubernetesVersion;
    this._name = config.name;
    this._vcnId = config.vcnId;
    this._options = config.options;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_kubernetes_upgrades - computed: true, optional: false, required: true
  public get availableKubernetesUpgrades() {
    return this.getListAttribute('available_kubernetes_upgrades');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // endpoints - computed: true, optional: false, required: true
  public endpoints(index: string) {
    return new ContainerengineClusterEndpoints(this, 'endpoints', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId ?? this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // kubernetes_version - computed: false, optional: false, required: true
  private _kubernetesVersion: string;
  public get kubernetesVersion() {
    return this._kubernetesVersion;
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // metadata - computed: true, optional: false, required: true
  public metadata(index: string) {
    return new ContainerengineClusterMetadata(this, 'metadata', index);
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // vcn_id - computed: false, optional: false, required: true
  private _vcnId: string;
  public get vcnId() {
    return this._vcnId;
  }
  public set vcnId(value: string) {
    this._vcnId = value;
  }

  // options - computed: false, optional: true, required: false
  private _options?: ContainerengineClusterOptions[];
  public get options() {
    return this._options;
  }
  public set options(value: ContainerengineClusterOptions[] | undefined) {
    this._options = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ContainerengineClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ContainerengineClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      kms_key_id: this._kmsKeyId,
      kubernetes_version: this._kubernetesVersion,
      name: this._name,
      vcn_id: this._vcnId,
      options: this._options,
      timeouts: this._timeouts,
    };
  }
}
