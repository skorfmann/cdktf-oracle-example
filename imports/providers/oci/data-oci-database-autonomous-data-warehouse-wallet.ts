// https://www.terraform.io/docs/providers/oci/r/data_oci_database_autonomous_data_warehouse_wallet.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "autonomous_data_warehouse_id": {
        "type": "string",
        "required": true
      },
      "base64_encode_content": {
        "type": "bool",
        "optional": true
      },
      "content": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "password": {
        "type": "string",
        "required": true,
        "sensitive": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataOciDatabaseAutonomousDataWarehouseWalletConfig extends TerraformMetaArguments {
  readonly autonomousDataWarehouseId: string;
  readonly base64EncodeContent?: boolean;
  readonly password: string;
}

// Resource

export class DataOciDatabaseAutonomousDataWarehouseWallet extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousDataWarehouseWalletConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_data_warehouse_wallet',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autonomousDataWarehouseId = config.autonomousDataWarehouseId;
    this._base64EncodeContent = config.base64EncodeContent;
    this._password = config.password;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_data_warehouse_id - computed: false, optional: false, required: true
  private _autonomousDataWarehouseId: string;
  public get autonomousDataWarehouseId() {
    return this._autonomousDataWarehouseId;
  }
  public set autonomousDataWarehouseId(value: string) {
    this._autonomousDataWarehouseId = value;
  }

  // base64_encode_content - computed: false, optional: true, required: false
  private _base64EncodeContent?: boolean;
  public get base64EncodeContent() {
    return this._base64EncodeContent;
  }
  public set base64EncodeContent(value: boolean | undefined) {
    this._base64EncodeContent = value;
  }

  // content - computed: true, optional: false, required: true
  public get content() {
    return this.getStringAttribute('content');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // password - computed: false, optional: false, required: true
  private _password: string;
  public get password() {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_data_warehouse_id: this._autonomousDataWarehouseId,
      base64_encode_content: this._base64EncodeContent,
      password: this._password,
    };
  }
}
