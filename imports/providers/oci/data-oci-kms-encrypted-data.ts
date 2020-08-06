// https://www.terraform.io/docs/providers/oci/r/data_oci_kms_encrypted_data.html
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
      "plaintext": {
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

export interface DataOciKmsEncryptedDataConfig extends TerraformMetaArguments {
  readonly associatedData?: { [key: string]: string };
  readonly cryptoEndpoint: string;
  readonly keyId: string;
  readonly plaintext: string;
}

// Resource

export class DataOciKmsEncryptedData extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciKmsEncryptedDataConfig) {
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
    this._plaintext = config.plaintext;
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

  // plaintext - computed: false, optional: false, required: true
  private _plaintext: string;
  public get plaintext() {
    return this._plaintext;
  }
  public set plaintext(value: string) {
    this._plaintext = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_data: this._associatedData,
      crypto_endpoint: this._cryptoEndpoint,
      key_id: this._keyId,
      plaintext: this._plaintext,
    };
  }
}
