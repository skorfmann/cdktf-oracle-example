// https://www.terraform.io/docs/providers/oci/r/data_oci_marketplace_listing_package.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "app_catalog_listing_id": {
        "type": "string",
        "computed": true
      },
      "app_catalog_listing_resource_version": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "optional": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "image_id": {
        "type": "string",
        "computed": true
      },
      "listing_id": {
        "type": "string",
        "required": true
      },
      "package_type": {
        "type": "string",
        "computed": true
      },
      "package_version": {
        "type": "string",
        "required": true
      },
      "pricing": {
        "type": [
          "list",
          [
            "object",
            {
              "currency": "string",
              "pay_go_strategy": "string",
              "rate": "number",
              "type": "string"
            }
          ]
        ],
        "computed": true
      },
      "regions": {
        "type": [
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
        "computed": true
      },
      "resource_id": {
        "type": "string",
        "computed": true
      },
      "resource_link": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "variables": {
        "type": [
          "list",
          [
            "object",
            {
              "data_type": "string",
              "default_value": "string",
              "description": "string",
              "hint_message": "string",
              "is_mandatory": "bool",
              "name": "string"
            }
          ]
        ],
        "computed": true
      },
      "version": {
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciMarketplaceListingPackageConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly listingId: string;
  readonly packageVersion: string;
}
export class DataOciMarketplaceListingPackagePricing extends ComplexComputedList {

  // currency - computed: true, optional: false, required: true
  public get currency() {
    return this.getStringAttribute('currency');
  }

  // pay_go_strategy - computed: true, optional: false, required: true
  public get payGoStrategy() {
    return this.getStringAttribute('pay_go_strategy');
  }

  // rate - computed: true, optional: false, required: true
  public get rate() {
    return this.getNumberAttribute('rate');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataOciMarketplaceListingPackageRegionsCountries extends ComplexComputedList {

  // code - computed: true, optional: false, required: true
  public get code() {
    return this.getStringAttribute('code');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciMarketplaceListingPackageRegions extends ComplexComputedList {

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
export class DataOciMarketplaceListingPackageVariables extends ComplexComputedList {

  // data_type - computed: true, optional: false, required: true
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // default_value - computed: true, optional: false, required: true
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // hint_message - computed: true, optional: false, required: true
  public get hintMessage() {
    return this.getStringAttribute('hint_message');
  }

  // is_mandatory - computed: true, optional: false, required: true
  public get isMandatory() {
    return this.getBooleanAttribute('is_mandatory');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}

// Resource

export class DataOciMarketplaceListingPackage extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMarketplaceListingPackageConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_marketplace_listing_package',
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
    this._packageVersion = config.packageVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_catalog_listing_id - computed: true, optional: false, required: true
  public get appCatalogListingId() {
    return this.getStringAttribute('app_catalog_listing_id');
  }

  // app_catalog_listing_resource_version - computed: true, optional: false, required: true
  public get appCatalogListingResourceVersion() {
    return this.getStringAttribute('app_catalog_listing_resource_version');
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string | undefined) {
    this._compartmentId = value;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_id - computed: true, optional: false, required: true
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // listing_id - computed: false, optional: false, required: true
  private _listingId: string;
  public get listingId() {
    return this._listingId;
  }
  public set listingId(value: string) {
    this._listingId = value;
  }

  // package_type - computed: true, optional: false, required: true
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // package_version - computed: false, optional: false, required: true
  private _packageVersion: string;
  public get packageVersion() {
    return this._packageVersion;
  }
  public set packageVersion(value: string) {
    this._packageVersion = value;
  }

  // pricing - computed: true, optional: false, required: true
  public pricing(index: string) {
    return new DataOciMarketplaceListingPackagePricing(this, 'pricing', index);
  }

  // regions - computed: true, optional: false, required: true
  public regions(index: string) {
    return new DataOciMarketplaceListingPackageRegions(this, 'regions', index);
  }

  // resource_id - computed: true, optional: false, required: true
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_link - computed: true, optional: false, required: true
  public get resourceLink() {
    return this.getStringAttribute('resource_link');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // variables - computed: true, optional: false, required: true
  public variables(index: string) {
    return new DataOciMarketplaceListingPackageVariables(this, 'variables', index);
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      listing_id: this._listingId,
      package_version: this._packageVersion,
    };
  }
}
