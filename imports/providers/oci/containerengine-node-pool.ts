// https://www.terraform.io/docs/providers/oci/r/containerengine_node_pool.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cluster_id": {
        "type": "string",
        "required": true
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
      "kubernetes_version": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "node_image_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "node_image_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "node_metadata": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "node_shape": {
        "type": "string",
        "required": true
      },
      "node_source": {
        "type": [
          "list",
          [
            "object",
            {
              "image_id": "string",
              "source_name": "string",
              "source_type": "string"
            }
          ]
        ],
        "computed": true
      },
      "nodes": {
        "type": [
          "list",
          [
            "object",
            {
              "availability_domain": "string",
              "error": [
                "list",
                [
                  "object",
                  {
                    "code": "string",
                    "message": "string",
                    "status": "string"
                  }
                ]
              ],
              "fault_domain": "string",
              "id": "string",
              "lifecycle_details": "string",
              "name": "string",
              "node_pool_id": "string",
              "private_ip": "string",
              "public_ip": "string",
              "state": "string",
              "subnet_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "quantity_per_subnet": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "ssh_public_key": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "subnet_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "initial_node_labels": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "key": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "value": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        }
      },
      "node_config_details": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "size": {
              "type": "number",
              "required": true
            }
          },
          "block_types": {
            "placement_configs": {
              "nesting_mode": "set",
              "block": {
                "attributes": {
                  "availability_domain": {
                    "type": "string",
                    "required": true
                  },
                  "subnet_id": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "min_items": 1
            }
          }
        },
        "max_items": 1
      },
      "node_source_details": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "image_id": {
              "type": "string",
              "required": true
            },
            "source_type": {
              "type": "string",
              "required": true
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

export interface ContainerengineNodePoolConfig extends TerraformMetaArguments {
  readonly clusterId: string;
  readonly compartmentId: string;
  readonly kubernetesVersion: string;
  readonly name: string;
  readonly nodeImageId?: string;
  readonly nodeImageName?: string;
  readonly nodeMetadata?: { [key: string]: string };
  readonly nodeShape: string;
  readonly quantityPerSubnet?: number;
  readonly sshPublicKey?: string;
  readonly subnetIds?: string[];
  /** initial_node_labels block */
  readonly initialNodeLabels?: ContainerengineNodePoolInitialNodeLabels[];
  /** node_config_details block */
  readonly nodeConfigDetails?: ContainerengineNodePoolNodeConfigDetails[];
  /** node_source_details block */
  readonly nodeSourceDetails?: ContainerengineNodePoolNodeSourceDetails[];
  /** timeouts block */
  readonly timeouts?: ContainerengineNodePoolTimeouts;
}
export class ContainerengineNodePoolNodeSource extends ComplexComputedList {

  // image_id - computed: true, optional: false, required: true
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // source_name - computed: true, optional: false, required: true
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // source_type - computed: true, optional: false, required: true
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}
export class ContainerengineNodePoolNodesError extends ComplexComputedList {

  // code - computed: true, optional: false, required: true
  public get code() {
    return this.getStringAttribute('code');
  }

  // message - computed: true, optional: false, required: true
  public get message() {
    return this.getStringAttribute('message');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }
}
export class ContainerengineNodePoolNodes extends ComplexComputedList {

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // error - computed: true, optional: false, required: true
  public get error() {
    return 'not implemented' as any;
  }

  // fault_domain - computed: true, optional: false, required: true
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_pool_id - computed: true, optional: false, required: true
  public get nodePoolId() {
    return this.getStringAttribute('node_pool_id');
  }

  // private_ip - computed: true, optional: false, required: true
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: true
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export interface ContainerengineNodePoolInitialNodeLabels {
  readonly key?: string;
  readonly value?: string;
}
export interface ContainerengineNodePoolNodeConfigDetailsPlacementConfigs {
  readonly availabilityDomain: string;
  readonly subnetId: string;
}
export interface ContainerengineNodePoolNodeConfigDetails {
  readonly size: number;
  /** placement_configs block */
  readonly placementConfigs: ContainerengineNodePoolNodeConfigDetailsPlacementConfigs[];
}
export interface ContainerengineNodePoolNodeSourceDetails {
  readonly imageId: string;
  readonly sourceType: string;
}
export interface ContainerengineNodePoolTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ContainerengineNodePool extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ContainerengineNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_containerengine_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterId = config.clusterId;
    this._compartmentId = config.compartmentId;
    this._kubernetesVersion = config.kubernetesVersion;
    this._name = config.name;
    this._nodeImageId = config.nodeImageId;
    this._nodeImageName = config.nodeImageName;
    this._nodeMetadata = config.nodeMetadata;
    this._nodeShape = config.nodeShape;
    this._quantityPerSubnet = config.quantityPerSubnet;
    this._sshPublicKey = config.sshPublicKey;
    this._subnetIds = config.subnetIds;
    this._initialNodeLabels = config.initialNodeLabels;
    this._nodeConfigDetails = config.nodeConfigDetails;
    this._nodeSourceDetails = config.nodeSourceDetails;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId: string;
  public get clusterId() {
    return this._clusterId;
  }
  public set clusterId(value: string) {
    this._clusterId = value;
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

  // kubernetes_version - computed: false, optional: false, required: true
  private _kubernetesVersion: string;
  public get kubernetesVersion() {
    return this._kubernetesVersion;
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // node_image_id - computed: true, optional: true, required: false
  private _nodeImageId?: string;
  public get nodeImageId() {
    return this._nodeImageId ?? this.getStringAttribute('node_image_id');
  }
  public set nodeImageId(value: string | undefined) {
    this._nodeImageId = value;
  }

  // node_image_name - computed: true, optional: true, required: false
  private _nodeImageName?: string;
  public get nodeImageName() {
    return this._nodeImageName ?? this.getStringAttribute('node_image_name');
  }
  public set nodeImageName(value: string | undefined) {
    this._nodeImageName = value;
  }

  // node_metadata - computed: true, optional: true, required: false
  private _nodeMetadata?: { [key: string]: string }
  public get nodeMetadata(): { [key: string]: string } | undefined {
    return this._nodeMetadata; // Getting the computed value is not yet implemented
  }
  public set nodeMetadata(value: { [key: string]: string } | undefined) {
    this._nodeMetadata = value;
  }

  // node_shape - computed: false, optional: false, required: true
  private _nodeShape: string;
  public get nodeShape() {
    return this._nodeShape;
  }
  public set nodeShape(value: string) {
    this._nodeShape = value;
  }

  // node_source - computed: true, optional: false, required: true
  public nodeSource(index: string) {
    return new ContainerengineNodePoolNodeSource(this, 'node_source', index);
  }

  // nodes - computed: true, optional: false, required: true
  public nodes(index: string) {
    return new ContainerengineNodePoolNodes(this, 'nodes', index);
  }

  // quantity_per_subnet - computed: true, optional: true, required: false
  private _quantityPerSubnet?: number;
  public get quantityPerSubnet() {
    return this._quantityPerSubnet ?? this.getNumberAttribute('quantity_per_subnet');
  }
  public set quantityPerSubnet(value: number | undefined) {
    this._quantityPerSubnet = value;
  }

  // ssh_public_key - computed: true, optional: true, required: false
  private _sshPublicKey?: string;
  public get sshPublicKey() {
    return this._sshPublicKey ?? this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string | undefined) {
    this._sshPublicKey = value;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this._subnetIds ?? this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[] | undefined) {
    this._subnetIds = value;
  }

  // initial_node_labels - computed: false, optional: true, required: false
  private _initialNodeLabels?: ContainerengineNodePoolInitialNodeLabels[];
  public get initialNodeLabels() {
    return this._initialNodeLabels;
  }
  public set initialNodeLabels(value: ContainerengineNodePoolInitialNodeLabels[] | undefined) {
    this._initialNodeLabels = value;
  }

  // node_config_details - computed: false, optional: true, required: false
  private _nodeConfigDetails?: ContainerengineNodePoolNodeConfigDetails[];
  public get nodeConfigDetails() {
    return this._nodeConfigDetails;
  }
  public set nodeConfigDetails(value: ContainerengineNodePoolNodeConfigDetails[] | undefined) {
    this._nodeConfigDetails = value;
  }

  // node_source_details - computed: false, optional: true, required: false
  private _nodeSourceDetails?: ContainerengineNodePoolNodeSourceDetails[];
  public get nodeSourceDetails() {
    return this._nodeSourceDetails;
  }
  public set nodeSourceDetails(value: ContainerengineNodePoolNodeSourceDetails[] | undefined) {
    this._nodeSourceDetails = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ContainerengineNodePoolTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ContainerengineNodePoolTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: this._clusterId,
      compartment_id: this._compartmentId,
      kubernetes_version: this._kubernetesVersion,
      name: this._name,
      node_image_id: this._nodeImageId,
      node_image_name: this._nodeImageName,
      node_metadata: this._nodeMetadata,
      node_shape: this._nodeShape,
      quantity_per_subnet: this._quantityPerSubnet,
      ssh_public_key: this._sshPublicKey,
      subnet_ids: this._subnetIds,
      initial_node_labels: this._initialNodeLabels,
      node_config_details: this._nodeConfigDetails,
      node_source_details: this._nodeSourceDetails,
      timeouts: this._timeouts,
    };
  }
}
