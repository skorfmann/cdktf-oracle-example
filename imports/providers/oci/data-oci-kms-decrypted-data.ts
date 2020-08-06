// https://www.terraform.io/docs/providers/oci/r/data_oci_kms_decrypted_data.html
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
        "required": true
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
        "computed": true
      },
      "plaintext_checksum": {
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

export interface DataOciKmsDecryptedDataConfig extends TerraformMetaArguments {
  readonly associatedData?: { [key: string]: string };
  readonly ciphertext: string;
  readonly cryptoEndpoint: string;
  readonly keyId: string;
}

// Resource

export class DataOciKmsDecryptedData extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciKmsDecryptedDataConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_decrypted_data',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._associatedData = config.associatedData;
    this._ciphertext = config.ciphertext;
    this._cryptoEndpoint = config.cryptoEndpoint;
    this._keyId = config.keyId;
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

  // ciphertext - computed: false, optional: false, required: true
  private _ciphertext: string;
  public get ciphertext() {
    return this._ciphertext;
  }
  public set ciphertext(value: string) {
    this._ciphertext = value;
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

  // plaintext - computed: true, optional: false, required: true
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }

  // plaintext_checksum - computed: true, optional: false, required: true
  public get plaintextChecksum() {
    return this.getStringAttribute('plaintext_checksum');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_data: this._associatedData,
      ciphertext: this._ciphertext,
      crypto_endpoint: this._cryptoEndpoint,
      key_id: this._keyId,
    };
  }
}
