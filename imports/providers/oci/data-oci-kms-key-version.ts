// https://www.terraform.io/docs/providers/oci/r/data_oci_kms_key_version.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "key_id": {
        "type": "string",
        "required": true
      },
      "key_version_id": {
        "type": "string",
        "required": true
      },
      "management_endpoint": {
        "type": "string",
        "required": true
      },
      "restored_from_key_id": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_of_deletion": {
        "type": "string",
        "computed": true
      },
      "vault_id": {
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

export interface DataOciKmsKeyVersionConfig extends TerraformMetaArguments {
  readonly keyId: string;
  readonly keyVersionId: string;
  readonly managementEndpoint: string;
}

// Resource

export class DataOciKmsKeyVersion extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciKmsKeyVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_key_version',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyId = config.keyId;
    this._keyVersionId = config.keyVersionId;
    this._managementEndpoint = config.managementEndpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId: string;
  public get keyId() {
    return this._keyId;
  }
  public set keyId(value: string) {
    this._keyId = value;
  }

  // key_version_id - computed: false, optional: false, required: true
  private _keyVersionId: string;
  public get keyVersionId() {
    return this._keyVersionId;
  }
  public set keyVersionId(value: string) {
    this._keyVersionId = value;
  }

  // management_endpoint - computed: false, optional: false, required: true
  private _managementEndpoint: string;
  public get managementEndpoint() {
    return this._managementEndpoint;
  }
  public set managementEndpoint(value: string) {
    this._managementEndpoint = value;
  }

  // restored_from_key_id - computed: true, optional: false, required: true
  public get restoredFromKeyId() {
    return this.getStringAttribute('restored_from_key_id');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_of_deletion - computed: true, optional: false, required: true
  public get timeOfDeletion() {
    return this.getStringAttribute('time_of_deletion');
  }

  // vault_id - computed: true, optional: false, required: true
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      key_id: this._keyId,
      key_version_id: this._keyVersionId,
      management_endpoint: this._managementEndpoint,
    };
  }
}
