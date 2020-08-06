// https://www.terraform.io/docs/providers/oci/r/data_oci_kms_key_versions.html
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
      "key_id": {
        "type": "string",
        "required": true
      },
      "key_versions": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "id": "string",
              "key_id": "string",
              "key_version_id": "string",
              "management_endpoint": "string",
              "restored_from_key_id": "string",
              "state": "string",
              "time_created": "string",
              "time_of_deletion": "string",
              "vault_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "management_endpoint": {
        "type": "string",
        "required": true
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

export interface DataOciKmsKeyVersionsConfig extends TerraformMetaArguments {
  readonly keyId: string;
  readonly managementEndpoint: string;
  /** filter block */
  readonly filter?: DataOciKmsKeyVersionsFilter[];
}
export class DataOciKmsKeyVersionsKeyVersions extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: true, optional: false, required: true
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_version_id - computed: true, optional: false, required: true
  public get keyVersionId() {
    return this.getStringAttribute('key_version_id');
  }

  // management_endpoint - computed: true, optional: false, required: true
  public get managementEndpoint() {
    return this.getStringAttribute('management_endpoint');
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
}
export interface DataOciKmsKeyVersionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciKmsKeyVersions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciKmsKeyVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_key_versions',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyId = config.keyId;
    this._managementEndpoint = config.managementEndpoint;
    this._filter = config.filter;
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

  // key_id - computed: false, optional: false, required: true
  private _keyId: string;
  public get keyId() {
    return this._keyId;
  }
  public set keyId(value: string) {
    this._keyId = value;
  }

  // key_versions - computed: true, optional: false, required: true
  public keyVersions(index: string) {
    return new DataOciKmsKeyVersionsKeyVersions(this, 'key_versions', index);
  }

  // management_endpoint - computed: false, optional: false, required: true
  private _managementEndpoint: string;
  public get managementEndpoint() {
    return this._managementEndpoint;
  }
  public set managementEndpoint(value: string) {
    this._managementEndpoint = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciKmsKeyVersionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciKmsKeyVersionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      key_id: this._keyId,
      management_endpoint: this._managementEndpoint,
      filter: this._filter,
    };
  }
}
