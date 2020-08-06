// https://www.terraform.io/docs/providers/oci/r/data_oci_kms_vault_usage.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "key_count": {
        "type": "number",
        "computed": true
      },
      "key_version_count": {
        "type": "number",
        "computed": true
      },
      "vault_id": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataOciKmsVaultUsageConfig extends TerraformMetaArguments {
  readonly vaultId: string;
}

// Resource

export class DataOciKmsVaultUsage extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciKmsVaultUsageConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_vault_usage',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._vaultId = config.vaultId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_count - computed: true, optional: false, required: true
  public get keyCount() {
    return this.getNumberAttribute('key_count');
  }

  // key_version_count - computed: true, optional: false, required: true
  public get keyVersionCount() {
    return this.getNumberAttribute('key_version_count');
  }

  // vault_id - computed: false, optional: false, required: true
  private _vaultId: string;
  public get vaultId() {
    return this._vaultId;
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      vault_id: this._vaultId,
    };
  }
}
