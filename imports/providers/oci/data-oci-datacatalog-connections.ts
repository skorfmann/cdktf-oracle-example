// https://www.terraform.io/docs/providers/oci/r/data_oci_datacatalog_connections.html
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
      "connection_collection": {
        "type": [
          "list",
          [
            "object",
            {
              "catalog_id": "string",
              "created_by_id": "string",
              "data_asset_key": "string",
              "description": "string",
              "display_name": "string",
              "enc_properties": [
                "map",
                "string"
              ],
              "external_key": "string",
              "id": "string",
              "is_default": "bool",
              "key": "string",
              "properties": [
                "map",
                "string"
              ],
              "state": "string",
              "time_created": "string",
              "time_status_updated": "string",
              "time_updated": "string",
              "type_key": "string",
              "updated_by_id": "string",
              "uri": "string"
            }
          ]
        ],
        "computed": true
      },
      "created_by_id": {
        "type": "string",
        "optional": true
      },
      "data_asset_key": {
        "type": "string",
        "required": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "external_key": {
        "type": "string",
        "optional": true
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
        "optional": true,
        "computed": true
      },
      "is_default": {
        "type": "bool",
        "optional": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "time_created": {
        "type": "string",
        "optional": true
      },
      "time_status_updated": {
        "type": "string",
        "optional": true
      },
      "time_updated": {
        "type": "string",
        "optional": true
      },
      "updated_by_id": {
        "type": "string",
        "optional": true
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

export interface DataOciDatacatalogConnectionsConfig extends TerraformMetaArguments {
  readonly catalogId: string;
  readonly createdById?: string;
  readonly dataAssetKey: string;
  readonly displayName?: string;
  readonly externalKey?: string;
  readonly fields?: string[];
  readonly isDefault?: boolean;
  readonly state?: string;
  readonly timeCreated?: string;
  readonly timeStatusUpdated?: string;
  readonly timeUpdated?: string;
  readonly updatedById?: string;
  /** filter block */
  readonly filter?: DataOciDatacatalogConnectionsFilter[];
}
export class DataOciDatacatalogConnectionsConnectionCollection extends ComplexComputedList {

  // catalog_id - computed: true, optional: false, required: true
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // created_by_id - computed: true, optional: false, required: true
  public get createdById() {
    return this.getStringAttribute('created_by_id');
  }

  // data_asset_key - computed: true, optional: false, required: true
  public get dataAssetKey() {
    return this.getStringAttribute('data_asset_key');
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
  public get encProperties() {
    return 'not implemented' as any;
  }

  // external_key - computed: true, optional: false, required: true
  public get externalKey() {
    return this.getStringAttribute('external_key');
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
  public get properties() {
    return 'not implemented' as any;
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
}
export interface DataOciDatacatalogConnectionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatacatalogConnections extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatacatalogConnectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datacatalog_connections',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._catalogId = config.catalogId;
    this._createdById = config.createdById;
    this._dataAssetKey = config.dataAssetKey;
    this._displayName = config.displayName;
    this._externalKey = config.externalKey;
    this._fields = config.fields;
    this._isDefault = config.isDefault;
    this._state = config.state;
    this._timeCreated = config.timeCreated;
    this._timeStatusUpdated = config.timeStatusUpdated;
    this._timeUpdated = config.timeUpdated;
    this._updatedById = config.updatedById;
    this._filter = config.filter;
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

  // connection_collection - computed: true, optional: false, required: true
  public connectionCollection(index: string) {
    return new DataOciDatacatalogConnectionsConnectionCollection(this, 'connection_collection', index);
  }

  // created_by_id - computed: false, optional: true, required: false
  private _createdById?: string;
  public get createdById() {
    return this._createdById;
  }
  public set createdById(value: string | undefined) {
    this._createdById = value;
  }

  // data_asset_key - computed: false, optional: false, required: true
  private _dataAssetKey: string;
  public get dataAssetKey() {
    return this._dataAssetKey;
  }
  public set dataAssetKey(value: string) {
    this._dataAssetKey = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // external_key - computed: false, optional: true, required: false
  private _externalKey?: string;
  public get externalKey() {
    return this._externalKey;
  }
  public set externalKey(value: string | undefined) {
    this._externalKey = value;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[];
  public get fields() {
    return this._fields;
  }
  public set fields(value: string[] | undefined) {
    this._fields = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean;
  public get isDefault() {
    return this._isDefault;
  }
  public set isDefault(value: boolean | undefined) {
    this._isDefault = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // time_created - computed: false, optional: true, required: false
  private _timeCreated?: string;
  public get timeCreated() {
    return this._timeCreated;
  }
  public set timeCreated(value: string | undefined) {
    this._timeCreated = value;
  }

  // time_status_updated - computed: false, optional: true, required: false
  private _timeStatusUpdated?: string;
  public get timeStatusUpdated() {
    return this._timeStatusUpdated;
  }
  public set timeStatusUpdated(value: string | undefined) {
    this._timeStatusUpdated = value;
  }

  // time_updated - computed: false, optional: true, required: false
  private _timeUpdated?: string;
  public get timeUpdated() {
    return this._timeUpdated;
  }
  public set timeUpdated(value: string | undefined) {
    this._timeUpdated = value;
  }

  // updated_by_id - computed: false, optional: true, required: false
  private _updatedById?: string;
  public get updatedById() {
    return this._updatedById;
  }
  public set updatedById(value: string | undefined) {
    this._updatedById = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatacatalogConnectionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatacatalogConnectionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: this._catalogId,
      created_by_id: this._createdById,
      data_asset_key: this._dataAssetKey,
      display_name: this._displayName,
      external_key: this._externalKey,
      fields: this._fields,
      is_default: this._isDefault,
      state: this._state,
      time_created: this._timeCreated,
      time_status_updated: this._timeStatusUpdated,
      time_updated: this._timeUpdated,
      updated_by_id: this._updatedById,
      filter: this._filter,
    };
  }
}
