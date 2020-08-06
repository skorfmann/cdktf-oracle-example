// https://www.terraform.io/docs/providers/oci/r/data_oci_datacatalog_connection.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "catalog_id": {
        "type": "string",
        "required": true
      },
      "connection_key": {
        "type": "string",
        "required": true
      },
      "created_by_id": {
        "type": "string",
        "computed": true
      },
      "data_asset_key": {
        "type": "string",
        "required": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "enc_properties": {
        "type": [
          "map",
          "string"
        ],
        "computed": true,
        "sensitive": true
      },
      "external_key": {
        "type": "string",
        "computed": true
      },
      "fields": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "is_default": {
        "type": "bool",
        "computed": true
      },
      "key": {
        "type": "string",
        "computed": true
      },
      "properties": {
        "type": [
          "map",
          "string"
        ],
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
      "time_status_updated": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
        "type": "string",
        "computed": true
      },
      "type_key": {
        "type": "string",
        "computed": true
      },
      "updated_by_id": {
        "type": "string",
        "computed": true
      },
      "uri": {
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
import { StringMap } from "cdktf";

// Configuration

export interface DataOciDatacatalogConnectionConfig extends TerraformMetaArguments {
  readonly catalogId: string;
  readonly connectionKey: string;
  readonly dataAssetKey: string;
  readonly fields?: string[];
}

// Resource

export class DataOciDatacatalogConnection extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatacatalogConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datacatalog_connection',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._catalogId = config.catalogId;
    this._connectionKey = config.connectionKey;
    this._dataAssetKey = config.dataAssetKey;
    this._fields = config.fields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: false, optional: false, required: true
  private _catalogId: string;
  public get catalogId() {
    return this._catalogId;
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }

  // connection_key - computed: false, optional: false, required: true
  private _connectionKey: string;
  public get connectionKey() {
    return this._connectionKey;
  }
  public set connectionKey(value: string) {
    this._connectionKey = value;
  }

  // created_by_id - computed: true, optional: false, required: true
  public get createdById() {
    return this.getStringAttribute('created_by_id');
  }

  // data_asset_key - computed: false, optional: false, required: true
  private _dataAssetKey: string;
  public get dataAssetKey() {
    return this._dataAssetKey;
  }
  public set dataAssetKey(value: string) {
    this._dataAssetKey = value;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enc_properties - computed: true, optional: false, required: true
  public encProperties(key: string): string {
    return new StringMap(this, 'enc_properties').lookup(key);
  }

  // external_key - computed: true, optional: false, required: true
  public get externalKey() {
    return this.getStringAttribute('external_key');
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[];
  public get fields() {
    return this._fields;
  }
  public set fields(value: string[] | undefined) {
    this._fields = value;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: true
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // properties - computed: true, optional: false, required: true
  public properties(key: string): string {
    return new StringMap(this, 'properties').lookup(key);
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_status_updated - computed: true, optional: false, required: true
  public get timeStatusUpdated() {
    return this.getStringAttribute('time_status_updated');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type_key - computed: true, optional: false, required: true
  public get typeKey() {
    return this.getStringAttribute('type_key');
  }

  // updated_by_id - computed: true, optional: false, required: true
  public get updatedById() {
    return this.getStringAttribute('updated_by_id');
  }

  // uri - computed: true, optional: false, required: true
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: this._catalogId,
      connection_key: this._connectionKey,
      data_asset_key: this._dataAssetKey,
      fields: this._fields,
    };
  }
}
