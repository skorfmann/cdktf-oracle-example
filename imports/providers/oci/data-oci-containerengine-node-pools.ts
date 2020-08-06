// https://www.terraform.io/docs/providers/oci/r/data_oci_containerengine_node_pools.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cluster_id": {
        "type": "string",
        "optional": true
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
      "node_pools": {
        "type": [
          "list",
          [
            "object",
            {
              "cluster_id": "string",
              "compartment_id": "string",
              "id": "string",
              "initial_node_labels": [
                "list",
                [
                  "object",
                  {
                    "key": "string",
                    "value": "string"
                  }
                ]
              ],
              "kubernetes_version": "string",
              "name": "string",
              "node_config_details": [
                "list",
                [
                  "object",
                  {
                    "placement_configs": [
                      "list",
                      [
                        "object",
                        {
                          "availability_domain": "string",
                          "subnet_id": "string"
                        }
                      ]
                    ],
                    "size": "number"
                  }
                ]
              ],
              "node_image_id": "string",
              "node_image_name": "string",
              "node_metadata": [
                "map",
                "string"
              ],
              "node_pool_id": "string",
              "node_shape": "string",
              "node_source": [
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
              "node_source_details": [
                "list",
                [
                  "object",
                  {
                    "image_id": "string",
                    "source_type": "string"
                  }
                ]
              ],
              "nodes": [
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
              "quantity_per_subnet": "number",
              "ssh_public_key": "string",
              "subnet_ids": [
                "list",
                "string"
              ]
            }
          ]
        ],
        "computed": true
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

export interface DataOciContainerengineNodePoolsConfig extends TerraformMetaArguments {
  readonly clusterId?: string;
  readonly compartmentId: string;
  readonly name?: string;
  /** filter block */
  readonly filter?: DataOciContainerengineNodePoolsFilter[];
}
export class DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs extends ComplexComputedList {

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails extends ComplexComputedList {

  // placement_configs - computed: true, optional: false, required: true
  public get placementConfigs() {
    return 'not implemented' as any;
  }

  // size - computed: true, optional: false, required: true
  public get size() {
    return this.getNumberAttribute('size');
  }
}
export class DataOciContainerengineNodePoolsNodePoolsNodeSource extends ComplexComputedList {

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
export class DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails extends ComplexComputedList {

  // image_id - computed: true, optional: false, required: true
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // source_type - computed: true, optional: false, required: true
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}
export class DataOciContainerengineNodePoolsNodePoolsNodesError extends ComplexComputedList {

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
export class DataOciContainerengineNodePoolsNodePoolsNodes extends ComplexComputedList {

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
export class DataOciContainerengineNodePoolsNodePools extends ComplexComputedList {

  // cluster_id - computed: true, optional: false, required: true
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // initial_node_labels - computed: true, optional: false, required: true
  public get initialNodeLabels() {
    return 'not implemented' as any;
  }

  // kubernetes_version - computed: true, optional: false, required: true
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_config_details - computed: true, optional: false, required: true
  public get nodeConfigDetails() {
    return 'not implemented' as any;
  }

  // node_image_id - computed: true, optional: false, required: true
  public get nodeImageId() {
    return this.getStringAttribute('node_image_id');
  }

  // node_image_name - computed: true, optional: false, required: true
  public get nodeImageName() {
    return this.getStringAttribute('node_image_name');
  }

  // node_metadata - computed: true, optional: false, required: true
  public get nodeMetadata() {
    return 'not implemented' as any;
  }

  // node_pool_id - computed: true, optional: false, required: true
  public get nodePoolId() {
    return this.getStringAttribute('node_pool_id');
  }

  // node_shape - computed: true, optional: false, required: true
  public get nodeShape() {
    return this.getStringAttribute('node_shape');
  }

  // node_source - computed: true, optional: false, required: true
  public get nodeSource() {
    return 'not implemented' as any;
  }

  // node_source_details - computed: true, optional: false, required: true
  public get nodeSourceDetails() {
    return 'not implemented' as any;
  }

  // nodes - computed: true, optional: false, required: true
  public get nodes() {
    return 'not implemented' as any;
  }

  // quantity_per_subnet - computed: true, optional: false, required: true
  public get quantityPerSubnet() {
    return this.getNumberAttribute('quantity_per_subnet');
  }

  // ssh_public_key - computed: true, optional: false, required: true
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }

  // subnet_ids - computed: true, optional: false, required: true
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
}
export interface DataOciContainerengineNodePoolsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciContainerengineNodePools extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciContainerengineNodePoolsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_containerengine_node_pools',
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
    this._name = config.name;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string;
  public get clusterId() {
    return this._clusterId;
  }
  public set clusterId(value: string | undefined) {
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

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // node_pools - computed: true, optional: false, required: true
  public nodePools(index: string) {
    return new DataOciContainerengineNodePoolsNodePools(this, 'node_pools', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciContainerengineNodePoolsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciContainerengineNodePoolsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: this._clusterId,
      compartment_id: this._compartmentId,
      name: this._name,
      filter: this._filter,
    };
  }
}
