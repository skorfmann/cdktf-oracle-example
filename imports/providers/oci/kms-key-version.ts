// https://www.terraform.io/docs/providers/oci/r/kms_key_version.html
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
        "optional": true,
        "computed": true
      },
      "key_id": {
        "type": "string",
        "required": true
      },
      "key_version_id": {
        "type": "string",
        "computed": true
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
        "optional": true,
        "computed": true
      },
      "vault_id": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
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

// Configuration

export interface KmsKeyVersionConfig extends TerraformMetaArguments {
  readonly keyId: string;
  readonly managementEndpoint: string;
  readonly timeOfDeletion?: string;
  /** timeouts block */
  readonly timeouts?: KmsKeyVersionTimeouts;
}
export interface KmsKeyVersionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class KmsKeyVersion extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KmsKeyVersionConfig) {
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
    this._managementEndpoint = config.managementEndpoint;
    this._timeOfDeletion = config.timeOfDeletion;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

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

  // key_version_id - computed: true, optional: false, required: true
  public get keyVersionId() {
    return this.getStringAttribute('key_version_id');
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

  // time_of_deletion - computed: true, optional: true, required: false
  private _timeOfDeletion?: string;
  public get timeOfDeletion() {
    return this._timeOfDeletion ?? this.getStringAttribute('time_of_deletion');
  }
  public set timeOfDeletion(value: string | undefined) {
    this._timeOfDeletion = value;
  }

  // vault_id - computed: true, optional: false, required: true
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KmsKeyVersionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KmsKeyVersionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      key_id: this._keyId,
      management_endpoint: this._managementEndpoint,
      time_of_deletion: this._timeOfDeletion,
      timeouts: this._timeouts,
    };
  }
}
