// https://www.terraform.io/docs/providers/oci/r/data_oci_marketplace_listing_packages.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "listing_id": {
        "type": "string",
        "required": true
      },
      "listing_packages": {
        "type": [
          "list",
          [
            "object",
            {
              "listing_id": "string",
              "package_type": "string",
              "package_version": "string",
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
              "resource_id": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "package_type": {
        "type": "string",
        "optional": true
      },
      "package_version": {
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

export interface DataOciMarketplaceListingPackagesConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly listingId: string;
  readonly packageType?: string;
  readonly packageVersion?: string;
  /** filter block */
  readonly filter?: DataOciMarketplaceListingPackagesFilter[];
}
export class DataOciMarketplaceListingPackagesListingPackagesRegionsCountries extends ComplexComputedList {

  // code - computed: true, optional: false, required: true
  public get code() {
    return this.getStringAttribute('code');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciMarketplaceListingPackagesListingPackagesRegions extends ComplexComputedList {

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
export class DataOciMarketplaceListingPackagesListingPackages extends ComplexComputedList {

  // listing_id - computed: true, optional: false, required: true
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }

  // package_type - computed: true, optional: false, required: true
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // package_version - computed: true, optional: false, required: true
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // regions - computed: true, optional: false, required: true
  public get regions() {
    return 'not implemented' as any;
  }

  // resource_id - computed: true, optional: false, required: true
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciMarketplaceListingPackagesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciMarketplaceListingPackages extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMarketplaceListingPackagesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_marketplace_listing_packages',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._listingId = config.listingId;
    this._packageType = config.packageType;
    this._packageVersion = config.packageVersion;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // listing_id - computed: false, optional: false, required: true
  private _listingId: string;
  public get listingId() {
    return this._listingId;
  }
  public set listingId(value: string) {
    this._listingId = value;
  }

  // listing_packages - computed: true, optional: false, required: true
  public listingPackages(index: string) {
    return new DataOciMarketplaceListingPackagesListingPackages(this, 'listing_packages', index);
  }

  // package_type - computed: false, optional: true, required: false
  private _packageType?: string;
  public get packageType() {
    return this._packageType;
  }
  public set packageType(value: string | undefined) {
    this._packageType = value;
  }

  // package_version - computed: false, optional: true, required: false
  private _packageVersion?: string;
  public get packageVersion() {
    return this._packageVersion;
  }
  public set packageVersion(value: string | undefined) {
    this._packageVersion = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciMarketplaceListingPackagesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciMarketplaceListingPackagesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      listing_id: this._listingId,
      package_type: this._packageType,
      package_version: this._packageVersion,
      filter: this._filter,
    };
  }
}
