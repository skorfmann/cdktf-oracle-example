// https://www.terraform.io/docs/providers/oci/r/data_oci_core_app_catalog_subscriptions.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "app_catalog_subscriptions": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "display_name": "string",
              "eula_link": "string",
              "listing_id": "string",
              "listing_resource_id": "string",
              "listing_resource_version": "string",
              "oracle_terms_of_use_link": "string",
              "publisher_name": "string",
              "signature": "string",
              "summary": "string",
              "time_created": "string",
              "time_retrieved": "string"
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "listing_id": {
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

export interface DataOciCoreAppCatalogSubscriptionsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly listingId?: string;
  /** filter block */
  readonly filter?: DataOciCoreAppCatalogSubscriptionsFilter[];
}
export class DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // eula_link - computed: true, optional: false, required: true
  public get eulaLink() {
    return this.getStringAttribute('eula_link');
  }

  // listing_id - computed: true, optional: false, required: true
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }

  // listing_resource_id - computed: true, optional: false, required: true
  public get listingResourceId() {
    return this.getStringAttribute('listing_resource_id');
  }

  // listing_resource_version - computed: true, optional: false, required: true
  public get listingResourceVersion() {
    return this.getStringAttribute('listing_resource_version');
  }

  // oracle_terms_of_use_link - computed: true, optional: false, required: true
  public get oracleTermsOfUseLink() {
    return this.getStringAttribute('oracle_terms_of_use_link');
  }

  // publisher_name - computed: true, optional: false, required: true
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
  }

  // signature - computed: true, optional: false, required: true
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // summary - computed: true, optional: false, required: true
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_retrieved - computed: true, optional: false, required: true
  public get timeRetrieved() {
    return this.getStringAttribute('time_retrieved');
  }
}
export interface DataOciCoreAppCatalogSubscriptionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreAppCatalogSubscriptions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreAppCatalogSubscriptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_app_catalog_subscriptions',
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
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_catalog_subscriptions - computed: true, optional: false, required: true
  public appCatalogSubscriptions(index: string) {
    return new DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions(this, 'app_catalog_subscriptions', index);
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
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

  // listing_id - computed: false, optional: true, required: false
  private _listingId?: string;
  public get listingId() {
    return this._listingId;
  }
  public set listingId(value: string | undefined) {
    this._listingId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreAppCatalogSubscriptionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreAppCatalogSubscriptionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      listing_id: this._listingId,
      filter: this._filter,
    };
  }
}
