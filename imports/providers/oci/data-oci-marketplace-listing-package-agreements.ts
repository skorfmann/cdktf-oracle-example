// https://www.terraform.io/docs/providers/oci/r/data_oci_marketplace_listing_package_agreements.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "agreements": {
        "type": [
          "list",
          [
            "object",
            {
              "author": "string",
              "content_url": "string",
              "id": "string",
              "prompt": "string"
            }
          ]
        ],
        "computed": true
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
      "listing_id": {
        "type": "string",
        "required": true
      },
      "package_version": {
        "type": "string",
        "required": true
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

export interface DataOciMarketplaceListingPackageAgreementsConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly listingId: string;
  readonly packageVersion: string;
  /** filter block */
  readonly filter?: DataOciMarketplaceListingPackageAgreementsFilter[];
}
export class DataOciMarketplaceListingPackageAgreementsAgreements extends ComplexComputedList {

  // author - computed: true, optional: false, required: true
  public get author() {
    return this.getStringAttribute('author');
  }

  // content_url - computed: true, optional: false, required: true
  public get contentUrl() {
    return this.getStringAttribute('content_url');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // prompt - computed: true, optional: false, required: true
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
}
export interface DataOciMarketplaceListingPackageAgreementsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciMarketplaceListingPackageAgreements extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMarketplaceListingPackageAgreementsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_marketplace_listing_package_agreements',
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
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agreements - computed: true, optional: false, required: true
  public agreements(index: string) {
    return new DataOciMarketplaceListingPackageAgreementsAgreements(this, 'agreements', index);
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

  // listing_id - computed: false, optional: false, required: true
  private _listingId: string;
  public get listingId() {
    return this._listingId;
  }
  public set listingId(value: string) {
    this._listingId = value;
  }

  // package_version - computed: false, optional: false, required: true
  private _packageVersion: string;
  public get packageVersion() {
    return this._packageVersion;
  }
  public set packageVersion(value: string) {
    this._packageVersion = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciMarketplaceListingPackageAgreementsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciMarketplaceListingPackageAgreementsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      listing_id: this._listingId,
      package_version: this._packageVersion,
      filter: this._filter,
    };
  }
}
