// https://www.terraform.io/docs/providers/oci/r/data_oci_marketplace_listings.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "category": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "compartment_id": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_featured": {
        "type": "bool",
        "optional": true
      },
      "listing_id": {
        "type": "string",
        "optional": true
      },
      "listings": {
        "type": [
          "list",
          [
            "object",
            {
              "categories": [
                "list",
                "string"
              ],
              "icon": [
                "list",
                [
                  "object",
                  {
                    "content_url": "string",
                    "file_extension": "string",
                    "mime_type": "string",
                    "name": "string"
                  }
                ]
              ],
              "id": "string",
              "is_featured": "bool",
              "name": "string",
              "package_type": "string",
              "pricing_types": [
                "list",
                "string"
              ],
              "publisher": [
                "list",
                [
                  "object",
                  {
                    "description": "string",
                    "id": "string",
                    "name": "string"
                  }
                ]
              ],
              "regions": [
                "list",
                [
                  "object",
                  {
                    "code": "string",
                    "countries": [
                      "list",
                      [
                        "object",
                        {
                          "code": "string",
                          "name": "string"
                        }
                      ]
                    ],
                    "name": "string"
                  }
                ]
              ],
              "short_description": "string",
              "tagline": "string"
            }
          ]
        ],
        "computed": true
      },
      "name": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "package_type": {
        "type": "string",
        "optional": true
      },
      "pricing": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "publisher_id": {
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

export interface DataOciMarketplaceListingsConfig extends TerraformMetaArguments {
  readonly category?: string[];
  readonly compartmentId?: string;
  readonly isFeatured?: boolean;
  readonly listingId?: string;
  readonly name?: string[];
  readonly packageType?: string;
  readonly pricing?: string[];
  readonly publisherId?: string;
  /** filter block */
  readonly filter?: DataOciMarketplaceListingsFilter[];
}
export class DataOciMarketplaceListingsListingsIcon extends ComplexComputedList {

  // content_url - computed: true, optional: false, required: true
  public get contentUrl() {
    return this.getStringAttribute('content_url');
  }

  // file_extension - computed: true, optional: false, required: true
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }

  // mime_type - computed: true, optional: false, required: true
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciMarketplaceListingsListingsPublisher extends ComplexComputedList {

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciMarketplaceListingsListingsRegionsCountries extends ComplexComputedList {

  // code - computed: true, optional: false, required: true
  public get code() {
    return this.getStringAttribute('code');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciMarketplaceListingsListingsRegions extends ComplexComputedList {

  // code - computed: true, optional: false, required: true
  public get code() {
    return this.getStringAttribute('code');
  }

  // countries - computed: true, optional: false, required: true
  public get countries() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciMarketplaceListingsListings extends ComplexComputedList {

  // categories - computed: true, optional: false, required: true
  public get categories() {
    return this.getListAttribute('categories');
  }

  // icon - computed: true, optional: false, required: true
  public get icon() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_featured - computed: true, optional: false, required: true
  public get isFeatured() {
    return this.getBooleanAttribute('is_featured');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // package_type - computed: true, optional: false, required: true
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // pricing_types - computed: true, optional: false, required: true
  public get pricingTypes() {
    return this.getListAttribute('pricing_types');
  }

  // publisher - computed: true, optional: false, required: true
  public get publisher() {
    return 'not implemented' as any;
  }

  // regions - computed: true, optional: false, required: true
  public get regions() {
    return 'not implemented' as any;
  }

  // short_description - computed: true, optional: false, required: true
  public get shortDescription() {
    return this.getStringAttribute('short_description');
  }

  // tagline - computed: true, optional: false, required: true
  public get tagline() {
    return this.getStringAttribute('tagline');
  }
}
export interface DataOciMarketplaceListingsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciMarketplaceListings extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMarketplaceListingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_marketplace_listings',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._category = config.category;
    this._compartmentId = config.compartmentId;
    this._isFeatured = config.isFeatured;
    this._listingId = config.listingId;
    this._name = config.name;
    this._packageType = config.packageType;
    this._pricing = config.pricing;
    this._publisherId = config.publisherId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: true, required: false
  private _category?: string[];
  public get category() {
    return this._category;
  }
  public set category(value: string[] | undefined) {
    this._category = value;
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string | undefined) {
    this._compartmentId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_featured - computed: false, optional: true, required: false
  private _isFeatured?: boolean;
  public get isFeatured() {
    return this._isFeatured;
  }
  public set isFeatured(value: boolean | undefined) {
    this._isFeatured = value;
  }

  // listing_id - computed: false, optional: true, required: false
  private _listingId?: string;
  public get listingId() {
    return this._listingId;
  }
  public set listingId(value: string | undefined) {
    this._listingId = value;
  }

  // listings - computed: true, optional: false, required: true
  public listings(index: string) {
    return new DataOciMarketplaceListingsListings(this, 'listings', index);
  }

  // name - computed: false, optional: true, required: false
  private _name?: string[];
  public get name() {
    return this._name;
  }
  public set name(value: string[] | undefined) {
    this._name = value;
  }

  // package_type - computed: false, optional: true, required: false
  private _packageType?: string;
  public get packageType() {
    return this._packageType;
  }
  public set packageType(value: string | undefined) {
    this._packageType = value;
  }

  // pricing - computed: false, optional: true, required: false
  private _pricing?: string[];
  public get pricing() {
    return this._pricing;
  }
  public set pricing(value: string[] | undefined) {
    this._pricing = value;
  }

  // publisher_id - computed: false, optional: true, required: false
  private _publisherId?: string;
  public get publisherId() {
    return this._publisherId;
  }
  public set publisherId(value: string | undefined) {
    this._publisherId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciMarketplaceListingsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciMarketplaceListingsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      category: this._category,
      compartment_id: this._compartmentId,
      is_featured: this._isFeatured,
      listing_id: this._listingId,
      name: this._name,
      package_type: this._packageType,
      pricing: this._pricing,
      publisher_id: this._publisherId,
      filter: this._filter,
    };
  }
}
