// https://www.terraform.io/docs/providers/oci/r/data_oci_datacatalog_catalog_types.html
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
      "external_type_name": {
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
      "is_approved": {
        "type": "string",
        "optional": true
      },
      "is_internal": {
        "type": "string",
        "optional": true
      },
      "is_tag": {
        "type": "string",
        "optional": true
      },
      "name": {
        "type": "string",
        "optional": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "type_category": {
        "type": "string",
        "optional": true
      },
      "type_collection": {
        "type": [
          "list",
          [
            "object",
            {
              "catalog_id": "string",
              "description": "string",
              "key": "string",
              "name": "string",
              "state": "string",
              "type_category": "string",
              "uri": "string"
            }
          ]
        ],
        "computed": true
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

export interface DataOciDatacatalogCatalogTypesConfig extends TerraformMetaArguments {
  readonly catalogId: string;
  readonly externalTypeName?: string;
  readonly fields?: string[];
  readonly isApproved?: string;
  readonly isInternal?: string;
  readonly isTag?: string;
  readonly name?: string;
  readonly state?: string;
  readonly typeCategory?: string;
  /** filter block */
  readonly filter?: DataOciDatacatalogCatalogTypesFilter[];
}
export class DataOciDatacatalogCatalogTypesTypeCollection extends ComplexComputedList {

  // catalog_id - computed: true, optional: false, required: true
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // type_category - computed: true, optional: false, required: true
  public get typeCategory() {
    return this.getStringAttribute('type_category');
  }

  // uri - computed: true, optional: false, required: true
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export interface DataOciDatacatalogCatalogTypesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatacatalogCatalogTypes extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatacatalogCatalogTypesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datacatalog_catalog_types',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._catalogId = config.catalogId;
    this._externalTypeName = config.externalTypeName;
    this._fields = config.fields;
    this._isApproved = config.isApproved;
    this._isInternal = config.isInternal;
    this._isTag = config.isTag;
    this._name = config.name;
    this._state = config.state;
    this._typeCategory = config.typeCategory;
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

  // external_type_name - computed: false, optional: true, required: false
  private _externalTypeName?: string;
  public get externalTypeName() {
    return this._externalTypeName;
  }
  public set externalTypeName(value: string | undefined) {
    this._externalTypeName = value;
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

  // is_approved - computed: false, optional: true, required: false
  private _isApproved?: string;
  public get isApproved() {
    return this._isApproved;
  }
  public set isApproved(value: string | undefined) {
    this._isApproved = value;
  }

  // is_internal - computed: false, optional: true, required: false
  private _isInternal?: string;
  public get isInternal() {
    return this._isInternal;
  }
  public set isInternal(value: string | undefined) {
    this._isInternal = value;
  }

  // is_tag - computed: false, optional: true, required: false
  private _isTag?: string;
  public get isTag() {
    return this._isTag;
  }
  public set isTag(value: string | undefined) {
    this._isTag = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // type_category - computed: false, optional: true, required: false
  private _typeCategory?: string;
  public get typeCategory() {
    return this._typeCategory;
  }
  public set typeCategory(value: string | undefined) {
    this._typeCategory = value;
  }

  // type_collection - computed: true, optional: false, required: true
  public typeCollection(index: string) {
    return new DataOciDatacatalogCatalogTypesTypeCollection(this, 'type_collection', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatacatalogCatalogTypesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatacatalogCatalogTypesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: this._catalogId,
      external_type_name: this._externalTypeName,
      fields: this._fields,
      is_approved: this._isApproved,
      is_internal: this._isInternal,
      is_tag: this._isTag,
      name: this._name,
      state: this._state,
      type_category: this._typeCategory,
      filter: this._filter,
    };
  }
}
