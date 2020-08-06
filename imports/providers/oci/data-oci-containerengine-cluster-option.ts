// https://www.terraform.io/docs/providers/oci/r/data_oci_containerengine_cluster_option.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cluster_option_id": {
        "type": "string",
        "required": true
      },
      "compartment_id": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kubernetes_versions": {
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

// Configuration

export interface DataOciContainerengineClusterOptionConfig extends TerraformMetaArguments {
  readonly clusterOptionId: string;
  readonly compartmentId?: string;
}

// Resource

export class DataOciContainerengineClusterOption extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciContainerengineClusterOptionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_containerengine_cluster_option',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterOptionId = config.clusterOptionId;
    this._compartmentId = config.compartmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_option_id - computed: false, optional: false, required: true
  private _clusterOptionId: string;
  public get clusterOptionId() {
    return this._clusterOptionId;
  }
  public set clusterOptionId(value: string) {
    this._clusterOptionId = value;
  }

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

  // kubernetes_versions - computed: true, optional: false, required: true
  public get kubernetesVersions() {
    return this.getListAttribute('kubernetes_versions');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_option_id: this._clusterOptionId,
      compartment_id: this._compartmentId,
    };
  }
}
