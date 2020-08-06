// https://www.terraform.io/docs/providers/oci/r/data_oci_containerengine_cluster_kube_config.html
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
      "content": {
        "type": "string",
        "computed": true
      },
      "expiration": {
        "type": "number",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "token_version": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataOciContainerengineClusterKubeConfigConfig extends TerraformMetaArguments {
  readonly clusterId: string;
  readonly expiration?: number;
  readonly tokenVersion?: string;
}

// Resource

export class DataOciContainerengineClusterKubeConfig extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciContainerengineClusterKubeConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_containerengine_cluster_kube_config',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterId = config.clusterId;
    this._expiration = config.expiration;
    this._tokenVersion = config.tokenVersion;
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

  // content - computed: true, optional: false, required: true
  public get content() {
    return this.getStringAttribute('content');
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: number;
  public get expiration() {
    return this._expiration;
  }
  public set expiration(value: number | undefined) {
    this._expiration = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // token_version - computed: false, optional: true, required: false
  private _tokenVersion?: string;
  public get tokenVersion() {
    return this._tokenVersion;
  }
  public set tokenVersion(value: string | undefined) {
    this._tokenVersion = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: this._clusterId,
      expiration: this._expiration,
      token_version: this._tokenVersion,
    };
  }
}
