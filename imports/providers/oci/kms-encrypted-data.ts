// https://www.terraform.io/docs/providers/oci/r/kms_encrypted_data.html
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
        "required": true
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

export interface KmsEncryptedDataConfig extends TerraformMetaArguments {
  readonly associatedData?: { [key: string]: string };
  readonly cryptoEndpoint: string;
  readonly keyId: string;
  readonly loggingContext?: { [key: string]: string };
  readonly plaintext: string;
  /** timeouts block */
  readonly timeouts?: KmsEncryptedDataTimeouts;
}
export interface KmsEncryptedDataTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class KmsEncryptedData extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KmsEncryptedDataConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_encrypted_data',
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
    this._keyId = config.keyId;
    this._loggingContext = config.loggingContext;
    this._plaintext = config.plaintext;
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

  // plaintext - computed: false, optional: false, required: true
  private _plaintext: string;
  public get plaintext() {
    return this._plaintext;
  }
  public set plaintext(value: string) {
    this._plaintext = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KmsEncryptedDataTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KmsEncryptedDataTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_data: this._associatedData,
      crypto_endpoint: this._cryptoEndpoint,
      key_id: this._keyId,
      logging_context: this._loggingContext,
      plaintext: this._plaintext,
      timeouts: this._timeouts,
    };
  }
}
