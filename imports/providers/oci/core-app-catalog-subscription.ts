// https://www.terraform.io/docs/providers/oci/r/core_app_catalog_subscription.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "eula_link": {
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
        "required": true
      },
      "listing_resource_id": {
        "type": "string",
        "computed": true
      },
      "listing_resource_version": {
        "type": "string",
        "required": true
      },
      "oracle_terms_of_use_link": {
        "type": "string",
        "required": true
      },
      "publisher_name": {
        "type": "string",
        "computed": true
      },
      "signature": {
        "type": "string",
        "required": true
      },
      "summary": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_retrieved": {
        "type": "string",
        "required": true
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

export interface CoreAppCatalogSubscriptionConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly eulaLink: string;
  readonly listingId: string;
  readonly listingResourceVersion: string;
  readonly oracleTermsOfUseLink: string;
  readonly signature: string;
  readonly timeRetrieved: string;
  /** timeouts block */
  readonly timeouts?: CoreAppCatalogSubscriptionTimeouts;
}
export interface CoreAppCatalogSubscriptionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreAppCatalogSubscription extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreAppCatalogSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_app_catalog_subscription',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._eulaLink = config.eulaLink;
    this._listingId = config.listingId;
    this._listingResourceVersion = config.listingResourceVersion;
    this._oracleTermsOfUseLink = config.oracleTermsOfUseLink;
    this._signature = config.signature;
    this._timeRetrieved = config.timeRetrieved;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // eula_link - computed: false, optional: false, required: true
  private _eulaLink: string;
  public get eulaLink() {
    return this._eulaLink;
  }
  public set eulaLink(value: string) {
    this._eulaLink = value;
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

  // listing_resource_id - computed: true, optional: false, required: true
  public get listingResourceId() {
    return this.getStringAttribute('listing_resource_id');
  }

  // listing_resource_version - computed: false, optional: false, required: true
  private _listingResourceVersion: string;
  public get listingResourceVersion() {
    return this._listingResourceVersion;
  }
  public set listingResourceVersion(value: string) {
    this._listingResourceVersion = value;
  }

  // oracle_terms_of_use_link - computed: false, optional: false, required: true
  private _oracleTermsOfUseLink: string;
  public get oracleTermsOfUseLink() {
    return this._oracleTermsOfUseLink;
  }
  public set oracleTermsOfUseLink(value: string) {
    this._oracleTermsOfUseLink = value;
  }

  // publisher_name - computed: true, optional: false, required: true
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
  }

  // signature - computed: false, optional: false, required: true
  private _signature: string;
  public get signature() {
    return this._signature;
  }
  public set signature(value: string) {
    this._signature = value;
  }

  // summary - computed: true, optional: false, required: true
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_retrieved - computed: false, optional: false, required: true
  private _timeRetrieved: string;
  public get timeRetrieved() {
    return this._timeRetrieved;
  }
  public set timeRetrieved(value: string) {
    this._timeRetrieved = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreAppCatalogSubscriptionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreAppCatalogSubscriptionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      eula_link: this._eulaLink,
      listing_id: this._listingId,
      listing_resource_version: this._listingResourceVersion,
      oracle_terms_of_use_link: this._oracleTermsOfUseLink,
      signature: this._signature,
      time_retrieved: this._timeRetrieved,
      timeouts: this._timeouts,
    };
  }
}
