// https://www.terraform.io/docs/providers/oci/r/data_oci_containerengine_node_pool.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cluster_id": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "initial_node_labels": {
        "type": [
          "list",
          [
            "object",
            {
              "key": "string",
              "value": "string"
            }
          ]
        ],
        "computed": true
      },
      "kubernetes_version": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "node_config_details": {
        "type": [
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
        "computed": true
      },
      "node_image_id": {
        "type": "string",
        "computed": true
      },
      "node_image_name": {
        "type": "string",
        "computed": true
      },
      "node_metadata": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "node_pool_id": {
        "type": "string",
        "required": true
      },
      "node_shape": {
        "type": "string",
        "computed": true
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
      "node_source_details": {
        "type": [
          "list",
          [
            "object",
            {
              "image_id": "string",
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
        "computed": true
      },
      "ssh_public_key": {
        "type": "string",
        "computed": true
      },
      "subnet_ids": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataOciContainerengineNodePoolConfig extends TerraformMetaArguments {
  readonly nodePoolId: string;
}
export class DataOciContainerengineNodePoolInitialNodeLabels extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigs extends ComplexComputedList {

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataOciContainerengineNodePoolNodeConfigDetails extends ComplexComputedList {

  // placement_configs - computed: true, optional: false, required: true
  public get placementConfigs() {
    return 'not implemented' as any;
  }

  // size - computed: true, optional: false, required: true
  public get size() {
    return this.getNumberAttribute('size');
  }
}
export class DataOciContainerengineNodePoolNodeSource extends ComplexComputedList {

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
export class DataOciContainerengineNodePoolNodeSourceDetails extends ComplexComputedList {

  // image_id - computed: true, optional: false, required: true
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // source_type - computed: true, optional: false, required: true
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}
export class DataOciContainerengineNodePoolNodesError extends ComplexComputedList {

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
export class DataOciContainerengineNodePoolNodes extends ComplexComputedList {

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

// Resource

export class DataOciContainerengineNodePool extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciContainerengineNodePoolConfig) {
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
    this._nodePoolId = config.nodePoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  public initialNodeLabels(index: string) {
    return new DataOciContainerengineNodePoolInitialNodeLabels(this, 'initial_node_labels', index);
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
  public nodeConfigDetails(index: string) {
    return new DataOciContainerengineNodePoolNodeConfigDetails(this, 'node_config_details', index);
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
  public nodeMetadata(key: string): string {
    return new StringMap(this, 'node_metadata').lookup(key);
  }

  // node_pool_id - computed: false, optional: false, required: true
  private _nodePoolId: string;
  public get nodePoolId() {
    return this._nodePoolId;
  }
  public set nodePoolId(value: string) {
    this._nodePoolId = value;
  }

  // node_shape - computed: true, optional: false, required: true
  public get nodeShape() {
    return this.getStringAttribute('node_shape');
  }

  // node_source - computed: true, optional: false, required: true
  public nodeSource(index: string) {
    return new DataOciContainerengineNodePoolNodeSource(this, 'node_source', index);
  }

  // node_source_details - computed: true, optional: false, required: true
  public nodeSourceDetails(index: string) {
    return new DataOciContainerengineNodePoolNodeSourceDetails(this, 'node_source_details', index);
  }

  // nodes - computed: true, optional: false, required: true
  public nodes(index: string) {
    return new DataOciContainerengineNodePoolNodes(this, 'nodes', index);
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      node_pool_id: this._nodePoolId,
    };
  }
}
