// https://www.terraform.io/docs/providers/oci/r/marketplace_listing_package_agreement.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "agreement_id": {
        "type": "string",
        "required": true
      },
      "author": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "content_url": {
        "type": "string",
        "computed": true
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
      },
      "prompt": {
        "type": "string",
        "computed": true
      },
      "signature": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MarketplaceListingPackageAgreementConfig extends TerraformMetaArguments {
  readonly agreementId: string;
  readonly listingId: string;
  readonly packageVersion: string;
}

// Resource

export class MarketplaceListingPackageAgreement extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MarketplaceListingPackageAgreementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_marketplace_listing_package_agreement',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._agreementId = config.agreementId;
    this._listingId = config.listingId;
    this._packageVersion = config.packageVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agreement_id - computed: false, optional: false, required: true
  private _agreementId: string;
  public get agreementId() {
    return this._agreementId;
  }
  public set agreementId(value: string) {
    this._agreementId = value;
  }

  // author - computed: true, optional: false, required: true
  public get author() {
    return this.getStringAttribute('author');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // content_url - computed: true, optional: false, required: true
  public get contentUrl() {
    return this.getStringAttribute('content_url');
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

  // prompt - computed: true, optional: false, required: true
  public get prompt() {
    return this.getStringAttribute('prompt');
  }

  // signature - computed: true, optional: false, required: true
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      agreement_id: this._agreementId,
      listing_id: this._listingId,
      package_version: this._packageVersion,
    };
  }
}
