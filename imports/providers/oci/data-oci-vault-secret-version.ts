// https://www.terraform.io/docs/providers/oci/r/data_oci_vault_secret_version.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "content_type": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "secret_id": {
        "type": "string",
        "required": true
      },
      "secret_version_number": {
        "type": "string",
        "required": true
      },
      "stages": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_of_current_version_expiry": {
        "type": "string",
        "computed": true
      },
      "time_of_deletion": {
        "type": "string",
        "computed": true
      },
      "version_number": {
        "type": "string",
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

export interface DataOciVaultSecretVersionConfig extends TerraformMetaArguments {
  readonly secretId: string;
  readonly secretVersionNumber: string;
}

// Resource

export class DataOciVaultSecretVersion extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciVaultSecretVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_vault_secret_version',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._secretId = config.secretId;
    this._secretVersionNumber = config.secretVersionNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_type - computed: true, optional: false, required: true
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId: string;
  public get secretId() {
    return this._secretId;
  }
  public set secretId(value: string) {
    this._secretId = value;
  }

  // secret_version_number - computed: false, optional: false, required: true
  private _secretVersionNumber: string;
  public get secretVersionNumber() {
    return this._secretVersionNumber;
  }
  public set secretVersionNumber(value: string) {
    this._secretVersionNumber = value;
  }

  // stages - computed: true, optional: false, required: true
  public get stages() {
    return this.getListAttribute('stages');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_of_current_version_expiry - computed: true, optional: false, required: true
  public get timeOfCurrentVersionExpiry() {
    return this.getStringAttribute('time_of_current_version_expiry');
  }

  // time_of_deletion - computed: true, optional: false, required: true
  public get timeOfDeletion() {
    return this.getStringAttribute('time_of_deletion');
  }

  // version_number - computed: true, optional: false, required: true
  public get versionNumber() {
    return this.getStringAttribute('version_number');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      secret_id: this._secretId,
      secret_version_number: this._secretVersionNumber,
    };
  }
}
