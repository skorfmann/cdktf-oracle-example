// https://www.terraform.io/docs/providers/oci/r/data_oci_datacatalog_catalogs.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "catalogs": {
        "type": [
          "list",
          [
            "object",
            {
              "attached_catalog_private_endpoints": [
                "list",
                "string"
              ],
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "lifecycle_details": "string",
              "number_of_objects": "number",
              "service_api_url": "string",
              "service_console_url": "string",
              "state": "string",
              "time_created": "string",
              "time_updated": "string"
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "display_name": {
        "type": "string",
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

export interface DataOciDatacatalogCatalogsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciDatacatalogCatalogsFilter[];
}
export class DataOciDatacatalogCatalogsCatalogs extends ComplexComputedList {

  // attached_catalog_private_endpoints - computed: true, optional: false, required: true
  public get attachedCatalogPrivateEndpoints() {
    return this.getListAttribute('attached_catalog_private_endpoints');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // number_of_objects - computed: true, optional: false, required: true
  public get numberOfObjects() {
    return this.getNumberAttribute('number_of_objects');
  }

  // service_api_url - computed: true, optional: false, required: true
  public get serviceApiUrl() {
    return this.getStringAttribute('service_api_url');
  }

  // service_console_url - computed: true, optional: false, required: true
  public get serviceConsoleUrl() {
    return this.getStringAttribute('service_console_url');
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
}
export interface DataOciDatacatalogCatalogsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatacatalogCatalogs extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatacatalogCatalogsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datacatalog_catalogs',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalogs - computed: true, optional: false, required: true
  public catalogs(index: string) {
    return new DataOciDatacatalogCatalogsCatalogs(this, 'catalogs', index);
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatacatalogCatalogsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatacatalogCatalogsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      state: this._state,
      filter: this._filter,
    };
  }
}
