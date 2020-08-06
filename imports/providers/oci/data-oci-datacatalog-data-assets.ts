// https://www.terraform.io/docs/providers/oci/r/data_oci_datacatalog_data_assets.html
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
      "created_by_id": {
        "type": "string",
        "optional": true
      },
      "data_asset_collection": {
        "type": [
          "list",
          [
            "object",
            {
              "catalog_id": "string",
              "created_by_id": "string",
              "description": "string",
              "display_name": "string",
              "external_key": "string",
              "id": "string",
              "key": "string",
              "properties": [
                "map",
                "string"
              ],
              "state": "string",
              "time_created": "string",
              "time_updated": "string",
              "type_key": "string",
              "updated_by_id": "string",
              "uri": "string"
            }
          ]
        ],
        "computed": true
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
      "state": {
        "type": "string",
        "optional": true
      },
      "type_key": {
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

export interface DataOciDatacatalogDataAssetsConfig extends TerraformMetaArguments {
  readonly catalogId: string;
  readonly createdById?: string;
  readonly displayName?: string;
  readonly externalKey?: string;
  readonly fields?: string[];
  readonly state?: string;
  readonly typeKey?: string;
  /** filter block */
  readonly filter?: DataOciDatacatalogDataAssetsFilter[];
}
export class DataOciDatacatalogDataAssetsDataAssetCollection extends ComplexComputedList {

  // catalog_id - computed: true, optional: false, required: true
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // created_by_id - computed: true, optional: false, required: true
  public get createdById() {
    return this.getStringAttribute('created_by_id');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // external_key - computed: true, optional: false, required: true
  public get externalKey() {
    return this.getStringAttribute('external_key');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
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
export interface DataOciDatacatalogDataAssetsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatacatalogDataAssets extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatacatalogDataAssetsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datacatalog_data_assets',
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
    this._displayName = config.displayName;
    this._externalKey = config.externalKey;
    this._fields = config.fields;
    this._state = config.state;
    this._typeKey = config.typeKey;
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

  // created_by_id - computed: false, optional: true, required: false
  private _createdById?: string;
  public get createdById() {
    return this._createdById;
  }
  public set createdById(value: string | undefined) {
    this._createdById = value;
  }

  // data_asset_collection - computed: true, optional: false, required: true
  public dataAssetCollection(index: string) {
    return new DataOciDatacatalogDataAssetsDataAssetCollection(this, 'data_asset_collection', index);
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

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // type_key - computed: false, optional: true, required: false
  private _typeKey?: string;
  public get typeKey() {
    return this._typeKey;
  }
  public set typeKey(value: string | undefined) {
    this._typeKey = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatacatalogDataAssetsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatacatalogDataAssetsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: this._catalogId,
      created_by_id: this._createdById,
      display_name: this._displayName,
      external_key: this._externalKey,
      fields: this._fields,
      state: this._state,
      type_key: this._typeKey,
      filter: this._filter,
    };
  }
}
