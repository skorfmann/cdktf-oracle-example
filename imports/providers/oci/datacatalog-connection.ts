// https://www.terraform.io/docs/providers/oci/r/datacatalog_connection.html
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
        "computed": true
      },
      "data_asset_key": {
        "type": "string",
        "required": true
      },
      "description": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "required": true
      },
      "enc_properties": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "sensitive": true
      },
      "external_key": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_default": {
        "type": "bool",
        "optional": true,
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
        "required": true
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
        "required": true
      },
      "updated_by_id": {
        "type": "string",
        "computed": true
      },
      "uri": {
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

export interface DatacatalogConnectionConfig extends TerraformMetaArguments {
  readonly catalogId: string;
  readonly dataAssetKey: string;
  readonly description?: string;
  readonly displayName: string;
  readonly encProperties?: { [key: string]: string };
  readonly isDefault?: boolean;
  readonly properties: { [key: string]: string };
  readonly typeKey: string;
  /** timeouts block */
  readonly timeouts?: DatacatalogConnectionTimeouts;
}
export interface DatacatalogConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatacatalogConnection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatacatalogConnectionConfig) {
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
    this._dataAssetKey = config.dataAssetKey;
    this._description = config.description;
    this._displayName = config.displayName;
    this._encProperties = config.encProperties;
    this._isDefault = config.isDefault;
    this._properties = config.properties;
    this._typeKey = config.typeKey;
    this._timeouts = config.timeouts;
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

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description ?? this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // enc_properties - computed: false, optional: true, required: false
  private _encProperties?: { [key: string]: string };
  public get encProperties() {
    return this._encProperties;
  }
  public set encProperties(value: { [key: string]: string } | undefined) {
    this._encProperties = value;
  }

  // external_key - computed: true, optional: false, required: true
  public get externalKey() {
    return this.getStringAttribute('external_key');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean;
  public get isDefault() {
    return this._isDefault ?? this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | undefined) {
    this._isDefault = value;
  }

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // properties - computed: false, optional: false, required: true
  private _properties: { [key: string]: string };
  public get properties() {
    return this._properties;
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
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

  // type_key - computed: false, optional: false, required: true
  private _typeKey: string;
  public get typeKey() {
    return this._typeKey;
  }
  public set typeKey(value: string) {
    this._typeKey = value;
  }

  // updated_by_id - computed: true, optional: false, required: true
  public get updatedById() {
    return this.getStringAttribute('updated_by_id');
  }

  // uri - computed: true, optional: false, required: true
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatacatalogConnectionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatacatalogConnectionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: this._catalogId,
      data_asset_key: this._dataAssetKey,
      description: this._description,
      display_name: this._displayName,
      enc_properties: this._encProperties,
      is_default: this._isDefault,
      properties: this._properties,
      type_key: this._typeKey,
      timeouts: this._timeouts,
    };
  }
}
