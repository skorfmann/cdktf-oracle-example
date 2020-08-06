// https://www.terraform.io/docs/providers/oci/r/datacatalog_data_asset.html
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
      "description": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "required": true
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
      "key": {
        "type": "string",
        "computed": true
      },
      "properties": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
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

export interface DatacatalogDataAssetConfig extends TerraformMetaArguments {
  readonly catalogId: string;
  readonly description?: string;
  readonly displayName: string;
  readonly properties?: { [key: string]: string };
  readonly typeKey: string;
  /** timeouts block */
  readonly timeouts?: DatacatalogDataAssetTimeouts;
}
export interface DatacatalogDataAssetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatacatalogDataAsset extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatacatalogDataAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datacatalog_data_asset',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._catalogId = config.catalogId;
    this._description = config.description;
    this._displayName = config.displayName;
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

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // properties - computed: true, optional: true, required: false
  private _properties?: { [key: string]: string }
  public get properties(): { [key: string]: string } | undefined {
    return this._properties; // Getting the computed value is not yet implemented
  }
  public set properties(value: { [key: string]: string } | undefined) {
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
  private _timeouts?: DatacatalogDataAssetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatacatalogDataAssetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: this._catalogId,
      description: this._description,
      display_name: this._displayName,
      properties: this._properties,
      type_key: this._typeKey,
      timeouts: this._timeouts,
    };
  }
}
