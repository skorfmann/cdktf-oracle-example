// https://www.terraform.io/docs/providers/oci/r/data_oci_containerengine_node_pool_option.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "images": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "kubernetes_versions": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "node_pool_option_id": {
        "type": "string",
        "required": true
      },
      "shapes": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "sources": {
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

export interface DataOciContainerengineNodePoolOptionConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly nodePoolOptionId: string;
}
export class DataOciContainerengineNodePoolOptionSources extends ComplexComputedList {

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

// Resource

export class DataOciContainerengineNodePoolOption extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciContainerengineNodePoolOptionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_containerengine_node_pool_option',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._nodePoolOptionId = config.nodePoolOptionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string | undefined) {
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

  // images - computed: true, optional: false, required: true
  public get images() {
    return this.getListAttribute('images');
  }

  // kubernetes_versions - computed: true, optional: false, required: true
  public get kubernetesVersions() {
    return this.getListAttribute('kubernetes_versions');
  }

  // node_pool_option_id - computed: false, optional: false, required: true
  private _nodePoolOptionId: string;
  public get nodePoolOptionId() {
    return this._nodePoolOptionId;
  }
  public set nodePoolOptionId(value: string) {
    this._nodePoolOptionId = value;
  }

  // shapes - computed: true, optional: false, required: true
  public get shapes() {
    return this.getListAttribute('shapes');
  }

  // sources - computed: true, optional: false, required: true
  public sources(index: string) {
    return new DataOciContainerengineNodePoolOptionSources(this, 'sources', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      node_pool_option_id: this._nodePoolOptionId,
    };
  }
}
