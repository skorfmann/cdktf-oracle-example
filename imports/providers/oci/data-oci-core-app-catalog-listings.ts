// https://www.terraform.io/docs/providers/oci/r/data_oci_core_app_catalog_listings.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "app_catalog_listings": {
        "type": [
          "list",
          [
            "object",
            {
              "contact_url": "string",
              "description": "string",
              "display_name": "string",
              "listing_id": "string",
              "publisher_logo_url": "string",
              "publisher_name": "string",
              "summary": "string",
              "time_published": "string"
            }
          ]
        ],
        "computed": true
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
      "publisher_name": {
        "type": "string",
        "optional": true
      },
      "publisher_type": {
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

export interface DataOciCoreAppCatalogListingsConfig extends TerraformMetaArguments {
  readonly displayName?: string;
  readonly publisherName?: string;
  readonly publisherType?: string;
  /** filter block */
  readonly filter?: DataOciCoreAppCatalogListingsFilter[];
}
export class DataOciCoreAppCatalogListingsAppCatalogListings extends ComplexComputedList {

  // contact_url - computed: true, optional: false, required: true
  public get contactUrl() {
    return this.getStringAttribute('contact_url');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // listing_id - computed: true, optional: false, required: true
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }

  // publisher_logo_url - computed: true, optional: false, required: true
  public get publisherLogoUrl() {
    return this.getStringAttribute('publisher_logo_url');
  }

  // publisher_name - computed: true, optional: false, required: true
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
  }

  // summary - computed: true, optional: false, required: true
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // time_published - computed: true, optional: false, required: true
  public get timePublished() {
    return this.getStringAttribute('time_published');
  }
}
export interface DataOciCoreAppCatalogListingsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreAppCatalogListings extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreAppCatalogListingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_core_app_catalog_listings',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._publisherName = config.publisherName;
    this._publisherType = config.publisherType;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_catalog_listings - computed: true, optional: false, required: true
  public appCatalogListings(index: string) {
    return new DataOciCoreAppCatalogListingsAppCatalogListings(this, 'app_catalog_listings', index);
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

  // publisher_name - computed: false, optional: true, required: false
  private _publisherName?: string;
  public get publisherName() {
    return this._publisherName;
  }
  public set publisherName(value: string | undefined) {
    this._publisherName = value;
  }

  // publisher_type - computed: false, optional: true, required: false
  private _publisherType?: string;
  public get publisherType() {
    return this._publisherType;
  }
  public set publisherType(value: string | undefined) {
    this._publisherType = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreAppCatalogListingsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreAppCatalogListingsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: this._displayName,
      publisher_name: this._publisherName,
      publisher_type: this._publisherType,
      filter: this._filter,
    };
  }
}
