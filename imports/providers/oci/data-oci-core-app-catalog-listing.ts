// https://www.terraform.io/docs/providers/oci/r/data_oci_core_app_catalog_listing.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "contact_url": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "display_name": {
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
      "publisher_logo_url": {
        "type": "string",
        "computed": true
      },
      "publisher_name": {
        "type": "string",
        "computed": true
      },
      "summary": {
        "type": "string",
        "computed": true
      },
      "time_published": {
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

// Configuration

export interface DataOciCoreAppCatalogListingConfig extends TerraformMetaArguments {
  readonly listingId: string;
}

// Resource

export class DataOciCoreAppCatalogListing extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreAppCatalogListingConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_app_catalog_listing',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._listingId = config.listingId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      listing_id: this._listingId,
    };
  }
}
