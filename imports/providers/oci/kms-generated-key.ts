// https://www.terraform.io/docs/providers/oci/r/kms_generated_key.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "associated_data": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "ciphertext": {
        "type": "string",
        "computed": true
      },
      "crypto_endpoint": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "include_plaintext_key": {
        "type": "bool",
        "required": true
      },
      "key_id": {
        "type": "string",
        "required": true
      },
      "logging_context": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "plaintext": {
        "type": "string",
        "computed": true
      },
      "plaintext_checksum": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "key_shape": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "algorithm": {
              "type": "string",
              "required": true
            },
            "length": {
              "type": "number",
              "required": true
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
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

export interface KmsGeneratedKeyConfig extends TerraformMetaArguments {
  readonly associatedData?: { [key: string]: string };
  readonly cryptoEndpoint: string;
  readonly includePlaintextKey: boolean;
  readonly keyId: string;
  readonly loggingContext?: { [key: string]: string };
  /** key_shape block */
  readonly keyShape: KmsGeneratedKeyKeyShape[];
  /** timeouts block */
  readonly timeouts?: KmsGeneratedKeyTimeouts;
}
export interface KmsGeneratedKeyKeyShape {
  readonly algorithm: string;
  readonly length: number;
}
export interface KmsGeneratedKeyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class KmsGeneratedKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KmsGeneratedKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_generated_key',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._associatedData = config.associatedData;
    this._cryptoEndpoint = config.cryptoEndpoint;
    this._includePlaintextKey = config.includePlaintextKey;
    this._keyId = config.keyId;
    this._loggingContext = config.loggingContext;
    this._keyShape = config.keyShape;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_data - computed: false, optional: true, required: false
  private _associatedData?: { [key: string]: string };
  public get associatedData() {
    return this._associatedData;
  }
  public set associatedData(value: { [key: string]: string } | undefined) {
    this._associatedData = value;
  }

  // ciphertext - computed: true, optional: false, required: true
  public get ciphertext() {
    return this.getStringAttribute('ciphertext');
  }

  // crypto_endpoint - computed: false, optional: false, required: true
  private _cryptoEndpoint: string;
  public get cryptoEndpoint() {
    return this._cryptoEndpoint;
  }
  public set cryptoEndpoint(value: string) {
    this._cryptoEndpoint = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // include_plaintext_key - computed: false, optional: false, required: true
  private _includePlaintextKey: boolean;
  public get includePlaintextKey() {
    return this._includePlaintextKey;
  }
  public set includePlaintextKey(value: boolean) {
    this._includePlaintextKey = value;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId: string;
  public get keyId() {
    return this._keyId;
  }
  public set keyId(value: string) {
    this._keyId = value;
  }

  // logging_context - computed: false, optional: true, required: false
  private _loggingContext?: { [key: string]: string };
  public get loggingContext() {
    return this._loggingContext;
  }
  public set loggingContext(value: { [key: string]: string } | undefined) {
    this._loggingContext = value;
  }

  // plaintext - computed: true, optional: false, required: true
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }

  // plaintext_checksum - computed: true, optional: false, required: true
  public get plaintextChecksum() {
    return this.getStringAttribute('plaintext_checksum');
  }

  // key_shape - computed: false, optional: false, required: true
  private _keyShape: KmsGeneratedKeyKeyShape[];
  public get keyShape() {
    return this._keyShape;
  }
  public set keyShape(value: KmsGeneratedKeyKeyShape[]) {
    this._keyShape = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KmsGeneratedKeyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KmsGeneratedKeyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_data: this._associatedData,
      crypto_endpoint: this._cryptoEndpoint,
      include_plaintext_key: this._includePlaintextKey,
      key_id: this._keyId,
      logging_context: this._loggingContext,
      key_shape: this._keyShape,
      timeouts: this._timeouts,
    };
  }
}
